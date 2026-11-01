import stats from '../../data/stats.json';
import QuoteHeading from '../ui/QuoteHeading';
import CodeforcesCard from './CodeforcesCard';
import GitHubCard from './GitHubCard';
import LeetCodeCard from './LeetCodeCard';

// CI sets this at build time; locally fall back to when stats were last fetched.
const syncedAt = new Date(import.meta.env.VITE_STATS_SYNCED_AT || stats.fetchedAt);

function timeAgo(date) {
  const hours = Math.round((Date.now() - date) / 36e5);
  if (hours < 1) return 'just now';
  if (hours < 48) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

export default function DeveloperMetrics() {
  const { github, leetcode, codeforces } = stats;

  return (
    <section id="stats" className="py-14 border-t-2 border-brand-dark relative">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </span>
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider text-brand-muted"
              title={syncedAt.toUTCString()}
            >
              Auto-Synced · {timeAgo(syncedAt)}
            </span>
          </div>
          <QuoteHeading className="text-3xl sm:text-4xl mt-1">LIVE DEVELOPER METRICS</QuoteHeading>
        </div>
        {github && (
          <span className="font-mono text-xs bg-brand-card border border-brand-dark px-3 py-1.5 rounded-lg shadow-brutal-sm">
            Active Streak: <strong>{github.currentStreak} Days</strong>
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <GitHubCard data={github} />
        <LeetCodeCard data={leetcode} />
        <CodeforcesCard data={codeforces} />
      </div>
    </section>
  );
}
