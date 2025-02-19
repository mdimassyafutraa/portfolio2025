import ProjectCard from './ProjectCard';

const project = [
  {
    imgSrc: '/img/project-4.png',
    title: 'Kanagara Travel',
    tags: ['Company Profile', 'Travel Agency', 'Tourism', 'Booking'],
    projectLink: 'https://kanagaratravel.id/',
  },
  {
    imgSrc: '/img/project-3.png',
    title: 'LifeSyncer',
    tags: ['Google Integration', 'Calendar Sync', 'Self-Management', 'Motivation', 'Behavioral Strategies'],
    projectLink: 'https://lifesyncer.com/',
  },
  {
    imgSrc: '/img/project-1.png',
    title: 'Open House | UPT Balai Yasa Lahat',
    tags: ['Data Management', 'QR Code', 'MVC', 'Event Management'],
    projectLink: '#',
  },
  {
    imgSrc: '/img/project-2.png',
    title: 'Guestbook App | UPT Balai Yasa Lahat',
    tags: ['Data Management', 'QR Code', 'MVC', 'Event Management'],
    projectLink: '#',
  },
];

const Project = () => {
  return (
    <section className="section" id="project">
      <div className="container">
        <h2 className="headline-2 mb-8">My Completed Projects</h2>
        <div className="relative max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800 p-2 rounded-lg">
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {project.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
