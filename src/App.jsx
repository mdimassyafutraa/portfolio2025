import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import WorkDetail from './components/WorkDetail';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedWorkId, setSelectedWorkId] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/work/')) {
        const id = hash.replace('#/work/', '');
        setSelectedWorkId(id);
        setCurrentView('work-detail');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentView]);

  const handleSelectWork = (work) => {
    setSelectedWorkId(work.id);
    setCurrentView('work-detail');
    window.location.hash = `#/work/${work.id}`;
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.location.hash = '#work';
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleNavigate = (sectionId, link) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = link;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col relative">

      <div className="bg-mesh" aria-hidden="true" />

      <Header onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            <Hero />
            <About />
            <Work onSelectWork={handleSelectWork} />
            <Project />
            <Skill />
            <Contact />
          </>
        ) : (
          <WorkDetail
            workId={selectedWorkId}
            onBack={handleBackToHome}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;