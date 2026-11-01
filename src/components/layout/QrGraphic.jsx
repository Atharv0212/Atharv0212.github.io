// Decorative QR-style graphic (not a scannable code yet).
const blocks = [
  [42, 10, 8, 8], [54, 18, 6, 6], [44, 28, 8, 8], [10, 44, 8, 8], [24, 48, 6, 6],
  [66, 44, 8, 8], [80, 50, 8, 8], [42, 70, 10, 10], [56, 80, 8, 8], [74, 72, 16, 8], [82, 84, 8, 8],
];
const finders = [[5, 5], [67, 5], [5, 67]];

export default function QrGraphic() {
  return (
    <svg className="w-36 h-36 mx-auto" fill="#1C1B1A" viewBox="0 0 100 100">
      {finders.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect fill="none" height="28" rx="4" stroke="#1C1B1A" strokeWidth="4" width="28" x={x} y={y} />
          <rect fill="#1C1B1A" height="16" width="16" x={x + 6} y={y + 6} />
        </g>
      ))}
      {blocks.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} fill="#1C1B1A" height={h} width={w} x={x} y={y} />
      ))}
      <rect fill="#1C1B1A" height="20" rx="3" width="20" x="40" y="42" />
    </svg>
  );
}
