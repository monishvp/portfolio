import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/portfolioData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-3"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 text-sm md:text-base mb-16"
        >
          My academic background
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-[#00d4ff]/60">
            <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center text-3xl shrink-0">
              <FaGraduationCap />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{education.degree}</h3>
                  <p className="text-[#00d4ff] font-semibold text-base mb-1">{education.field}</p>
                  <p className="text-gray-400 text-sm">{education.university}</p>
                </div>
                <div className="flex md:flex-col items-center md:items-end justify-center gap-2">
                  <Badge variant="cyan" className="text-xs py-1">
                    {education.period}
                  </Badge>
                  <Badge variant="secondary" className="text-xs py-1">
                    CGPA: {education.cgpa}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
