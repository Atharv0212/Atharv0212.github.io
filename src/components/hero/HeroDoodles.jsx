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

// Claude Code mascot.
export function ClaudeMascotDoodle({ className }) {
  return (
    <svg className={className} viewBox="0 0 70 80" {...base} aria-hidden="true">
      <g transform="rotate(-8 35 40)">
        <path
          d="M12 16H58V30H66V42H58V52H54V62H49V52H45V62H40V52H30V62H25V52H21V62H16V52H12V42H4V30H12Z"
        />
        {/* happy "> <" eyes */}
        <path d="M22 26L29 31L22 36" />
        <path d="M48 26L41 31L48 36" />
      </g>
    </svg>
  );
}

// "</>" code glyph.
export function CodeDoodle({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 40" {...base} strokeWidth={3} aria-hidden="true">
      <path d="M20 8L8 20L20 32" />
      <path d="M34 6L26 34" />
      <path d="M40 8L52 20L40 32" />
    </svg>
  );
}
