import { profile } from '../../data/profile';
import MetricCard from './MetricCard';

const difficultyStyle = {
  Easy: 'text-emerald-600',
  Medium: 'text-amber-600',
  Hard: 'text-rose-600',
};

export default function LeetCodeCard({ data }) {
  return (
    <MetricCard
      label="LeetCode"
      href={profile.links.leetcode}
      icon={
        <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-700 flex items-center justify-center text-xs font-bold">
          LC
        </span>
      }
      className="md:col-span-3"
    >
      {data ? (
        <>
          <div className="flex-1">
            <h4 className="text-4xl font-chunky text-brand-dark">{data.solved}</h4>
            <p className="text-xs font-mono text-brand-muted">Problems Solved</p>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 text-center font-mono">
            {data.difficulty.map((d) => (
              <div key={d.name} className="bg-white border border-brand-dark rounded-lg py-2 shadow-brutal-sm">
                <p className="text-xl font-chunky text-brand-dark">{d.solved}</p>
                <p className={`text-[10px] font-bold uppercase ${difficultyStyle[d.name]}`}>{d.name}</p>
              </div>
            ))}
          </div>
          <div className="space-y-1 mt-4">
            {data.contest && (
              <p className="text-[11px] font-mono text-brand-muted pt-1">
                Contest rating: <strong className="text-brand-dark">{data.contest.rating}</strong> · Top{' '}
                {data.contest.topPercentage}%
              </p>
            )}
            <p className="text-[11px] font-mono text-brand-muted pt-1">Top topics: {data.topTags.join(', ')}</p>
          </div>
        </>
      ) : (
        <p className="text-xs font-mono text-brand-muted">Awaiting sync.</p>
      )}
    </MetricCard>
  );
}
