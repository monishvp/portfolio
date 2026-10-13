import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#070707] text-white py-12 px-6 md:px-12 border-t border-white/10 overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand & Subtitle */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <a href="#home" className="text-xl font-bold tracking-tight text-white flex items-baseline gap-1">
            <span>Monish</span>
            <span className="text-gray-400 font-light">P</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#F16B0D] shadow-[0_0_10px_#F16B0D]" />
          </a>
          <span className="hidden sm:inline-block text-white/30">•</span>
          <p className="text-white/50 text-xs font-light">
            {personalInfo.title} • Brightspot Technology Solutions
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { href: personalInfo.github, Icon: FaGithub, label: 'GitHub' },
            { href: personalInfo.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, Icon: FaEnvelope, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-[#F16B0D] hover:bg-[#F16B0D]/20 transition-all duration-300"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/40 font-light text-center md:text-right">
          <p>© {new Date().getFullYear()} Monish P. All rights reserved.</p>
          <p className="flex items-center justify-center md:justify-end gap-1.5 mt-1 text-[11px]">
            Designed in Elena Voss Editorial Style with <FaHeart className="text-[#F16B0D] text-[10px]" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
