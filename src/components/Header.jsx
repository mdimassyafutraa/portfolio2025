import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Header = ({ onNavigate }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBrandClick = () => {
    if (onNavigate) {
      onNavigate('home', '#home');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 flex items-center z-50 transition-colors duration-200 ${scrolled
        ? 'bg-zinc-950/95 border-b border-zinc-800/80 shadow-md shadow-black/30'
        : 'bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent'
        }`}
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
        <a href="#home" onClick={handleBrandClick} className="flex items-center gap-3 group">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base text-zinc-100 tracking-tight group-hover:text-[#5ca499] transition-colors">
              M. Dimas Syafutra
            </span>
          </div>
        </a>

        <div className="relative">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Navbar
            navOpen={navOpen}
            closeNav={() => setNavOpen(false)}
            onNavigate={onNavigate}
          />
        </div>


        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/628137995558"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary flex items-center gap-2 group"
          >
            <span>Let's Connect</span>
            <span className="material-symbols-rounded text-base text-zinc-200 group-hover:translate-x-0.5 transition-transform">
              arrow_outward
            </span>
          </a>
        </div>

      </div>
    </header>
  );
};

Header.propTypes = {
  onNavigate: PropTypes.func,
};

export default Header;