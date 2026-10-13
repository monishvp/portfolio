import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { skills } from '../data/portfolioData';
import TextReveal from './TextReveal';

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pinned Horizontal Scroll tracking (Elena Voss signature services animation)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform vertical scroll progress into horizontal translation of the cards
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative w-full bg-[#070707] text-white h-[280vh] md:h-[300vh] border-t border-white/10"
    >
      {/* Sticky Pinned Container that stays locked on screen during scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12 py-12">
        {/* Ambient flame glow in background */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#F16B0D]/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-7xl mx-auto w-full mb-10 md:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#FFA24C] font-semibold mb-3">
                Capabilities
              </p>
              <h2 className="text-4xl md:text-6xl font-normal tracking-tight">
                <TextReveal>Technical Capabilities &amp; Architecture</TextReveal>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3 text-xs text-white/50 uppercase tracking-widest font-mono">
              <span className="w-8 h-[1px] bg-[#F16B0D]" />
              <span>Scroll down to explore</span>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Cards Row */}
        <div className="max-w-7xl mx-auto w-full overflow-visible">
          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-8 will-change-transform w-fit"
          >
            {skills.map((skillGroup, idx) => (
              <div
                key={skillGroup.category}
                className="group relative rounded-3xl p-8 md:p-10 bg-[#111111] border border-white/10 hover:border-white/30 flex flex-col justify-between w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] shrink-0 min-h-[380px] md:min-h-[420px] transition-all duration-500 overflow-hidden shadow-2xl"
              >
                {/* Signature flame gradient fill on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F16B0D]/20 via-[#E61416]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Row: Category Index + Dual-Arrow Sliding Circle Button */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-[#FFA24C] transition-colors">
                    0{idx + 1}
                  </span>

                  {/* Dual-arrow slide button */}
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-[#070707] group-hover:border-white transition-all duration-300 overflow-hidden relative shadow-sm">
                    <div className="transition-transform duration-300 ease-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                      <ArrowUpRight size={20} />
                    </div>
                    <div className="absolute transition-transform duration-300 ease-out -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 group-hover:text-white transition-colors">
                    {skillGroup.category}
                  </h3>

                  <ul className="space-y-3">
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm md:text-base text-white/70 font-light group-hover:text-white/95 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#F16B0D] group-hover:scale-125 transition-transform shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle bottom accent line */}
                <div className="relative mt-8 h-[2px] w-full bg-white/10 overflow-hidden">
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#F16B0D] to-[#E61416] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
