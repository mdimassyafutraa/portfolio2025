
import PropTypes from 'prop-types';
import { workExperiences } from '../data/workData';

const Work = ({ onSelectWork }) => {
  return (
    <section id="work" className="section relative">
      <div className="container">
        <div className="flex flex-col mb-10" data-aos="fade-up">
          <h2 className="headline-2">Experience</h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl">
            Pengalaman profesional dan pekerjaan yang pernah saya jalani
            di bidang teknologi informasi, administrasi, dan perbankan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {workExperiences.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectWork(item)}
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              className="group w-full text-left cursor-pointer rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:bg-zinc-900/90 hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ca499]"
            >
              <div>
                {/* Cover */}
                <div className="w-full aspect-[16/10] bg-zinc-950 relative overflow-hidden border-b border-zinc-800">
                  <img
                    src={item.cover}
                    alt={`${item.role} - ${item.company}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-medium text-zinc-200 bg-zinc-950/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-700/70">
                    <span className="material-symbols-rounded text-xs">
                      calendar_month
                    </span>
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs font-medium text-zinc-400">
                    <span className="material-symbols-rounded text-sm text-[#5ca499]">
                      {item.icon}
                    </span>
                    <span>{item.company}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#8bc5ba] transition-colors">
                    {item.role}
                  </h3>

                  <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 mt-auto">
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    Lihat Pengalaman
                    <span className="text-xs text-zinc-500 font-normal">
                      ({item.gallery.length} foto)
                    </span>
                  </span>

                  <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-800/70 group-hover:bg-[#1B4242] transition-colors">
                    <span className="material-symbols-rounded text-base group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

Work.propTypes = {
  onSelectWork: PropTypes.func.isRequired,
};

export default Work;
