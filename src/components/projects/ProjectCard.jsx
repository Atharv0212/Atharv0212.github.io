import TechBadge from '../ui/TechBadge';

const badgeStyles = {
  yellow: 'bg-brand-yellow text-brand-dark',
  dark: 'bg-brand-dark text-brand-yellow',
};

const secondaryStyles = {
  yellow: 'bg-brand-yellow hover:bg-brand-gold text-brand-dark',
  dark: 'bg-brand-dark hover:bg-stone-800 text-brand-yellow',
};

const buttonBase =
  'flex-1 text-center py-2.5 rounded-xl border-2 border-brand-dark font-mono text-xs font-bold shadow-brutal-sm transition-all flex items-center justify-center gap-2';

export default function ProjectCard({ project }) {
  const { secondary } = project;

  return (
    <article className="bg-brand-card border-2 border-brand-dark rounded-3xl p-7 shadow-brutal flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-block px-3 py-0.5 rounded-full text-xs font-mono font-extrabold uppercase border border-brand-dark ${badgeStyles[project.badgeVariant]}`}
          >
            {project.badge}
          </span>
          <span className="text-xs font-mono text-brand-muted">{project.meta}</span>
        </div>
        <h4 className="text-2xl font-chunky text-brand-dark leading-tight mb-2">{project.title}</h4>
        <p className="text-xs font-mono text-brand-muted flex items-center gap-2 mb-4">
          <i className={`fa-solid ${project.subtitleIcon} text-brand-yellow`} />
          {project.subtitle}
        </p>
        <p className="text-sm text-brand-charcoal leading-relaxed mb-6 font-medium">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 p-4 bg-stone-200/70 rounded-2xl border border-brand-dark mb-6 text-center font-mono">
          {project.benchmarks.map((b, i) => (
            <div key={b.label} className={i === 1 ? 'border-x border-brand-dark/20' : ''}>
              <p className="text-lg font-chunky text-brand-dark">{b.value}</p>
              <p className="text-[10px] text-brand-muted uppercase">{b.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <a href={project.github} target="_blank" rel="noreferrer" className={`${buttonBase} bg-white hover:bg-stone-100`}>
          <i className="fa-brands fa-github" /> GitHub
        </a>
        <a href={secondary.href} className={`${buttonBase} ${secondaryStyles[secondary.variant]}`}>
          <i className={`fa-solid ${secondary.icon}`} /> {secondary.label}
        </a>
      </div>
    </article>
  );
}
