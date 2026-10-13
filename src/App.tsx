import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Skills from './components/Skills';
import TechGrid from './components/TechGrid';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-[#e4e4e7] selection:bg-[#F16B0D] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyWorkWithMe />
        <Skills />
        <TechGrid />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
