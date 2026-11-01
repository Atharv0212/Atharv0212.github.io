export default function MetricCard({ label, icon, href, className = '', children }) {
  return (
    <div
      className={`bg-brand-card border-2 border-brand-dark rounded-2xl p-6 shadow-brutal flex flex-col justify-between ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono font-bold uppercase text-brand-muted tracking-wider">{label}</span>
        <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} profile`} className="hover:opacity-70">
          {icon}
        </a>
      </div>
      {children}
    </div>
  );
}
