
import { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { workExperiences } from '../data/workData';

const WorkDetail = ({ workId, onBack }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const touchStartX = useRef(0);

  const work = workExperiences.find((item) => item.id === workId);

  const gallery = work?.gallery || [];
  const skills = work?.skills || [];
  const careerStages = [...(work?.careerStages || [])].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [workId]);

  const handleNextPhoto = useCallback(() => {
    if (!gallery.length) return;

    setActivePhotoIndex((prev) =>
      prev === null ? null : (prev + 1) % gallery.length
    );
  }, [gallery.length]);

  const handlePrevPhoto = useCallback(() => {
    if (!gallery.length) return;

    setActivePhotoIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + gallery.length) % gallery.length
    );
  }, [gallery.length]);

  const handleCloseLightbox = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  useEffect(() => {
    if (activePhotoIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activePhotoIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;

      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    activePhotoIndex,
    handleCloseLightbox,
    handleNextPhoto,
    handlePrevPhoto,
  ]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (activePhotoIndex === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNextPhoto();
    } else if (diff < -50) {
      handlePrevPhoto();
    }
  };

  const getMasonryClass = (span) => {
    switch (span) {
      case 'landscape-wide':
        return 'col-span-2 row-span-1 aspect-[16/10] sm:aspect-[16/9]';

      case 'portrait':
        return 'col-span-1 row-span-2 aspect-[3/4] md:aspect-auto min-h-[260px] md:min-h-[340px]';

      case 'square':
      default:
        return 'col-span-1 row-span-1 aspect-square';
    }
  };

  if (!work) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-md">
          <span className="material-symbols-rounded text-5xl text-zinc-600 mb-4">
            work_off
          </span>

          <h1 className="text-2xl font-bold text-white mb-2">
            Pengalaman Tidak Ditemukan
          </h1>

          <p className="text-sm text-zinc-400 mb-6">
            Data pengalaman kerja yang kamu cari tidak tersedia.
          </p>

          <button
            type="button"
            onClick={onBack}
            className="btn btn-secondary"
          >
            <span className="material-symbols-rounded text-base">
              arrow_back
            </span>
            Kembali ke Beranda
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[#5ca499] transition-colors group py-1"
          >
            <span className="material-symbols-rounded text-base group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>

            <span>Kembali ke Pengalaman</span>
          </button>
        </div>
        <header className="mb-14" data-aos="fade-up">

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5ca499]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5ca499] font-mono">
              WORK EXPERIENCE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-title mb-5">
            {work.role}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-xs sm:text-sm text-zinc-400 mb-7">

            <span className="flex items-center gap-2 text-zinc-200 font-medium">
              <span className="material-symbols-rounded text-base text-[#5ca499]">
                business
              </span>
              {work.company}
            </span>

            <span className="hidden sm:block text-zinc-700">/</span>

            <span className="flex items-center gap-2">
              <span className="material-symbols-rounded text-base">
                calendar_month
              </span>
              {work.period}
            </span>

            <span className="hidden sm:block text-zinc-700">/</span>

            <span className="flex items-center gap-2">
              <span className="material-symbols-rounded text-base">
                location_on
              </span>
              {work.location}
            </span>
          </div>

          <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
            {work.summary}
          </p>
        </header>

        {careerStages.length > 0 && (
          <section className="border-t border-zinc-800/80 pt-10 pb-12">
            <div className="mb-12" data-aos="fade-up">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5ca499] block mb-2 font-mono">
                CAREER PROGRESSION
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-title">
                Perjalanan Karier
              </h2>

              <p className="text-sm text-zinc-400 mt-2 max-w-xl">
                Perkembangan posisi dan tanggung jawab selama bekerja
                di perusahaan.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-8 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 opacity-80" />

              <div className="space-y-12 sm:space-y-16">

                {careerStages.map((stage, idx) => (
                  <article
                    key={stage.stepNumber || idx}
                    data-aos="fade-up"
                    data-aos-offset="100"
                    className="relative pl-10 sm:pl-14 group"
                  >

                    <div className="absolute left-0 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-950 border-[3px] border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.65)]">

                      <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

                    </div>

                    <div className="grid lg:grid-cols-12 lg:gap-12 gap-6">

                      <div className="lg:col-span-4">

                        <div className="flex flex-wrap items-center gap-2 mb-3">

                          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                            {stage.badge}
                          </span>

                          <span className="text-zinc-600">/</span>

                          <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500">
                            {stage.period}
                          </span>

                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white font-title leading-snug mb-2 group-hover:text-cyan-100 transition-colors">
                          {stage.stageTitle}
                        </h3>

                        <p className="text-sm text-zinc-400 mb-4">
                          {work.company}
                        </p>

                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {stage.desc}
                        </p>

                      </div>

                      <div className="lg:col-span-8">

                        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4 flex items-center gap-2">

                          <span className="w-1.5 h-1.5 rounded-full bg-[#5ca499]" />

                          <span>Tanggung Jawab</span>

                        </h4>

                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">

                          {(stage.responsibilities || []).map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
                            >

                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/70 mt-2 shrink-0" />

                              <span>{resp}</span>

                            </li>
                          ))}

                        </ul>

                      </div>
                    </div>
                  </article>
                ))}

              </div>
            </div>
          </section>
        )}


        {skills.length > 0 && (
          <section
            data-aos="fade-up"
            className="border-t border-zinc-800/80 py-8 sm:py-10"
          >

            <div className="flex flex-col gap-4">

              <div className="flex items-center gap-2">

                <span className="material-symbols-rounded text-base text-[#5ca499]">
                  construction
                </span>

                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Skills &amp; Tools
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-300 hover:text-white hover:border-[#2a6666] transition-colors"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          </section>
        )}

        {/* =====================================
            PHOTO GALLERY
        ====================================== */}

        <section className="border-t border-zinc-800/80 pt-12 pb-16">

          {/* Gallery Heading */}
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8"
            data-aos="fade-up"
          >

            <div>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5ca499] block mb-2 font-mono">
                WORK GALLERY
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-title tracking-tight">
                Dokumentasi Pengalaman
              </h2>

            </div>

            <span className="text-xs text-zinc-500 font-mono">
              {gallery.length} Foto
            </span>

          </div>

          {/* Masonry Gallery */}
          {gallery.length > 0 ? (

            <div
              data-aos="fade-up"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 [grid-auto-flow:dense]"
            >

              {gallery.map((photo, pIdx) => {
                const masonrySpan = getMasonryClass(photo.span);

                return (
                  <button
                    type="button"
                    key={photo.src || pIdx}
                    onClick={() => setActivePhotoIndex(pIdx)}
                    aria-label={`Lihat foto ${photo.title || pIdx + 1}`}
                    className={`group cursor-pointer rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/60 hover:border-[#1B4242] transition-all duration-300 relative text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ca499] ${masonrySpan}`}
                  >

                    <img
                      src={photo.src}
                      alt={photo.title || `Dokumentasi ${pIdx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                      <div className="w-10 h-10 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">

                        <span className="material-symbols-rounded text-lg">
                          zoom_in
                        </span>

                      </div>

                    </div>

                  </button>
                );
              })}

            </div>

          ) : (

            <div className="py-16 text-center border border-dashed border-zinc-800 rounded-2xl">

              <span className="material-symbols-rounded text-3xl text-zinc-600 mb-3">
                photo_library
              </span>

              <p className="text-sm text-zinc-500">
                Belum ada dokumentasi foto.
              </p>

            </div>

          )}

        </section>

        {/* =====================================
            BACK TO EXPERIENCE
        ====================================== */}

        <div className="flex justify-center pt-8 border-t border-zinc-800/60">

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group px-5 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700"
          >

            <span className="material-symbols-rounded text-base group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>

            <span>Kembali ke Pengalaman</span>

          </button>

        </div>

      </div>

      {/* =====================================
          LIGHTBOX
      ====================================== */}

      {activePhotoIndex !== null && gallery[activePhotoIndex] && (

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeri foto"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={handleCloseLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* Top Navigation */}
          <div
            className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-xs font-mono text-zinc-400"
            onClick={(e) => e.stopPropagation()}
          >

            <span className="px-3 py-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300">
              Foto {activePhotoIndex + 1} dari {gallery.length}
            </span>

            <button
              type="button"
              onClick={handleCloseLightbox}
              aria-label="Tutup foto"
              className="w-10 h-10 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white grid place-items-center transition-colors"
            >

              <span className="material-symbols-rounded text-lg">
                close
              </span>

            </button>

          </div>

          {/* Previous Photo */}
          {gallery.length > 1 && (

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevPhoto();
              }}
              aria-label="Foto sebelumnya"
              className="absolute left-3 sm:left-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white grid place-items-center transition-all hover:scale-105"
            >

              <span className="material-symbols-rounded text-xl">
                chevron_left
              </span>

            </button>

          )}

          {/* Next Photo */}
          {gallery.length > 1 && (

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNextPhoto();
              }}
              aria-label="Foto berikutnya"
              className="absolute right-3 sm:right-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white grid place-items-center transition-all hover:scale-105"
            >

              <span className="material-symbols-rounded text-xl">
                chevron_right
              </span>

            </button>

          )}

          {/* Main Image */}
          <div
            className="relative max-w-5xl max-h-[82vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={gallery[activePhotoIndex].src}
              alt={gallery[activePhotoIndex].title || 'Foto Galeri'}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />

          </div>

          {/* Bottom Information */}
          <div
            className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
            onClick={(e) => e.stopPropagation()}
          >

            <p className="text-xs sm:text-sm font-medium text-zinc-300 truncate max-w-md">
              {gallery[activePhotoIndex].title || 'Dokumentasi'}
            </p>

            <a
              href={gallery[activePhotoIndex].src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-[#5ca499] transition-colors inline-flex items-center gap-1.5"
            >

              <span>Buka Ukuran Penuh</span>

              <span className="material-symbols-rounded text-xs">
                open_in_new
              </span>

            </a>

          </div>

        </div>

      )}

    </div>
  );
};

WorkDetail.propTypes = {
  workId: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default WorkDetail;
