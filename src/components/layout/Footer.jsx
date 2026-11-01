import { profile } from '../../data/profile';
import QrGraphic from './QrGraphic';

const contactRows = [
  { icon: 'fa-regular fa-envelope', label: profile.email, href: `mailto:${profile.email}` },
  { icon: 'fa-solid fa-phone', label: profile.phone },
  {
    icon: 'fa-brands fa-github',
    label: profile.links.github.replace('https://', ''),
    href: profile.links.github,
    external: true,
  },
  {
    icon: 'fa-brands fa-linkedin',
    label: profile.links.linkedin.replace('https://www.', ''),
    href: profile.links.linkedin,
    external: true,
  },
  { icon: 'fa-solid fa-location-dot', label: profile.location },
];

export default function Footer() {
  return (
    <footer id="contact" className="pt-10 pb-12 border-t-2 border-brand-dark mt-8">
      <div className="bg-brand-yellow border-4 border-brand-dark rounded-3xl p-8 sm:p-10 shadow-brutal-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* QR tile */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
          <div className="bg-white p-4 rounded-2xl border-3 border-brand-dark shadow-brutal inline-block">
            <QrGraphic />
            <p className="text-[10px] font-mono uppercase font-bold text-brand-dark tracking-wider mt-2">Scan vCard</p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-dark mt-3">
            Open for High-Performance Systems &amp; CV Roles
          </span>
        </div>

        {/* Contact rows */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-block bg-brand-dark text-white px-4 py-1.5 rounded-lg text-sm font-mono font-black uppercase tracking-wider">
            Let's Work Together :
          </div>
          <div className="space-y-3 bg-white/70 backdrop-blur-xs p-6 rounded-2xl border-2 border-brand-dark font-mono text-sm">
            {contactRows.map((row) => (
              <div key={row.icon} className="flex items-center gap-3 text-brand-dark">
                <span className="w-8 h-8 rounded-lg bg-brand-dark text-brand-yellow flex items-center justify-center shrink-0">
                  <i className={row.icon} />
                </span>
                <span className="font-bold">:</span>
                {row.href ? (
                  <a
                    href={row.href}
                    className="hover:underline font-semibold break-all"
                    {...(row.external && { target: '_blank', rel: 'noreferrer' })}
                  >
                    {row.label}
                  </a>
                ) : (
                  <span className="font-semibold">{row.label}</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs font-mono text-brand-dark font-medium">
            Available for Summer 2025/2026 Core Engineering Fellowships &amp; Machine Learning Systems Research.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-brand-muted gap-4">
        <div>
          © 2026 {profile.name}. Designed with the visual brutalism aesthetics of{' '}
          <span className="text-brand-dark font-bold">Porto Folio Reference</span>.
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-brand-dark" href="#">
            Back to Top ↑
          </a>
          <span>•</span>
          <span>NEW DELHI, IN</span>
        </div>
      </div>
    </footer>
  );
}
