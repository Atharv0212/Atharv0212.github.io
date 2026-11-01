import { education, experience } from '../../data/experience';
import QuoteHeading from '../ui/QuoteHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-14 border-t-2 border-brand-dark relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Education */}
        <div className="lg:col-span-5 space-y-6">
          <QuoteHeading>EDUCATION</QuoteHeading>
          <div className="bg-brand-card border-2 border-brand-dark rounded-2xl p-6 shadow-brutal space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-brand-yellow text-brand-dark font-display font-black text-xl px-3 py-2 rounded-xl border-2 border-brand-dark leading-tight text-center shrink-0">
                {education.start}
                <br />
                <span className="text-xs font-mono">{education.end}</span>
              </div>
              <div>
                <h4 className="font-chunky text-lg text-brand-dark leading-tight">{education.degree}</h4>
                <p className="text-xs font-mono text-brand-muted mt-1 font-semibold">{education.institution}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs px-2.5 py-0.5 rounded font-mono font-bold">
                    {education.cgpa}
                  </span>
                  <span className="text-xs text-brand-muted font-mono">{education.honor}</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-brand-dark/20 text-xs text-brand-charcoal space-y-1 font-medium">
              {education.notes.map((note) => (
                <p key={note}>• {note}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Working experience */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <QuoteHeading>WORKING EXPERIENCE</QuoteHeading>
            <span className="text-xs font-mono text-brand-muted">Career &amp; Open Source</span>
          </div>
          <div className="space-y-4">
            {experience.map((item) => (
              <div
                key={item.title}
                className="bg-brand-card border-2 border-brand-dark rounded-2xl p-5 shadow-brutal-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`${
                        item.highlight ? 'bg-brand-yellow' : 'bg-stone-200'
                      } text-brand-dark text-[11px] font-mono font-bold px-2 py-0.5 rounded border border-brand-dark`}
                    >
                      {item.tag}
                    </span>
                    <span className="font-mono text-xs text-brand-muted">{item.period}</span>
                  </div>
                  <h4 className="font-chunky text-base text-brand-dark mt-1">{item.title}</h4>
                  <p className="text-xs text-brand-charcoal font-medium mt-1">{item.description}</p>
                </div>
                <i className="fa-solid fa-chevron-right text-brand-muted text-sm hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
