import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glow & subtle grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#00d4ff]/10 blur-[130px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#7c3aed]/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 relative z-10">
        {/* Profile Image with Gradient Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-[#00d4ff] to-[#7c3aed] shadow-[0_0_40px_rgba(0,212,255,0.3)]">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover border-4 border-[#0a0a0a]"
            />
          </div>
        </motion.div>

        {/* Hero Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-[#00d4ff] font-semibold text-xs md:text-sm tracking-[0.25em] uppercase mb-3">
            HELLO, I'M
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-3">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-5">
            {personalInfo.title}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg font-semibold text-[#00d4ff] border border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-300 text-lg hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-300 text-lg hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-300 text-lg hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll down bouncing indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[#00d4ff] transition-colors"
        aria-label="Scroll to About section"
      >
        <FaChevronDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;

