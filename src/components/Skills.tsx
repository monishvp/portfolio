import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const categoryIcons: Record<string, string> = {
  'Languages': '💻',
  '.NET Technologies': '⚙️',
  'Frontend': '🎨',
  'Databases': '🗄️',
  'Cloud & Tools': '☁️',
  'Practices': '🔄',
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-3"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 text-sm md:text-base mb-16"
        >
          Technologies & tools I work with
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-[#161616] border border-white/10 rounded-xl p-6 hover:border-[#00d4ff]/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient border reveal on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{categoryIcons[skillGroup.category] || '⚡'}</span>
                <h3 className="text-white font-bold text-lg">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 bg-[#00d4ff]/10 border border-[#00d4ff]/20 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

