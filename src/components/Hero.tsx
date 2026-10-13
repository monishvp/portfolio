import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { ArrowUpRight, Sparkle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Button } from './ui/button';
import TypewriterText from './TypewriterText';

const roles = [
  '.NET Full Stack Developer',
  'C# Backend Engineer',
  'AngularJS & React Specialist',
  'AI & Workflow Automation Builder',
];

const marqueeTech1 = [
  'C# / ASP.NET Core',
  'Entity Framework & LINQ',
  'Microsoft SQL Server',
  'AngularJS UI Systems',
  'RESTful Web APIs',
  'C# / ASP.NET Core',
  'Entity Framework & LINQ',
];

const marqueeTech2 = [
  'React.js & TypeScript',
  'n8n Workflow Automation',
  'PostgreSQL & Optimization',
  'AI-Assisted Engineering',
  'Python & Intelligent Agents',
  'React.js & TypeScript',
  'n8n Workflow Automation',
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-20 overflow-hidden"
      style={{
        backgroundColor: '#070707',
        backgroundImage: `
          radial-gradient(65% 55% at 92% 10%, rgba(241, 107, 13, 0.32) 0%, rgba(241, 107, 13, 0) 65%),
          radial-gradient(60% 55% at 5% 75%, rgba(230, 20, 22, 0.22) 0%, rgba(230, 20, 22, 0) 65%),
          radial-gradient(75% 80% at 50% 35%, rgba(241, 107, 13, 0.14) 0%, rgba(241, 107, 13, 0) 70%),
          linear-gradient(180deg, rgba(241, 107, 13, 0.08) 0%, rgba(230, 20, 22, 0.02) 40%, rgba(7, 7, 7, 1) 100%)
        `,
      }}
    >
      {/* Signature dual background floating marquee columns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 flex justify-between px-10">
        <motion.div
          animate={{ y: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex flex-col gap-6 text-sm font-mono uppercase tracking-widest text-white/40"
        >
          {marqueeTech1.concat(marqueeTech1).map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-white/20 whitespace-nowrap">
              {item}
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: ['-50%', '0%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="hidden md:flex flex-col gap-6 text-sm font-mono uppercase tracking-widest text-white/40"
        >
          {marqueeTech2.concat(marqueeTech2).map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-white/20 whitespace-nowrap">
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative ambient blurred ember halos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F16B0D]/15 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#E61416]/12 blur-[130px]"
        />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12"
        >
          {/* Top metadata row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 text-xs md:text-sm text-white/60 uppercase tracking-widest font-medium"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F16B0D] animate-pulse" />
              <span>Full Stack .NET Developer</span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <span>Coimbatore, India</span>
              <span>•</span>
              <span>Brightspot Technology</span>
            </div>
            <div className="text-white/80 font-semibold tracking-wider">
              2+ Years Experience
            </div>
          </motion.div>

          {/* Main Hero Grid: Massive Headline + Portrait & Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 cols: Massive Editorial Typography */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Cycling Role Pill Badge */}
              <motion.div variants={itemVariants} className="w-fit">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-semibold text-white/90 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F16B0D] to-[#E61416]" />
                  <TypewriterText roles={roles} className="text-[#FFA24C]" />
                </div>
              </motion.div>

              {/* Massive Title matching image_e16a85b3.jpg */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.08] tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F16B0D] via-[#FFA24C] to-[#F16B0D] font-medium block">
                  Building
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F16B0D] via-[#FFA24C] to-[#F16B0D] font-medium block">
                  Scalable
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F16B0D] via-[#FFA24C] to-[#F16B0D] font-medium block">
                  Web Systems
                </span>
                <span className="text-white font-normal block">
                  in Motion.
                </span>
              </motion.h1>

              {/* Bio summary */}
              <motion.p
                variants={itemVariants}
                className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl font-light"
              >
                Hi, I'm <strong className="text-white font-medium">Monish P</strong>. I engineer end-to-end web applications with <span className="text-white font-medium">C#</span>, <span className="text-white font-medium">ASP.NET</span>, <span className="text-white font-medium">AngularJS</span>, <span className="text-white font-medium">React</span>, and <span className="text-white font-medium">Microsoft SQL Server</span>, complementing production engineering with <span className="text-[#FFA24C] font-medium">AI &amp; n8n workflow automation</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a href="#projects">
                  <Button
                    size="lg"
                    className="gap-2 bg-white text-[#070707] hover:bg-[#F16B0D] hover:text-white rounded-full font-medium shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(241,107,13,0.5)] transition-all"
                  >
                    <span>Explore Featured Work</span>
                    <ArrowUpRight size={17} />
                  </Button>
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download="Monish_P_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-white/20 hover:border-[#F16B0D] hover:bg-white/5"
                  >
                    Download Resume
                  </Button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6 pt-2 text-sm text-white/60 font-medium"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFA24C] transition-colors"
                >
                  <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:border-[#F16B0D]">
                    <FaGithub size={14} />
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFA24C] transition-colors"
                >
                  <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:border-[#F16B0D]">
                    <FaLinkedin size={14} />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </motion.div>
            </div>

            {/* Right 5 cols: Standalone Executive Poster Portrait (No Card) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative flex flex-col items-center justify-end pt-6 lg:pt-0"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px] flex items-end justify-center">
                {/* Warm golden-amber backlight spotlight matching image_e16a85b3.jpg */}
                <div
                  className="absolute top-1/3 -right-4 sm:-right-8 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px] rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(241,107,13,0.52) 0%, rgba(200,85,10,0.2) 42%, transparent 72%)',
                    filter: 'blur(48px)',
                  }}
                />

                {/* Transparent Standalone Portrait with smooth bottom fade */}
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative z-10 w-full h-auto max-h-[520px] sm:max-h-[600px] md:max-h-[660px] lg:max-h-[720px] object-contain object-bottom select-none pointer-events-none filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 98%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 98%)',
                  }}
                />

                {/* Seamless dark blend overlay at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-20"
                  style={{
                    background:
                      'linear-gradient(to top, #070707 0%, rgba(7,7,7,0.7) 45%, transparent 100%)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative 4-pointed sparkle star matching image_e16a85b3.jpg */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.65, 0.35],
          rotate: [0, 3, 0],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 z-20 pointer-events-none select-none"
      >
        <Sparkle className="w-10 h-10 sm:w-12 sm:h-12 fill-white/35 text-white/20 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-[#FFA24C] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <FaArrowDown size={12} />
      </motion.a>
    </section>
  );
};

export default Hero;
