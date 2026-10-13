import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative w-full bg-[#070707] text-white py-24 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-[#FFA24C] font-semibold mb-3"
          >
            Academics
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-normal tracking-tight"
          >
            Education &amp; Background
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-12 bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all flex flex-col md:flex-row items-start justify-between gap-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#F16B0D]/15 border border-[#F16B0D]/30 flex items-center justify-center text-[#FFA24C] shrink-0">
              <GraduationCap size={28} />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFA24C]">
                {education.period}
              </span>
              <h3 className="text-2xl md:text-3xl font-normal text-white mt-1 mb-2">
                {education.degree}
              </h3>
              <p className="text-white/80 text-base md:text-lg font-light">
                {education.field}
              </p>
              <p className="text-white/50 text-sm mt-1 font-light">
                {education.university}
              </p>
            </div>
          </div>

          <div className="self-start md:self-center px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-white/90 text-sm font-medium">
            CGPA: <strong className="text-[#FFA24C]">{education.cgpa}</strong> / 10
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
