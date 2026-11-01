function SkillIcon({ name, icon, brand }) {
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={`#${brand.hex}`} role="img" aria-label={name}>
        <path d={brand.path} />
      </svg>
    );
  }
  return <img src={icon} alt={name} className="w-6 h-6 object-contain" loading="lazy" />;
}

export default function SkillTile({ name, detail, icon, brand, wide = false }) {
  return (
    <div
      className={`group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-brand-dark shadow-brutal-sm transition-transform hover:-translate-y-0.5 ${
        wide ? 'col-span-2' : ''
      }`}
    >
      <div className="w-10 h-10 rounded-lg bg-brand-cream border border-brand-dark flex items-center justify-center shrink-0 group-hover:bg-brand-yellow/30 transition-colors">
        <SkillIcon name={name} icon={icon} brand={brand} />
      </div>
      <div>
        <p className="font-bold text-xs text-brand-dark">{name}</p>
        <p className="text-[10px] text-brand-muted font-mono">{detail}</p>
      </div>
    </div>
  );
}
