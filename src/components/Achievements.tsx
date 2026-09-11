import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { achievements } from '../data/portfolioData';
import { Card } from './ui/card';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-[#0d0d12] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-3"
        >
          Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 text-sm md:text-base mb-16"
        >
          Highlights & recognition
        </motion.p>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="flex items-start gap-5 p-6 hover:border-[#00d4ff]/60 hover:translate-x-1.5">
                <div className="w-10 h-10 rounded-lg bg-[#7c3aed]/15 text-[#7c3aed] flex items-center justify-center text-lg shrink-0 mt-0.5">
                  <FaTrophy />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
