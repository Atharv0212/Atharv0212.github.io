// Fetches GitHub / LeetCode / Codeforces stats and writes src/data/stats.json.
// Runs in CI on a schedule (see .github/workflows/deploy.yml) and locally via `npm run stats`.
// If a source fails, its previous value is kept so one flaky API never blanks a card.
import { readFile, writeFile } from 'node:fs/promises';
import { profile } from '../src/data/profile.js';

const { handles } = profile;

const OUT = new URL('../src/data/stats.json', import.meta.url);
const UA = 'Mozilla/5.0 (portfolio-stats-bot)';

// ---------- GitHub ----------

const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

async function githubQuery(query, variables) {
  const token = process.env.GH_STATS_TOKEN;
  if (!token) throw new Error('GH_STATS_TOKEN not set');
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': UA },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? json));
  return json.data;
}

function streaks(days) {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  // Today may not have activity yet, so the current streak may end yesterday.
  let i = days.length - 1;
  if (days[i]?.count === 0) i--;
  let current = 0;
  while (i >= 0 && days[i].count > 0) {
    current++;
    i--;
  }
  return { current, longest };
}

async function fetchGitHub(login) {
  const { user } = await githubQuery(
    `query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionYears
          contributionCalendar {
            totalContributions
            weeks { contributionDays { date contributionCount contributionLevel } }
          }
        }
        repositories(ownerAffiliations: OWNER, isFork: false, first: 100, orderBy: {field: PUSHED_AT, direction: DESC}) {
          nodes { languages(first: 5, orderBy: {field: SIZE, direction: DESC}) { edges { size node { name } } } }
        }
      }
    }`,
    { login },
  );

  const collection = user.contributionsCollection;
  const calendar = collection.contributionCalendar;

  // All-time total: one aliased contributionsCollection per year.
  const yearFields = collection.contributionYears
    .map((y) => `y${y}: contributionsCollection(from: "${y}-01-01T00:00:00Z", to: "${y}-12-31T23:59:59Z") { contributionCalendar { totalContributions } }`)
    .join('\n');
  const years = (await githubQuery(`query($login: String!) { user(login: $login) { ${yearFields} } }`, { login })).user;
  const allTime = Object.values(years).reduce((sum, y) => sum + y.contributionCalendar.totalContributions, 0);

  const days = calendar.weeks.flatMap((w) =>
    w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] ?? 0 })),
  );

  // Heatmap: weeks of 7 cells; pad the first week so rows line up with weekdays (Sun = row 0).
  const weeks = calendar.weeks.map((w) =>
    w.contributionDays.map((d) => [d.date, d.contributionCount, LEVELS[d.contributionLevel] ?? 0]),
  );
  const firstWeekday = new Date(`${weeks[0][0][0]}T00:00:00Z`).getUTCDay();
  weeks[0] = [...Array(firstWeekday).fill(null), ...weeks[0]];

  const langSizes = {};
  for (const repo of user.repositories.nodes) {
    for (const { size, node } of repo.languages.edges) langSizes[node.name] = (langSizes[node.name] ?? 0) + size;
  }
  const topLanguages = Object.entries(langSizes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => name);

  const { current, longest } = streaks(days);

  return {
    login,
    allTimeContributions: allTime,
    lastYearContributions: calendar.totalContributions,
    thisWeek: days.slice(-7).reduce((sum, d) => sum + d.count, 0),
    currentStreak: current,
    longestStreak: longest,
    topLanguages,
    weeks,
  };
}

// ---------- LeetCode ----------

async function fetchLeetCode(username) {
  const res = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Referer: 'https://leetcode.com', 'User-Agent': UA },
    body: JSON.stringify({
      query: `query($u: String!) {
        matchedUser(username: $u) {
          submitStatsGlobal { acSubmissionNum { difficulty count } }
          tagProblemCounts {
            advanced { tagName problemsSolved }
            intermediate { tagName problemsSolved }
            fundamental { tagName problemsSolved }
          }
        }
        allQuestionsCount { difficulty count }
        userContestRanking(username: $u) { rating attendedContestsCount topPercentage }
      }`,
      variables: { u: username },
    }),
  });
  const { data, errors } = await res.json();
  if (!res.ok || errors || !data?.matchedUser) throw new Error(JSON.stringify(errors ?? res.status));

  const solved = Object.fromEntries(data.matchedUser.submitStatsGlobal.acSubmissionNum.map((s) => [s.difficulty, s.count]));
  const totals = Object.fromEntries(data.allQuestionsCount.map((s) => [s.difficulty, s.count]));
  const tags = Object.values(data.matchedUser.tagProblemCounts)
    .flat()
    .sort((a, b) => b.problemsSolved - a.problemsSolved)
    .slice(0, 4)
    .map((t) => t.tagName);
  const contest = data.userContestRanking;

  return {
    username,
    solved: solved.All,
    difficulty: ['Easy', 'Medium', 'Hard'].map((d) => ({ name: d, solved: solved[d], total: totals[d] })),
    topTags: tags,
    contest: contest?.attendedContestsCount
      ? { rating: Math.round(contest.rating), attended: contest.attendedContestsCount, topPercentage: contest.topPercentage }
      : null,
  };
}

// ---------- Codeforces ----------

async function codeforces(method) {
  const res = await fetch(`https://codeforces.com/api/${method}`, { headers: { 'User-Agent': UA } });
  const json = await res.json();
  if (json.status !== 'OK') throw new Error(json.comment ?? res.status);
  return json.result;
}

async function fetchCodeforces(handle) {
  const [[info], history] = await Promise.all([
    codeforces(`user.info?handles=${handle}`),
    codeforces(`user.rating?handle=${handle}`),
  ]);
  return {
    handle: info.handle,
    rating: info.rating ?? 0,
    rank: info.rank ?? 'unrated',
    maxRating: info.maxRating ?? 0,
    maxRank: info.maxRank ?? 'unrated',
    contests: history.length,
    ratingHistory: history.map((c) => c.newRating),
  };
}

// ---------- main ----------

const previous = JSON.parse(await readFile(OUT, 'utf8').catch(() => '{}'));
const sources = {
  github: () => fetchGitHub(handles.github),
  leetcode: () => fetchLeetCode(handles.leetcode),
  codeforces: () => fetchCodeforces(handles.codeforces),
};

const next = {};
let failures = 0;
for (const [key, fetcher] of Object.entries(sources)) {
  try {
    next[key] = await fetcher();
    console.log(`✓ ${key}`);
  } catch (err) {
    failures++;
    next[key] = previous[key] ?? null;
    console.warn(`✗ ${key}: ${err.message} — keeping previous data`);
  }
}

const { fetchedAt: _, ...prevData } = previous;
if (JSON.stringify(prevData) === JSON.stringify(next)) {
  console.log('No changes in stats.');
} else {
  await writeFile(OUT, `${JSON.stringify({ fetchedAt: new Date().toISOString(), ...next }, null, 2)}\n`);
  console.log('Wrote src/data/stats.json');
}

// Fail the job only if every source failed (likely a network problem).
if (failures === Object.keys(sources).length) process.exit(1);
