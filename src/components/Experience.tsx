import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { experience } from '../data/portfolioData';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#111115] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-3"
        >
          Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 text-sm md:text-base mb-16"
        >
          My career journey so far
        </motion.p>

        {/* Timeline wrapper */}
        <div className="relative pl-8 md:pl-10 border-l-2 border-[#00d4ff]/40">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline marker circle */}
              <div className="absolute -left-[45px] md:-left-[49px] top-1 w-9 h-9 rounded-full bg-[#0a0a0a] border-2 border-[#00d4ff] flex items-center justify-center text-[#00d4ff] text-sm shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                <FaBriefcase />
              </div>

              {/* Content card with shadcn */}
              <Card className="hover:border-[#00d4ff]/60">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <p className="text-[#00d4ff] font-semibold text-sm">{exp.company}</p>
                      <p className="text-gray-500 text-xs">{exp.location}</p>
                    </div>
                    <Badge variant="cyan" className="self-start sm:self-auto text-xs py-1">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="text-[#00d4ff] font-bold mt-0.5">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
