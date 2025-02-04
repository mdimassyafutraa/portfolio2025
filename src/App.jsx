import { ReactLenis } from 'lenis/react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
};

export default App;
