import { ButtonPrimary } from './Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Project',
    href: '#project',
  },
  {
    label: 'Contact me',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/mdimassyafutraa?tab=repositories',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/m-dimas-syafutra',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_mdimas.s/',
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headLine-1 mb-8 lg:max-w-[30ch]">Ready to collaborate? Let’s get started today!</h2>
            <ButtonPrimary href="https://wa.me/628989356598" target="_blank" label="Start Project" icon="chevron_right" />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Link</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2">Social</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200" target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img src="/img/logo.png" alt="logo" width={40} height={40} />
          </a>

          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">M Dimas Syafutra</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
