
import { useState } from 'react';
import SkillCard from './SkillCard';
import { skillsData, skillFilterTabs } from '../data/skillData';

const INITIAL_LIMIT = 6;

const Skill = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredSkills =
    activeFilter === 'all'
      ? skillsData
      : skillsData.filter((item) => item.category === activeFilter);

  const displayedSkills = isExpanded
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_LIMIT);

  const remainingCount = Math.max(filteredSkills.length - INITIAL_LIMIT, 0);

  const handleFilterChange = (id) => {
    setActiveFilter(id);
    setIsExpanded(false);
  };

  return (
    <section className="section relative" id="skill">
      <div className="container">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6"
          data-aos="fade-up"
        >
          <div>
            <h2 className="headline-2">Tools &amp; Skills</h2>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl self-start md:self-end"
            role="group"
            aria-label="Filter kategori keahlian"
          >
            {skillFilterTabs.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleFilterChange(id)}
                aria-pressed={activeFilter === id}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${activeFilter === id
                  ? 'bg-zinc-800 text-white border border-zinc-700/80 shadow-sm'
                  : 'text-zinc-400 border border-transparent hover:text-white hover:bg-zinc-800/50'
                  }`}
              >
                <span className="material-symbols-rounded text-sm">
                  {icon}
                </span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {filteredSkills.length > 0 ? (
          <div
            id="skill-list"
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
          >
            {displayedSkills.map((skill) => (
              <SkillCard
                key={`${skill.category}-${skill.label}`}
                imgSrc={skill.imgSrc}
                iconName={skill.iconName}
                label={skill.label}
                desc={skill.desc}
                category={skill.categoryName}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center border border-dashed border-zinc-800 rounded-2xl">
            <p className="text-sm text-zinc-500">
              Belum ada keahlian dalam kategori ini.
            </p>
          </div>
        )}

        {remainingCount > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-controls="skill-list"
              className="btn btn-outline text-xs sm:text-sm flex items-center gap-2 group hover:border-zinc-700 hover:bg-zinc-800 px-6 py-2.5 rounded-2xl transition-all duration-200"
            >
              <span>
                {isExpanded
                  ? 'Tampilkan Lebih Sedikit'
                  : `Lihat Selengkapnya (${remainingCount} Keahlian Lainnya)`}
              </span>

              <span
                className={`material-symbols-rounded text-sm text-zinc-400 transition-transform duration-200 ${isExpanded
                  ? 'rotate-180'
                  : 'group-hover:translate-y-0.5'
                  }`}
              >
                expand_more
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;
