import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative w-full bg-[#070707] text-white py-24 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-[#FFA24C] font-semibold mb-3"
          >
            Recognition
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-normal tracking-tight"
          >
            Key Highlights &amp; Milestones
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F16B0D]/10 border border-[#F16B0D]/20 flex items-center justify-center text-[#FFA24C] mb-6">
                <Trophy size={20} />
              </div>

              <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
                {item}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F16B0D]" />
                <span className="text-xs uppercase tracking-wider text-white/40 font-medium">
                  Milestone 0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
