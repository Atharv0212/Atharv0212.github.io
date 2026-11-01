import { profile } from '../../data/profile';
import MetricCard from './MetricCard';
import RatingSparkline from './RatingSparkline';

const capitalize = (s) => s.replace(/\b\w/g, (ch) => ch.toUpperCase());

export default function CodeforcesCard({ data }) {
  return (
    <MetricCard
      label="Codeforces"
      href={profile.links.codeforces}
      icon={<i className="fa-solid fa-chart-line text-lg text-brand-dark" />}
      className="md:col-span-3"
    >
      {data ? (
        <>
          <div className="flex-1">
            <h4 className="text-4xl font-chunky text-brand-dark">{data.rating}</h4>
            <div className="inline-block bg-brand-dark text-brand-yellow font-mono text-xs px-2.5 py-0.5 rounded font-bold uppercase mt-1">
              {capitalize(data.rank)}
            </div>
            <RatingSparkline values={data.ratingHistory} />
          </div>
          <div className="pt-4 mt-4 border-t border-brand-dark/20 text-xs font-mono space-y-1">
            <p className="text-brand-muted">
              Max rating:{' '}
              <strong className="text-brand-dark font-bold">
                {data.maxRating} ({capitalize(data.maxRank)})
              </strong>
            </p>
            <p className="text-brand-muted">
              Contests: <strong className="text-brand-dark font-bold">{data.contests} rated</strong>
            </p>
            <p className="text-[11px] text-brand-dark font-semibold pt-1">
              Handle: <span className="underline">{data.handle}</span>
            </p>
          </div>
        </>
      ) : (
        <p className="text-xs font-mono text-brand-muted">Awaiting sync.</p>
      )}
    </MetricCard>
  );
}
