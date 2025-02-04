import { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-50 bg-gradient-to-b from-dark to-dark/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="Logo">
            <img src="/img/logo.png" alt="Logo" width={30} height={30} />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
