import { skillCategories } from '../../data/skills';
import QuoteHeading from '../ui/QuoteHeading';
import SkillTile from './SkillTile';

const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

export default function Skills() {
  return (
    <section id="skills" className="py-14 border-t-2 border-brand-dark relative">
      <div className="watermark-num -top-10 right-4">02</div>

      <div className="flex items-center justify-between mb-10 relative z-10">
        <div>
          <span className="bg-brand-dark text-white px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider">
            CORE ARSENAL
          </span>
          <QuoteHeading className="text-3xl sm:text-5xl mt-2">SOFTWARE SKILLS</QuoteHeading>
        </div>
        <div className="w-10 h-10 rounded-full bg-brand-yellow border-2 border-brand-dark flex items-center justify-center font-bold text-sm shadow-brutal-sm">
          {totalSkills}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-brand-card border-2 border-brand-dark rounded-2xl p-6 shadow-brutal space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b-2 border-brand-dark">
              <h4 className="font-chunky text-lg text-brand-dark flex items-center gap-2">
                <i className={`fa-solid ${category.icon} text-brand-yellow`} /> {category.title}
              </h4>
              <span className="text-xs font-mono bg-stone-200 px-2 py-0.5 rounded border border-brand-dark">
                {category.tag}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, i) => (
                <SkillTile
                  key={skill.name}
                  {...skill}
                  // An odd last tile spans the row so cards stay balanced.
                  wide={i === category.skills.length - 1 && category.skills.length % 2 === 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
