import { number } from 'prop-types';

const aboutItems = [
  {
    label: 'Project done',
    number: 10,
  },
  {
    label: 'Years of experience',
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] text-justify">
            Hey there! I'm Dimas, a Web Developer who loves crafting cool, interactive, and responsive websites. I’ve worked with various web technologies and always aim to create innovative digital solutions that truly meet users' needs.
            Whether it’s frontend or backend, I’m all about learning new stuff and keeping up with the latest tech trends. For me, every line of code is a step closer to an awesome user experience! 🚀
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-[#1B4242] font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img src="/img/logo.png" alt="logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
