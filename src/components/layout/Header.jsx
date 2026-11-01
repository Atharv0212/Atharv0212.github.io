import { navLinks, profile } from '../../data/profile';
import useActiveSection from '../../hooks/useActiveSection';

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Header() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="w-full flex items-center justify-between pb-6 mb-8 border-b-2 border-brand-dark">
      {/* Logo & Academic Identity */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 bg-brand-yellow border-2 border-brand-dark rounded-xl flex items-center justify-center shadow-brutal-sm font-display font-extrabold text-lg text-brand-dark">
          {profile.initials}
        </div>
        <div>
          <h1 className="text-base font-extrabold tracking-tight text-brand-dark font-display leading-tight uppercase">
            {profile.name}
          </h1>
          <p className="text-xs font-mono font-medium text-brand-muted flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            {profile.tagline}
          </p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 bg-brand-card/80 backdrop-blur px-6 py-2.5 rounded-full border-2 border-brand-dark shadow-brutal-sm text-sm font-semibold">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`hover:text-brand-yellow transition-colors ${
              active === link.href.slice(1) ? 'text-brand-yellow' : ''
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Status Pill & Contact Shortcut */}
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-flex items-center gap-1.5 bg-brand-yellow/30 border border-brand-yellow text-brand-dark text-xs px-3 py-1.5 rounded-full font-mono font-semibold">
          <i className="fa-regular fa-clock text-[10px]" /> {profile.revision}
        </span>
        <a
          href="#contact"
          className="bg-brand-yellow hover:bg-brand-gold text-brand-dark border-2 border-brand-dark font-display font-bold text-xs uppercase px-4 py-2 rounded-full shadow-brutal-sm transition-transform active:translate-x-0.5 active:translate-y-0.5"
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
}
