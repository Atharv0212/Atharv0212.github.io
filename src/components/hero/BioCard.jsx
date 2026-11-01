import { profile } from '../../data/profile';

const ctaSecondary =
  'bg-brand-card hover:bg-stone-200 text-brand-dark px-4 py-2.5 rounded-xl border-2 border-brand-dark font-mono text-xs font-bold shadow-brutal-sm flex items-center gap-2 transition-all';

export default function BioCard() {
  return (
    <div className="bg-brand-card border-2 border-brand-dark p-6 rounded-2xl shadow-brutal relative">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-brand-dark text-brand-yellow rounded-xl flex items-center justify-center font-mono font-bold text-xl shrink-0 border border-brand-dark">
          &gt;_
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-chunky text-brand-dark flex items-center gap-1.5">
            <span className="quote-mark text-xl">“</span>HELLO .
          </h3>
          <p className="text-sm text-brand-charcoal leading-relaxed font-sans font-medium">
            I'm <strong className="font-bold text-brand-dark">{profile.name}</strong>, a B.Tech CSAI scholar at{' '}
            <span className="underline decoration-brand-yellow decoration-2 underline-offset-2 font-semibold">
              IIIT Delhi
            </span>{' '}
            Computer Science student specializing in Artificial Intelligence with a strong passion for Machine Learning. I bring foundation in Data Structure, Computer Systems and Web Development. Always eager to tackle complex technical challenges and learn new
technologies to make impactful projects.
          </p>
        </div>
      </div>

      {/* Terminal mockup */}
      <div className="mt-5 bg-brand-dark rounded-xl p-4 font-mono text-xs text-stone-200 border-2 border-brand-dark">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-[11px] text-stone-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-2 text-stone-300 font-semibold">atharv:~/cv-core</span>
          </div>
          <span className="text-brand-yellow font-bold">git bash</span>
        </div>
        <p className="text-stone-300">
          <span className="text-emerald-400 font-bold">$</span> git checkout -b innovation
        </p>
        <p className="text-emerald-400 mt-1">
          <i className="fa-solid fa-check text-[10px]" /> Merge made by the 'caffeine' strategy.
        </p>
        <div className="flex items-center gap-4 mt-2 text-stone-400 text-[11px]">

          <span>
            <strong className="text-white font-bold">3</strong> files changed , 
          </span>
          <span>
            <strong className="text-cyan-400 font-bold">582</strong> 582 insertions(+), 
          </span>
          <span> 
            <strong className="text-brand-yellow font-bold">45</strong> deletions(-) 
          </span>
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="bg-brand-yellow hover:bg-brand-gold text-brand-dark px-6 py-2.5 rounded-xl border-2 border-brand-dark font-display font-black text-xs uppercase tracking-wider shadow-brutal-sm flex items-center gap-2 transition-all"
        >
          <i className="fa-solid fa-arrow-down" /> Explore System Projects
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer" className={ctaSecondary}>
          <i className="fa-brands fa-github text-sm" /> GitHub
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={ctaSecondary}>
          <i className="fa-brands fa-linkedin-in text-sm" /> LinkedIn
        </a>
      </div>
    </div>
  );
}
