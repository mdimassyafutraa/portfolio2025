import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const activeBox = useRef();
  const linkRefs = useRef([]);

  const initActiveBox = () => {
    if (linkRefs.current.length > 0 && linkRefs.current[0]) {
      const activeLink = linkRefs.current.find((ref) => ref.classList.contains('active'));
      if (activeLink) {
        activeBox.current.style.top = activeLink.offsetTop + 'px';
        activeBox.current.style.left = activeLink.offsetLeft + 'px';
        activeBox.current.style.width = activeLink.offsetWidth + 'px';
        activeBox.current.style.height = activeLink.offsetHeight + 'px';
      }
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    return () => {
      window.removeEventListener('resize', initActiveBox);
    };
  }, []);

  const activeCurrentLink = (event) => {
    linkRefs.current.forEach((link) => link.classList.remove('active'));
    event.target.classList.add('active');

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  };

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Project',
      link: '#project',
      className: 'nav-link',
    },
    {
      label: 'Contact me',
      link: '#contact',
      className: 'nav-link md:hidden',
    },
  ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className }, key) => (
        <a href={link} key={key} className={className} ref={(el) => (linkRefs.current[key] = el)} onClick={activeCurrentLink}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
