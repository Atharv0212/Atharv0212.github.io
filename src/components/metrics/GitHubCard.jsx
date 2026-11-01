import { profile } from '../../data/profile';
import ContributionHeatmap from './ContributionHeatmap';
import MetricCard from './MetricCard';

export default function GitHubCard({ data }) {
  return (
    <MetricCard
      label="GitHub Activity"
      href={profile.links.github}
      icon={<i className="fa-brands fa-github text-2xl text-brand-dark" />}
      className="md:col-span-6"
    >
      {data ? (
        <>
          <div className="flex-1">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h4 className="text-4xl font-chunky text-brand-dark">
                {data.allTimeContributions.toLocaleString()} Contributions
              </h4>
              <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded-md">
                +{data.thisWeek} this week
              </span>
            </div>
            <p className="text-xs text-brand-muted font-mono mt-1">
              {data.lastYearContributions.toLocaleString()} in the last year · longest streak {data.longestStreak} days
              {data.topLanguages.length > 0 && ` · mostly ${data.topLanguages.join(', ')}`}
            </p>
          </div>
          <ContributionHeatmap weeks={data.weeks} />
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 py-10 border-2 border-dashed border-brand-dark/30 rounded-xl">
          <i className="fa-solid fa-satellite-dish text-2xl text-brand-yellow" />
          <p className="text-sm font-chunky text-brand-dark">Awaiting first GitHub sync</p>
          <p className="text-[11px] font-mono text-brand-muted">Contribution heatmap appears after the stats workflow runs.</p>
        </div>
      )}
    </MetricCard>
  );
}
