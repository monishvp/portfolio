import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    setActiveSection(targetId);
    setMenuOpen(false);

    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Bottom-of-page check: if user reached or is near the bottom of document, activate Contact
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // Scroll-spy tracking
      const sectionIds = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#070707]/80 backdrop-blur-xl py-4 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo in Elena Voss editorial style */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group text-2xl font-bold tracking-tight text-white flex items-baseline gap-1 cursor-pointer"
          >
            <span>Monish</span>
            <span className="text-gray-400 font-light">P</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#F16B0D] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#F16B0D]" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F16B0D] to-[#FFA24C] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Elena Voss signature pill button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              download="Monish_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-white/70 hover:text-white transition-colors flex items-center gap-1.5 py-2 px-3 rounded-full hover:bg-white/5"
            >
              <FaFileDownload size={11} className="text-[#F16B0D]" /> Resume
            </a>

            {/* Signature "Get in Touch" Pill Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group relative flex items-center justify-center gap-2.5 h-10 px-5 rounded-full overflow-hidden whitespace-nowrap font-medium text-xs tracking-wide bg-white text-[#070707] hover:bg-[#F16B0D] hover:text-white transition-all duration-400 border border-white/20 shadow-md hover:shadow-[0_0_25px_rgba(241,107,13,0.4)] cursor-pointer"
            >
              <span className="relative z-10 flex shrink-0 items-center justify-center w-2 h-2 rounded-full bg-[#070707] group-hover:bg-white group-hover:scale-125 transition-all duration-300" />
              <span className="relative z-10">Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl p-2 hover:text-[#F16B0D] transition-colors focus:outline-none"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              className="fixed inset-y-0 right-0 z-50 w-80 bg-[#0d0d0d] border-l border-white/10 p-8 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-white/10">
                  <span className="text-xl font-bold text-white flex items-center gap-1">
                    Monish P
                    <span className="w-2 h-2 rounded-full bg-[#F16B0D]" />
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-white/70 hover:text-white text-2xl"
                  >
                    <HiX />
                  </button>
                </div>

                <div className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`text-lg font-medium py-3 px-4 rounded-xl transition-all cursor-pointer ${
                          isActive
                            ? 'text-white bg-white/10 border-l-4 border-[#F16B0D]'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2.5 h-12 w-full rounded-full font-medium text-sm bg-white text-[#070707] hover:bg-[#F16B0D] hover:text-white transition-all shadow-md cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#070707]" />
                  Get in Touch
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download="Monish_P_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-11 w-full rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-[#F16B0D] hover:bg-white/5"
                >
                  <FaFileDownload size={12} className="text-[#F16B0D]" /> Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
