
import PropTypes from 'prop-types';

const ProjectCard = ({
  imgSrc,
  title,
  category,
  tags,
  projectLink,
  onOpenDetail,
  index = 0,
}) => {
  return (
    <button
      type="button"
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      onClick={onOpenDetail}
      aria-label={`Lihat detail proyek ${title}`}
      className="group w-full text-left cursor-pointer rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-[#2a6666] hover:bg-zinc-900/90 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ca499] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <div>
        <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-950 mb-5 relative border border-zinc-800/80">
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-zinc-200 bg-zinc-950/80 border border-zinc-700/80 backdrop-blur-md">
            {category}
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 backdrop-blur-[1px]">
            <span className="px-4 py-2 rounded-xl bg-zinc-900/90 text-white text-xs font-medium border border-zinc-700/70 flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="material-symbols-rounded text-base">
                visibility
              </span>
              Lihat Detail
            </span>
          </div>
        </div>

        <div className="px-1">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#8bc5ba] transition-colors">
              {title}
            </h3>

            <span className="material-symbols-rounded text-zinc-600 group-hover:text-[#5ca499] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0">
              arrow_outward
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {tags.slice(0, 3).map((label, key) => (
              <span
                key={key}
                className="text-[10px] sm:text-[11px] font-mono text-zinc-300 bg-zinc-800/80 border border-zinc-700/50 px-2.5 py-1 rounded-md"
              >
                {label}
              </span>
            ))}

            {tags.length > 3 && (
              <span className="text-[10px] text-zinc-500 font-mono px-1">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="pt-4 mt-5 border-t border-zinc-800/80 flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors flex items-center gap-2">
          Explore Project
          <span className="material-symbols-rounded text-sm group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </span>

        {projectLink && projectLink !== '#' ? (
          <span className="text-[10px] text-[#8bc5ba] font-mono bg-[#1B4242]/20 border border-[#2a6666]/40 px-2.5 py-1 rounded-md">
            Live Web
          </span>
        ) : (
          <span className="text-[10px] text-zinc-500 font-mono bg-zinc-800/70 px-2.5 py-1 rounded-md">
            Private Project
          </span>
        )}
      </div>
    </button>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  onOpenDetail: PropTypes.func.isRequired,
  index: PropTypes.number,
};

ProjectCard.defaultProps = {
  projectLink: '#',
  index: 0,
};

export default ProjectCard;
