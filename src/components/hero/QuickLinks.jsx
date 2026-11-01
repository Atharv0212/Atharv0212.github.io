import { quickLinks } from '../../data/profile';

export default function QuickLinks() {
  return (
    <div className="mt-14 pt-8 border-t-2 border-brand-dark/20 grid grid-cols-2 md:grid-cols-4 gap-4">
      {quickLinks.map((tile) => (
        <a
          key={tile.title}
          href={tile.href}
          className="group bg-brand-card hover:bg-brand-yellow border-2 border-brand-dark p-4 rounded-2xl shadow-brutal-sm transition-all duration-200 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-brand-yellow group-hover:bg-brand-dark text-brand-dark group-hover:text-brand-yellow rounded-xl border-2 border-brand-dark flex items-center justify-center text-xl transition-colors">
            <i className={`fa-solid ${tile.icon}`} />
          </div>
          <div>
            <h4 className="font-chunky text-sm text-brand-dark leading-tight">{tile.title}</h4>
            <p className="text-xs text-brand-muted font-mono mt-0.5">{tile.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
