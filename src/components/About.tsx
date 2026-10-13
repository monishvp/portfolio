import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { Server, Database, Code, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const highlights: HighlightItem[] = [
  { icon: <Server className="stroke-[#F16B0D]" size={22} />, title: 'Backend & .NET Architecture', desc: 'ASP.NET Core / MVC / Web API, C#, Entity Framework & LINQ' },
  { icon: <Database className="stroke-[#F16B0D]" size={22} />, title: 'Database Optimization', desc: 'SQL Server, PostgreSQL, Schema Design & Index Tuning' },
  { icon: <Code className="stroke-[#F16B0D]" size={22} />, title: 'Frontend Systems', desc: 'AngularJS, React.js, TypeScript & Modern UI Workflows' },
  { icon: <Cpu className="stroke-[#F16B0D]" size={22} />, title: 'AI & Workflow Automation', desc: 'n8n Automation Pipelines, Python & AI Tool Integration' },
];

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 2, suffix: '+', label: 'Enterprise Platforms' },
  { value: 6, suffix: '+', label: 'Core Technology Stacks' },
];

const AnimatedCounter: React.FC<StatItem> = ({ value, suffix, label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value]);

  return (
    <div ref={ref} className="text-left">
      <span className="block text-4xl sm:text-5xl font-normal text-elena-gradient leading-none mb-2">
        {display}{suffix}
      </span>
      <span className="text-xs uppercase tracking-wider text-white/50 font-medium">
        {label}
      </span>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-[#070707] text-white py-28 px-6 md:px-10 border-t border-white/10 overflow-hidden">
      {/* Ambient flame glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#F16B0D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-[#FFA24C] font-semibold mb-3"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-normal tracking-tight"
          >
            Engineering Practical Systems &amp; AI Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Summary and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Elena Voss Horizontal Animated Stats Counter Bar */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
              {stats.map((s) => (
                <AnimatedCounter key={s.label} {...s} />
              ))}
            </div>
          </motion.div>

          {/* Right Column: 4 Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-normal text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
