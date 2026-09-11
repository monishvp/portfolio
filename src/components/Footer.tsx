import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <a href="#home" className="text-xl font-extrabold text-white tracking-tight flex items-baseline gap-0.5">
          Monish<span className="text-[#00d4ff] text-2xl leading-none"></span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-gray-500 text-xs flex items-center gap-1.5">
          Made with <FaHeart className="text-red-500 animate-pulse text-[11px]" /> by Monish P &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

