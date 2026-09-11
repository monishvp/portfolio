import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { Button } from './ui/button';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll-spy tracking
      const sectionIds = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold text-white tracking-tight flex items-baseline gap-0.5">
          Monish<span className="text-[#00d4ff] text-3xl leading-none">.</span>
        </a>

        {/* Desktop Links with Active Indicator */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all relative py-1 ${
                  isActive
                    ? 'text-[#00d4ff] font-semibold'
                    : 'text-gray-300 hover:text-[#00d4ff]'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-[#00d4ff] after:to-[#7c3aed] after:transition-all after:duration-300 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Quick Resume Download Action */}
          <a href={personalInfo.resumeUrl} download="Monish_P_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" className="gap-1.5 text-xs py-1.5 h-8">
              <FaFileDownload size={11} /> Resume
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl p-1 hover:text-[#00d4ff] transition-colors focus:outline-none"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-[#111111]/95 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col justify-center gap-6 shadow-2xl transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl hover:text-[#00d4ff]"
        >
          <HiX />
        </button>
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium transition-colors ${
                isActive ? 'text-[#00d4ff] font-bold' : 'text-gray-200 hover:text-[#00d4ff]'
              }`}
            >
              {link.name}
            </a>
          );
        })}

        <a
          href={personalInfo.resumeUrl}
          download="Monish_P_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <Button size="sm" variant="default" className="w-full gap-2 mt-2">
            <FaFileDownload size={13} /> Download Resume
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
