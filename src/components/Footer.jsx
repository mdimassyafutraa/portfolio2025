
import { ButtonPrimary } from './Button';

const currentYear = new Date().getFullYear();

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#project' },
  { label: 'Skills', href: '#skill' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/628137995558',
  },
  {
    label: 'Email',
    href: 'mailto:mdimassyafutra10@gmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/m-dimas-syafutra',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mdimassyafutraa',
  },
];

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-zinc-900 bg-zinc-950 relative">
      <div className="container" data-aos="fade-up">
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3 block">
              Let's Connect
            </span>

            <h2 className="headline-2 mb-4">
              Get In Touch
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base mb-6 max-w-[50ch] leading-relaxed">
              Terbuka untuk peluang karier, kolaborasi, dan kesempatan untuk mengembangkan solusi digital bersama.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <ButtonPrimary
                href="#contact"
                label="Let's Talk"
                icon="arrow_forward"
              />
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:pl-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                Navigation
              </p>

              <ul className="space-y-2">
                {sitemap.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors py-1 inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                Connect
              </p>

              <ul className="space-y-2">
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 hover:text-white transition-colors py-1 inline-flex items-center gap-1.5"
                    >
                      {label}

                      <span className="material-symbols-rounded text-xs opacity-0 -translate-x-1 group-hover:opacity-100 transition-all">
                        arrow_outward
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-5">
          <a
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="Kembali ke halaman utama"
          >
            <img
              src="/img/logo.png"
              alt="Logo"
              width={28}
              height={28}
              loading="lazy"
              className="object-contain"
            />

            <div>
              <span className="text-sm font-semibold text-white block group-hover:text-zinc-300 transition-colors">
                M. Dimas Syafutra
              </span>

              <span className="text-[10px] text-zinc-500 tracking-wider uppercase">
                Web Developer &amp; Operations
              </span>
            </div>
          </a>

          <p className="text-zinc-500 text-xs sm:text-sm text-center sm:text-right">
            © {currentYear} M. Dimas Syafutra.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
