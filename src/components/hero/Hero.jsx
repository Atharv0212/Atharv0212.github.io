import { profile } from '../../data/profile';
import BioCard from './BioCard';
import { ClaudeMascotDoodle, CodeDoodle, MonitorDoodle } from './HeroDoodles';
import brainIcon from '../../assets/brain.png';

export default function Hero() {
  return (
    <section id="about" className="relative pt-0 pb-16">
      <div className="grid grid-cols-12 gap-10 items-center relative z-10">
        {/* Left: headline + bio */}
        <div className="col-span-12 lg:col-span-7 lg:self-start space-y-3">
          {/* Title lockup: everything inside is sized in em, so the font-size below scales it as a whole */}
          <div className="relative">
            <div className="relative pb-[0.1em] pt-[0.3em] text-6xl sm:text-7xl xl:text-8xl">
              <div className="absolute left-0 top-[0.25em] leading-none">
                <span className="quote-mark text-[0.6em] font-portfolio !text-brand-yellow [-webkit-text-stroke-color:var(--color-brand-yellow)]">
                  ”
                </span>
              </div>

              <div className="relative pl-[0.6em]">
                <div className="inline-block bg-brand-yellow rounded-full pl-[0.2em] pr-[0.24em] py-[0.12em]">
                  <h2 className="font-portfolio">PORT</h2>
                </div>
              </div>

              <h2 className="font-portfolio -mt-[0.08em] relative">
                FOLIO
                <span className="inline-block w-[0.24em] h-[0.24em] bg-brand-yellow rounded-full ml-[0.04em] align-baseline" />
              </h2>

              <MonitorDoodle className="absolute left-[0.55em] top-[-0.28em] w-[0.48em]" />
              <CodeDoodle className="absolute left-[3.37em] top-[-0.2em] w-[0.5em]" />
              <ClaudeMascotDoodle className="absolute left-[3.5em] top-[1.25em] w-[0.4em] z-20" />
              <img src={brainIcon} alt="" aria-hidden="true" className="absolute left-[4.3em] top-[1.75em] w-[0.56em]" />
            </div>
          </div>

          <BioCard />
        </div>

        {/* Right: ring + arch backdrop (blank until profile.heroPhoto is set) */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="absolute top-0 -left-6 w-[260px] h-[260px] rounded-full border-[1.5px] border-brand-dark" />
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-end justify-center">
            <div className="absolute inset-x-6 top-8 bottom-0 bg-brand-yellow border-4 border-brand-dark rounded-t-[190px] rounded-b-[40px] shadow-brutal-lg overflow-hidden">
              <div className="absolute inset-3 border-2 border-brand-dark/20 rounded-t-[180px] rounded-b-[30px] pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 p-4 bg-brand-dark/10 rounded-2xl backdrop-blur-xs border border-brand-dark/20 text-center">
                {/* <p className="text-[11px] font-mono uppercase font-bold text-brand-dark tracking-widest">
                  Selected Best Systems &amp; AI Until 2026
                </p> */}
              </div>
            </div>

            {profile.heroPhoto && (
              <div className="relative z-10 w-full flex justify-center pb-2">
                <img src={profile.heroPhoto} alt={profile.name} className="w-full h-auto max-h-[460px] object-contain" />
              </div>
            )}

            <div className="absolute -top-3 -right-3 z-20 bg-brand-card border-2 border-brand-dark px-3 py-1.5 rounded-full shadow-brutal-sm flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-yellow border border-brand-dark" />
              <span className="font-mono font-bold text-[11px] text-brand-dark">ATHARV.KHARE</span>
            </div>

            <div className="absolute -bottom-4 -left-4 z-20 bg-brand-dark text-white border-2 border-brand-yellow px-4 py-2 rounded-2xl shadow-brutal flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-display font-black text-sm">
                &gt;
              </div>
              <div>
                <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest leading-none">Status</p>
                <p className="text-xs font-display font-bold text-white leading-tight">Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
