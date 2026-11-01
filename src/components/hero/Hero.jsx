import { profile } from '../../data/profile';
import BioCard from './BioCard';
import DeveloperAvatar from './DeveloperAvatar';
import QuickLinks from './QuickLinks';

const doodleIcons = ['fa-gear', 'fa-microchip', 'fa-bolt'];

export default function Hero() {
  return (
    <section id="about" className="relative pt-6 pb-16 min-h-[640px]">
      <div className="watermark-num -top-12 -left-6">01</div>

      <div className="grid grid-cols-12 gap-10 items-center relative z-10">
        {/* Left: headline + bio */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block bg-brand-yellow text-brand-dark px-4 py-1 rounded-full text-xs font-display font-extrabold uppercase tracking-wide border-2 border-brand-dark shadow-brutal-sm">
              {profile.role}
            </span>
            <div className="flex items-center gap-3 text-brand-dark opacity-80 text-sm">
              {doodleIcons.map((icon) => (
                <span
                  key={icon}
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-card border border-brand-dark"
                >
                  <i className={`fa-solid ${icon}`} />
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <h2 className="text-6xl sm:text-7xl xl:text-8xl font-chunky text-brand-dark leading-[0.92] tracking-tighter">
              <span className="quote-mark text-6xl sm:text-7xl xl:text-8xl mr-1">“</span>PORTO
              <br />
              FOLO
              <span className="inline-block w-4 h-4 sm:w-5 sm:h-5 bg-brand-yellow rounded-full ml-1 border-2 border-brand-dark" />
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="bg-brand-dark text-brand-yellow px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider">
                Creative Visual Architecture
              </span>
              <span className="text-brand-muted text-xs font-mono font-medium">// IIITD Honors Lab</span>
            </div>
          </div>

          <BioCard />
        </div>

        {/* Right: arch backdrop + avatar */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-end justify-center">
            <div className="absolute inset-x-6 top-8 bottom-0 bg-brand-yellow border-4 border-brand-dark rounded-t-[190px] rounded-b-[40px] shadow-brutal-lg overflow-hidden">
              <div className="absolute inset-3 border-2 border-brand-dark/20 rounded-t-[180px] rounded-b-[30px] pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 p-4 bg-brand-dark/10 rounded-2xl backdrop-blur-xs border border-brand-dark/20 text-center">
                <p className="text-[11px] font-mono uppercase font-bold text-brand-dark tracking-widest">
                  Selected Best Systems &amp; AI Until 2026
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full flex justify-center pb-2">
              <DeveloperAvatar />
            </div>

            <div className="absolute -top-3 -right-3 z-20 bg-brand-card border-2 border-brand-dark px-3 py-1.5 rounded-full shadow-brutal-sm flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-yellow border border-brand-dark" />
              <span className="font-mono font-bold text-[11px] text-brand-dark">ATHARV.CSAI</span>
            </div>

            <div className="absolute -bottom-4 -left-4 z-20 bg-brand-dark text-white border-2 border-brand-yellow px-4 py-2 rounded-2xl shadow-brutal flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-display font-black text-sm">
                &gt;
              </div>
              <div>
                <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest leading-none">Status</p>
                <p className="text-xs font-display font-bold text-white leading-tight">{profile.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickLinks />
    </section>
  );
}
