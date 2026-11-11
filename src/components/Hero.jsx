import { ButtonPrimary, ButtonOutLine } from './Button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen lg:max-h-screen flex items-center overflow-hidden pt-24 pb-12 lg:pt-20 lg:pb-0"
    >
      <div className="container lg:grid lg:grid-cols-12 lg:gap-8 items-center w-full h-full relative">
        <div className="lg:col-span-7 z-10 py-4 sm:py-6 lg:py-0 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-4 sm:mb-5 shadow-sm max-w-max">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B4242] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2a6666]"></span>
            </span>
            <span>Open to Work</span>
          </div>
          <h1 className="headLine-1 mb-4 sm:mb-5 text-white tracking-tight drop-shadow-sm">
            Technology, Data &amp; Operational Solutions
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-[58ch] leading-relaxed font-light">
            Web Developer &amp; Administrative Operations Professional. Berpengalaman dalam pengembangan aplikasi web, pengelolaan data, administrasi perbankan, dan dukungan operasional.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <ButtonPrimary
              label="Hubungi Saya"
              icon="call"
              href="#contact"
            />
            <ButtonOutLine
              href="#about"
              label="Scroll"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:col-span-5 relative flex items-end justify-center lg:justify-end select-none pointer-events-none h-full max-h-[60vh] lg:max-h-[calc(100vh-5rem)]">
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[500px] xl:max-w-[540px] h-full flex items-end justify-center lg:justify-end">
            <img
              src="/img/hero.png"
              alt="M. Dimas Syafutra"
              className="w-full h-auto max-h-[480px] sm:max-h-[560px] lg:max-h-[75vh] xl:max-h-[82vh] object-contain object-bottom filter brightness-[0.52] contrast-[1.15] saturate-[0.75] opacity-85 transition-all duration-700"
            />

            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 lg:h-40 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;