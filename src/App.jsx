import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const sectionTitles = {
  about: 'Sobre Mim',
  skills: 'Habilidades',
  projects: 'Projetos',
  contact: 'Contato',
};

function getSectionFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (sectionTitles[hash]) return hash;
  return 'about';
}

function App() {
  const [section, setSection] = useState(getSectionFromHash());

  React.useEffect(() => {
    const onHashChange = () => setSection(getSectionFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div>
      <Sidebar />
      <MainContent>
        <Header title={sectionTitles[section] || 'Portfólio'} />
        <div className="px-8 pb-24 pt-6 max-w-5xl mx-auto">
          {section === 'about' && <About />}
          {section === 'skills' && <Skills />}
          {section === 'projects' && <Projects />}
          {section === 'contact' && <Contact />}
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}

export default App; 