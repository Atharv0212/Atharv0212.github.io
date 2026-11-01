const levelClass = [
  'bg-stone-300/70',
  'bg-brand-yellow/35',
  'bg-brand-yellow/65',
  'bg-brand-yellow',
  'bg-brand-dark',
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Label a column when it contains the first week of a month.
function monthLabels(weeks) {
  return weeks.map((week, i) => {
    const firstDay = week.find(Boolean);
    if (!firstDay) return null;
    const date = new Date(`${firstDay[0]}T00:00:00Z`);
    return date.getUTCDate() <= 7 && i > 0 ? MONTHS[date.getUTCMonth()] : null;
  });
}

// weeks: [[ [date, count, level] | null, ...7 ], ...]
export default function ContributionHeatmap({ weeks }) {
  const columns = { gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` };

  return (
    <div className="mt-6 pt-4 border-t border-brand-dark/20">
      <div className="grid gap-[3px] mb-1 text-[9px] font-mono text-brand-muted" style={columns}>
        {monthLabels(weeks).map((label, i) => (
          <span key={i} className="whitespace-nowrap overflow-visible">
            {label}
          </span>
        ))}
      </div>
      <div className="grid gap-[3px]" style={columns}>
        {weeks.map((week, i) => (
          <div key={i} className="grid grid-rows-7 gap-[3px]">
            {Array.from({ length: 7 }, (_, d) => {
              const day = week[d];
              if (!day) return <span key={d} className="aspect-square" />;
              const [date, count, level] = day;
              return (
                <span
                  key={d}
                  title={`${count} contribution${count === 1 ? '' : 's'} on ${date}`}
                  className={`aspect-square rounded-[2px] ${levelClass[level]}`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-[11px] font-mono text-brand-muted mt-2">
        <span>Last 12 months · incl. private</span>
        <span className="flex items-center gap-1">
          Less
          {levelClass.map((cls) => (
            <span key={cls} className={`w-2.5 h-2.5 rounded-[2px] ${cls}`} />
          ))}
          More
        </span>
      </div>
    </div>
  );
}
