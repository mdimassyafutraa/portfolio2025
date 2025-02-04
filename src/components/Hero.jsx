import { ButtonPrimary, ButtonOutLine } from './Button';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-32">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-[#00FF9C]">
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-[#00FF9C] animate-ping"></span>
              </span>
              Open to work
            </div>
          </div>
          <h2 className="headLine-1 max-w-[20ch] sm:max-w-[25ch] lg:max-w-[35ch] mt-5 mb-8 lg:mb-10">Designing Next-Gen Websites with Innovation and Performance</h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Contact me" icon="phone" href="https://wa.me/628989356598" target="_blank" />
            <ButtonOutLine href="#about" label="Scroll down" icon="arrow_downward" />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] aspect-square mx-auto rounded-full overflow-hidden relative">
            <img src="/img/foto.jpeg" alt="M. Dimas Syafutra" className="absolute inset-0 w-full h-full object-cover rounded-full" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
