export default function SideDecorations() {
  const base =
    'fixed top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 z-40 pointer-events-none opacity-40';

  return (
    <>
      <aside aria-hidden="true" className={`${base} left-4`}>
        <span className="vertical-stamp rotate-180 text-[10px] font-bold uppercase text-brand-dark font-mono">
          IIIT DELHI • CSAI '26
        </span>
        <div className="w-[1.5px] h-20 bg-brand-dark" />
        <span className="text-xs font-black font-display">01</span>
      </aside>
      <aside aria-hidden="true" className={`${base} right-4`}>
        <span className="vertical-stamp text-[10px] font-bold uppercase text-brand-dark font-mono">
          ATHARV // 2026
        </span>
        <div className="w-[1.5px] h-20 bg-brand-dark" />
        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow border border-brand-dark" />
      </aside>
    </>
  );
}
