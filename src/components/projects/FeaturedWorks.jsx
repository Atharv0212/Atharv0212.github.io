import { projects, wideProject } from '../../data/projects';
import QuoteHeading from '../ui/QuoteHeading';
import TechBadge from '../ui/TechBadge';
import ProjectCard from './ProjectCard';

export default function FeaturedWorks() {
  return (
    <section id="projects" className="py-14 border-t-2 border-brand-dark relative">
      <div className="watermark-num -top-12 left-10">03</div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 relative z-10 gap-4">
        <div>
          <span className="bg-brand-yellow text-brand-dark px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider border border-brand-dark">
            SYSTEMS ARCHITECTURE &amp; RESEARCH
          </span>
          <QuoteHeading className="text-3xl sm:text-5xl mt-2">FEATURED WORKS</QuoteHeading>
        </div>
        <p className="text-xs font-mono text-brand-muted max-w-sm">
          Selected high-throughput inference engines and standalone bare-metal kernels engineered at IIIT Delhi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}

        <article className="lg:col-span-2 bg-brand-card border-2 border-brand-dark rounded-3xl p-7 shadow-brutal flex flex-col md:flex-row items-center justify-between gap-6 hover:-translate-y-0.5 transition-transform">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-block bg-brand-yellow text-brand-dark px-3 py-0.5 rounded-full text-xs font-mono font-extrabold uppercase border border-brand-dark">
                {wideProject.badge}
              </span>
              <span className="text-xs font-mono text-brand-muted">{wideProject.meta}</span>
            </div>
            <h4 className="text-2xl font-chunky text-brand-dark leading-tight">{wideProject.title}</h4>
            <p className="text-sm text-brand-charcoal leading-relaxed font-medium">{wideProject.description}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {wideProject.tech.map((t) => (
                <TechBadge key={t}>{t}</TechBadge>
              ))}
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a
              href={wideProject.github}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-dark hover:bg-stone-800 text-white font-mono text-xs font-bold border-2 border-brand-dark shadow-brutal-sm"
            >
              <i className="fa-brands fa-github text-sm" /> View Source on GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
