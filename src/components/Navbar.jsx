import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const navItems = [
  { label: 'Home', link: '#home', id: 'home' },
  { label: 'About', link: '#about', id: 'about' },
  { label: 'Work', link: '#work', id: 'work' },
  { label: 'Projects', link: '#project', id: 'project' },
  { label: 'Skills', link: '#skill', id: 'skill' },
  { label: 'Contact', link: '#contact', id: 'contact' },
];

const Navbar = ({ navOpen, closeNav, onNavigate }) => {
  const activeBox = useRef(null);
  const linkRefs = useRef({});
  const [activeSection, setActiveSection] = useState('home');

  const updateActiveBox = (element) => {
    if (!element || !activeBox.current) return;
    activeBox.current.style.top = `${element.offsetTop}px`;
    activeBox.current.style.left = `${element.offsetLeft}px`;
    activeBox.current.style.width = `${element.offsetWidth}px`;
    activeBox.current.style.height = `${element.offsetHeight}px`;
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 200;
          let current = 'home';

          for (const item of navItems) {
            const el = document.getElementById(item.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                current = item.id;
                break;
              }
            }
          }

          if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
            current = 'contact';
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentEl = linkRefs.current[activeSection];
    if (currentEl) {
      updateActiveBox(currentEl);
    }
  }, [activeSection, navOpen]);

  useEffect(() => {
    const handleResize = () => {
      const currentEl = linkRefs.current[activeSection];
      if (currentEl) updateActiveBox(currentEl);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection]);

  const handleLinkClick = (id, link) => {
    setActiveSection(id);
    if (closeNav) closeNav();
    if (onNavigate) {
      onNavigate(id, link);
    }
  };

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, id }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={link}
            ref={(el) => (linkRefs.current[id] = el)}
            onClick={() => handleLinkClick(id, link)}
            className={`nav-link ${isActive ? 'active' : ''}`}
          >
            {label}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func,
  onNavigate: PropTypes.func,
};

export default Navbar;