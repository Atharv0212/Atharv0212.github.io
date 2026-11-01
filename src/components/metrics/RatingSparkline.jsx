// Tiny line chart of contest rating after each rated contest.
export default function RatingSparkline({ values }) {
  if (values.length < 2) return null;

  const w = 200;
  const h = 44;
  const pad = 4;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const x = (i) => pad + (i / (values.length - 1)) * (w - pad * 2);
  const y = (v) => h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
  const points = values.map((v, i) => `${x(i)},${y(v)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-11 mt-3" preserveAspectRatio="none" aria-label="Rating history">
      <polyline points={`${pad},${h} ${points} ${w - pad},${h}`} fill="#F5A623" fillOpacity="0.25" stroke="none" />
      <polyline points={points} fill="none" stroke="#1C1B1A" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      {values.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r="2.5" fill="#F5A623" stroke="#1C1B1A" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}
