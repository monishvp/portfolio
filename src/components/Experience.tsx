import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-[#070707] text-white py-28 px-6 md:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-[#FFA24C] font-semibold mb-3"
          >
            Career Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-normal tracking-tight"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-base md:text-lg mt-4 max-w-xl font-light"
          >
            Building production systems across enterprise stacks and agile release cycles.
          </motion.p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl p-8 md:p-12 bg-white/[0.02] border border-white/15 hover:border-white/30 transition-all duration-500 overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F16B0D]/5 rounded-full blur-3xl group-hover:bg-[#F16B0D]/15 transition-all duration-500 pointer-events-none" />

              {/* Company & Role Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#F16B0D] animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#FFA24C]">
                      Full-Time Role
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-normal text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-white/80 mt-1 font-light">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-white/60 font-light">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <MapPin size={14} className="text-[#F16B0D]" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F16B0D]/15 border border-[#F16B0D]/30 text-[#FFA24C] font-medium">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="pt-8">
                <p className="text-xs uppercase tracking-wider text-white/50 mb-6 font-semibold">
                  Core Responsibilities &amp; Impact
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all flex items-start gap-3.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F16B0D] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-white/75 text-xs md:text-sm leading-relaxed font-light">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
