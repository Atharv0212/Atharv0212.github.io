// Hand-drawn style line doodles scattered around the hero title.
const base = {
  fill: 'none',
  stroke: '#1C1B1A',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function gearTeeth(cx, cy, r1, r2, n) {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return (
      <line
        key={i}
        x1={cx + Math.cos(a) * r1}
        y1={cy + Math.sin(a) * r1}
        x2={cx + Math.cos(a) * r2}
        y2={cy + Math.sin(a) * r2}
      />
    );
  });
}

export function MonitorDoodle({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" {...base} aria-hidden="true">
      <circle cx="16" cy="12" r="5" />
      {gearTeeth(16, 12, 5, 8, 8)}
      <rect x="8" y="24" width="60" height="38" rx="3" />
      <path d="M38 62v9M26 72h24" />
      <circle cx="38" cy="43" r="6" />
      {gearTeeth(38, 43, 6, 9, 8)}
    </svg>
  );
}

export function CameraDoodle({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 70" {...base} aria-hidden="true">
      <g transform="rotate(-14 40 35)">
        <rect x="6" y="20" width="66" height="40" rx="7" />
        <path d="M24 20l4-9h20l4 9" />
        <circle cx="39" cy="40" r="13" />
        <circle cx="39" cy="40" r="7" />
        <rect x="58" y="26" width="7" height="5" rx="1" />
        <path d="M12 28h6" />
      </g>
    </svg>
  );
}

export function PenToolDoodle({ className }) {
  return (
    <svg className={className} viewBox="0 0 70 80" {...base} aria-hidden="true">
      <g transform="rotate(25 35 40)">
        <path d="M35 6l17 34-17 14-17-14z" />
        <path d="M35 6v28" />
        <circle cx="35" cy="38" r="3.5" />
        <path d="M24 62h22M28 68h14" />
        <path d="M35 54v8" />
      </g>
      <path d="M6 70c8-10 14-4 20-12" strokeDasharray="1 5" />
    </svg>
  );
}

export function ClapperDoodle({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 80" {...base} aria-hidden="true">
      <rect x="6" y="36" width="48" height="34" rx="3" />
      <path d="M6 26l46-10 3 11-46 10z" />
      <path d="M17 24l8 11M30 21l8 11M43 18l8 11" />
      <path d="M24 46l14 8-14 8z" />
      <circle cx="74" cy="22" r="9" />
      <path d="M70 31h8M71 35h6" />
      <path d="M74 4v-1M58 10l-3-3M90 10l3-3M54 22h-4M94 22h-4" />
    </svg>
  );
}
