
import { useState, useEffect, useRef } from 'react';

import ProjectCard from './ProjectCard';
import { projectsData, projectCategories } from '../data/projectData';

const Project = () => {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const closeButtonRef = useRef(null);

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [activeProject]);

  const handleCloseModal = () => {
    setActiveProject(null);
  };

  return (
    <section className="section relative" id="project">
      <div className="container">

        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6"
          data-aos="fade-up"
        >
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5ca499] block mb-2 font-mono">
              SELECTED WORK
            </span>

            <h2 className="headline-2">
              Projects
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl leading-relaxed">
              Beberapa proyek yang pernah saya kerjakan, mulai dari
              pengembangan aplikasi web hingga solusi digital untuk
              kebutuhan operasional.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl self-start md:self-end">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${filter === cat
                  ? 'bg-[#1B4242] text-white border border-[#2a6666]'
                  : 'text-zinc-400 border border-transparent hover:text-white hover:bg-zinc-800/70'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item, index) => (
              <ProjectCard
                key={item.id}
                imgSrc={item.imgSrc}
                title={item.title}
                category={item.category}
                tags={item.tags}
                projectLink={item.projectLink}
                onOpenDetail={() => setActiveProject(item)}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-dashed border-zinc-800 rounded-2xl">
            <span className="material-symbols-rounded text-4xl text-zinc-600 mb-3">
              folder_open
            </span>

            <p className="text-sm text-zinc-400">
              Belum ada proyek dalam kategori ini.
            </p>

            <button
              type="button"
              onClick={() => setFilter('All')}
              className="text-sm text-[#5ca499] hover:text-white mt-3 transition-colors"
            >
              Tampilkan semua proyek
            </button>
          </div>
        )}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={handleCloseModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative max-w-3xl w-full bg-zinc-900 border border-zinc-700/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[90dvh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="shrink-0 px-5 py-4 sm:px-6 sm:py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900">

              <div className="flex items-center gap-3 min-w-0">
                <span className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-[#1B4242] text-zinc-100 border border-[#2a6666] shrink-0">
                  {activeProject.category}
                </span>

                <span className="text-zinc-500 text-xs sm:text-sm font-mono truncate">
                  Project Details
                </span>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleCloseModal}
                className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white grid place-items-center transition-colors shrink-0 ml-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ca499]"
                aria-label="Tutup detail proyek"
              >
                <span className="material-symbols-rounded text-lg">
                  close
                </span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain space-y-7">

              {/* Project Image */}
              <div className="w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-zinc-800">
                <img
                  src={activeProject.imgSrc}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Project Information */}
              <div>
                <h3
                  id="project-modal-title"
                  className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug"
                >
                  {activeProject.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed whitespace-pre-line">
                  {activeProject.fullDesc || 'Deskripsi proyek belum tersedia.'}
                </p>
              </div>

              {/* Project Highlights */}
              {activeProject.highlights?.length > 0 && (
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-zinc-800">

                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5ca499] mb-4 flex items-center gap-2">
                    <span className="material-symbols-rounded text-base">
                      check_circle
                    </span>

                    Fitur &amp; Implementasi
                  </h4>

                  <ul className="space-y-3">
                    {activeProject.highlights.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5ca499] mt-2 shrink-0" />

                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {activeProject.tags?.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                    <span className="material-symbols-rounded text-base text-[#5ca499]">
                      code
                    </span>

                    Technologies &amp; Tools
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs sm:text-sm font-medium hover:border-[#2a6666] hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="shrink-0 p-4 sm:px-6 sm:py-5 border-t border-zinc-800 bg-zinc-900 flex items-center justify-between gap-3">

              <button
                type="button"
                onClick={handleCloseModal}
                className="btn btn-outline text-xs sm:text-sm"
              >
                Tutup
              </button>

              {activeProject.projectLink &&
                activeProject.projectLink !== '#' ? (
                <a
                  href={activeProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-xs sm:text-sm flex items-center gap-2"
                >
                  <span>Buka Live Project</span>

                  <span className="material-symbols-rounded text-sm">
                    arrow_outward
                  </span>
                </a>
              ) : (
                <span className="text-[10px] sm:text-xs text-zinc-500 italic text-right">
                  Project tidak tersedia untuk publik
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
