import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Zap } from 'lucide-react';

interface StrengthCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
}

const strengths: StrengthCard[] = [
  {
    icon: <Rocket className="w-10 h-10 stroke-[#F16B0D]" strokeWidth={1.5} />,
    title: 'Rapid & Reliable Delivery',
    description: 'Delivering end-to-end full stack web modules with clean C# and ASP.NET architecture, meeting sprint commitments without sacrificing code quality.',
    metric: 'Agile & Full-Lifecycle',
  },
  {
    icon: <Sparkles className="w-10 h-10 stroke-[#F16B0D]" strokeWidth={1.5} />,
    title: 'Precision & Full-Stack Craft',
    description: 'Meticulous optimization across SQL Server queries and schema design, coupled with fluid, responsive user interfaces built in AngularJS and React.',
    metric: 'Database to UI Precision',
  },
  {
    icon: <Zap className="w-10 h-10 stroke-[#F16B0D]" strokeWidth={1.5} />,
    title: 'Future-Proofed Automation',
    description: 'Leveraging AI-assisted engineering and n8n automated workflows to eliminate repetitive developer tasks and build modern intelligent features.',
    metric: 'AI & Workflow Automation',
  },
];

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="relative w-full bg-[#070707] text-white py-24 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header in Elena Voss style */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-[#FFA24C] font-semibold mb-3"
          >
            Engineering Standards
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-normal tracking-tight"
          >
            Why Work With Me?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-base md:text-lg mt-4 max-w-xl mx-auto font-light"
          >
            Fast-track your web and enterprise projects with proven full-stack execution.
          </motion.p>
        </div>

        {/* 3-column Elena Voss Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] flex flex-col justify-between transition-all duration-500 overflow-hidden"
            >
              {/* Subtle radial flame glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F16B0D]/5 rounded-full blur-2xl group-hover:bg-[#F16B0D]/15 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#FFA24C] font-semibold block mb-2">
                  {card.metric}
                </span>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              {/* Signature Elena Voss Animated Bottom Accent Line */}
              <div className="relative mt-8 h-px w-full bg-white/15 overflow-hidden">
                <span className="absolute inset-0 h-px w-full bg-gradient-to-r from-[#F16B0D] to-[#E61416] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
