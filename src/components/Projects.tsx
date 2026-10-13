import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Gift, Wine } from 'lucide-react';
import { projects } from '../data/portfolioData';
import TextReveal from './TextReveal';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress for Elena Voss pinned portfolio timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Sync active project automatically with scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.5) {
        setActiveIndex(0);
      } else {
        setActiveIndex(1);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeProject = projects[activeIndex];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full bg-[#070707] text-white h-[200vh] border-t border-white/10"
    >
      {/* Sticky Pinned Container that stays centered while scrolling through project milestones */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-12 py-10 overflow-hidden">
        {/* Background ambient flame glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F16B0D]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="mb-10 md:mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FFA24C] font-semibold mb-3">
              Portfolio Showcase
            </p>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tight">
              <TextReveal>Featured Enterprise Platforms</TextReveal>
            </h2>
          </div>

          {/* Interactive Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (5 cols): Interactive Timeline Track with Scroll Sync */}
            <div className="lg:col-span-5 relative">
              <div className="relative pl-8 border-l border-white/15 space-y-8">
                {/* Scroll-driven animated progress fill line */}
                <motion.div
                  style={{ height: timelineHeight }}
                  className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-[#F16B0D] via-[#FFA24C] to-[#E61416]"
                />

                {projects.map((project, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div
                      key={project.title}
                      onClick={() => setActiveIndex(idx)}
                      className="relative cursor-pointer group transition-all"
                    >
                      {/* Indicator dot */}
                      <div
                        className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          isActive
                            ? 'border-[#F16B0D] bg-[#070707] shadow-[0_0_15px_#F16B0D]'
                            : 'border-white/20 bg-[#070707] group-hover:border-white/50'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activeDot"
                            className="w-1.5 h-1.5 rounded-full bg-[#F16B0D]"
                          />
                        )}
                      </div>

                      <div
                        className={`p-6 rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? 'bg-white/[0.05] border-white/20 shadow-xl'
                            : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs uppercase tracking-wider font-semibold text-[#FFA24C]">
                            0{idx + 1}
                          </span>
                          <span className="text-white/30">•</span>
                          <span className="text-xs text-white/50 font-medium">
                            {idx === 0 ? 'Enterprise Rewards' : 'Winery eCommerce & Booking'}
                          </span>
                        </div>
                        <h3
                          className={`text-xl md:text-2xl font-normal transition-colors ${
                            isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-white/50 text-xs md:text-sm mt-2 line-clamp-2 font-light">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column (7 cols): Active Project Cinematic Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.title}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col"
                >
                  {/* Visual Header Banner with Flame Gradient */}
                  <div className="relative h-48 md:h-56 w-full overflow-hidden bg-gradient-to-br from-[#1a0e05] via-[#241208] to-[#0d0703] border-b border-white/10 flex items-center justify-center p-6">
                    {/* Glowing flame radial background */}
                    <div className="absolute inset-0 bg-radial from-[#F16B0D]/25 via-[#E61416]/10 to-transparent" />
                    
                    {/* Subtle geometric grid */}
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage: 'linear-gradient(#F16B0D 1px, transparent 1px), linear-gradient(90deg, #F16B0D 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                      }}
                    />

                    {/* Icon badge */}
                    <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#F16B0D]/20 border border-[#F16B0D]/40 text-[#FFA24C] flex items-center justify-center shadow-[0_0_30px_rgba(241,107,13,0.3)]">
                        {activeProject.icon === 'gift' ? (
                           <Gift size={28} />
                        ) : (
                          <Wine size={28} />
                        )}
                      </div>
                      <span className="text-base md:text-lg font-medium text-white tracking-wide">
                        {activeProject.title}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex flex-col gap-5">
                    <div>
                      <h4 className="text-xl md:text-2xl font-normal text-white mb-2">
                        {activeProject.title}
                      </h4>
                      <p className="text-white/75 text-xs md:text-sm leading-relaxed font-light">
                        {activeProject.description}
                      </p>
                    </div>

                    {/* Tech stack badges */}
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/50 mb-2 font-semibold">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/[0.05] border border-white/10 text-white/90 hover:border-[#F16B0D] hover:bg-[#F16B0D]/10 hover:text-white transition-all"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/50 mb-2 font-semibold">
                        Key Engineering Highlights
                      </p>
                      <ul className="space-y-2">
                        {activeProject.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="text-white/70 text-xs md:text-sm leading-relaxed flex items-start gap-2.5 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F16B0D] mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
