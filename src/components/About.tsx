import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaRobot } from 'react-icons/fa';
import { FaCode, FaServer, FaDatabase, FaCogs } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const highlights: HighlightItem[] = [
  { icon: <FaServer />, title: 'Backend & .NET', desc: 'ASP.NET, C#, Entity Framework' },
  { icon: <FaDatabase />, title: 'Database & SQL', desc: 'SQL Server, Query Optimization' },
  { icon: <FaCode />, title: 'Frontend', desc: 'React, AngularJS, TypeScript' },
  { icon: <FaServer />, title: 'Backend', desc: 'ASP.NET, C#, Web API' },
  { icon: <FaDatabase />, title: 'Database', desc: 'SQL Server, PostgreSQL' },
  { icon: <FaRobot />, title: 'AI & Automation', desc: 'AI Agents, n8n Workflows' },
  { icon: <FaCogs />, title: 'APIs & Services', desc: 'RESTful Web APIs, Microservices' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#111115] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-3"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 text-sm md:text-base mb-16"
        >
          Get to know me and what I do
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Summary & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              {personalInfo.summary}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div className="text-center">
                <span className="block text-3xl font-extrabold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                  2+
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  Years Experience
                </span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-extrabold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                  2+
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  Projects Delivered
                </span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-extrabold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                  6+
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  Technologies
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core competency cards in balanced 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 p-5 bg-[#161616] border border-white/10 rounded-xl hover:border-[#00d4ff]/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] text-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
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

