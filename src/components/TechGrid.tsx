import React from 'react';
import { motion } from 'framer-motion';
import {
  SiDotnet,
  SiPostgresql,
  SiPython,
  SiFlutter,
  SiNodedotjs,
  SiReact,
  SiGithub,
} from 'react-icons/si';
import {
  TbBrandCSharp,
  TbBrandAngular,
  TbBrandVisualStudio,
} from 'react-icons/tb';
import { FaDatabase, FaRobot } from 'react-icons/fa';
import TextReveal from './TextReveal';

const techItems = [
  { name: 'C#', icon: <TbBrandCSharp size={36} />, category: 'Backend' },
  { name: 'ASP.NET', icon: <SiDotnet size={36} />, category: 'Framework' },
  { name: 'SQL Server', icon: <FaDatabase size={32} />, category: 'Database' },
  { name: 'AngularJS', icon: <TbBrandAngular size={36} />, category: 'Frontend' },
  { name: 'React.js', icon: <SiReact size={36} />, category: 'UI Library' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={36} />, category: 'Database' },
  { name: 'AI & n8n', icon: <FaRobot size={32} />, category: 'Automation' },
  { name: 'Python', icon: <SiPython size={36} />, category: 'Data & AI' },
  { name: 'Node.js', icon: <SiNodedotjs size={36} />, category: 'Runtime' },
  { name: 'Flutter', icon: <SiFlutter size={36} />, category: 'Mobile' },
  { name: 'VS 2022', icon: <TbBrandVisualStudio size={36} />, category: 'IDE' },
  { name: 'Git & GitHub', icon: <SiGithub size={36} />, category: 'DevOps' },
];

export const TechGrid: React.FC = () => {
  return (
    <section className="relative w-full bg-[#070707] text-white py-28 px-6 md:px-10 border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F16B0D]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#FFA24C] font-semibold mb-3">
            Ecosystem
          </p>
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight">
            <TextReveal>Engineered with Proven Enterprise Technologies</TextReveal>
          </h2>
          <p className="text-white/60 text-base md:text-lg mt-4 font-light leading-relaxed">
            From database schemas and robust REST APIs to dynamic client interfaces and automated workflows.
          </p>
        </div>

        {/* Elena Voss 3D Perspective Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 [perspective:1000px]">
          {techItems.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 25, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              whileHover={{ y: -6, rotateX: -4, rotateY: 4, scale: 1.03 }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center shadow-lg relative overflow-hidden"
            >
              {/* Radial flame glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F16B0D]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="text-white/80 group-hover:text-[#FFA24C] transition-colors group-hover:scale-110 duration-300">
                {tech.icon}
              </div>

              <div>
                <p className="text-white font-medium text-sm md:text-base">
                  {tech.name}
                </p>
                <p className="text-[11px] text-white/40 uppercase tracking-wider font-light mt-0.5">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
