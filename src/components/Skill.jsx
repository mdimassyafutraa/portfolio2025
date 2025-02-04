import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/img/figma.svg',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: '/img/css3.svg',
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: '/img/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction',
  },
  {
    imgSrc: '/img/bootstrap.svg',
    label: 'Bootstrap',
    desc: 'Framework',
  },
  {
    imgSrc: '/img/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
  {
    imgSrc: '/img/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: '/img/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: '/img/php.svg',
    label: 'PHP',
    desc: 'Server-side',
  },
  {
    imgSrc: '/img/laravel.svg',
    label: 'Laravel',
    desc: 'Framework',
  },
  {
    imgSrc: '/img/codeigniter.svg',
    label: 'CodeIgniter',
    desc: 'Framework',
  },
  {
    imgSrc: '/img/mysql.svg',
    label: 'MySQL',
    desc: 'Database',
  },
  {
    imgSrc: '/img/wordpress.svg',
    label: 'Wordpress',
    desc: 'CMS',
  },
];

const Skill = () => {
  return (
    <section className="section" id="skill">
      <div className="container">
        <h2 className="headline-2">Tools</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[55ch]">Check out the essential tools and technologies I use to develop top-notch, high-performance websites and applications.</p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
