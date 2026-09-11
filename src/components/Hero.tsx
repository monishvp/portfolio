import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { Button } from './ui/button';

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
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-[#00d4ff] to-[#7c3aed] shadow-[0_0_60px_rgba(0,212,255,0.4)]">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover object-center border-4 border-[#0a0a0a]"
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

          {/* CTA Buttons using shadcn Button */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="#contact">
              <Button size="lg">Get In Touch</Button>
            </a>
            <a href={personalInfo.resumeUrl} download="Monish_P_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="border border-white/20 hover:border-[#00d4ff]">
                Download Resume
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" size="lg">View Projects</Button>
            </a>
          </div>

          {/* Social Icons using shadcn Button */}
          <div className="flex items-center justify-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="icon" size="icon">
                <FaGithub className="text-lg" />
              </Button>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="icon" size="icon">
                <FaLinkedin className="text-lg" />
              </Button>
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <Button variant="icon" size="icon">
                <FaEnvelope className="text-lg" />
              </Button>
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
