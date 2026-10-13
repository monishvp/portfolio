import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

interface ContactCardItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
}

const primaryContacts: ContactCardItem[] = [
  { icon: <Mail className="text-[#F16B0D]" size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <Phone className="text-[#F16B0D]" size={20} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <MapPin className="text-[#F16B0D]" size={20} />, label: 'Location', value: personalInfo.location, href: null },
];

const socialContacts: ContactCardItem[] = [
  { icon: <FaLinkedin className="text-[#F16B0D]" size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/monish-p-a12639219', href: personalInfo.linkedin },
  { icon: <FaGithub className="text-[#F16B0D]" size={20} />, label: 'GitHub', value: 'github.com/monishvp', href: personalInfo.github },
];

export const Contact: React.FC = () => {
  const renderCard = (item: ContactCardItem) => {
    const cardContent = (
      <div className="group p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#F16B0D]/50 hover:bg-white/[0.04] flex items-center gap-4 transition-all duration-300 h-full">
        <div className="w-10 h-10 rounded-lg bg-[#F16B0D]/10 border border-[#F16B0D]/20 flex items-center justify-center text-base shrink-0 group-hover:scale-110 transition-transform">
          {item.icon}
        </div>
        <div className="overflow-hidden min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-0.5">
            {item.label}
          </p>
          <p className="text-white text-xs sm:text-sm font-normal truncate group-hover:text-[#FFA24C] transition-colors">
            {item.value}
          </p>
        </div>
      </div>
    );

    return item.href ? (
      <a
        href={item.href}
        target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? undefined : '_blank'}
        rel={item.href.startsWith('mailto') || item.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
        className="block h-full cursor-pointer"
      >
        {cardContent}
      </a>
    ) : (
      <div className="h-full">{cardContent}</div>
    );
  };

  return (
    <section id="contact" className="relative w-full bg-[#070707] text-white pt-16 pb-10 px-4 sm:px-6 md:px-10 border-t border-white/10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[11px] uppercase tracking-[0.25em] text-[#FFA24C] font-semibold mb-2"
          >
            Communication
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-normal tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/60 text-xs sm:text-sm mt-2.5 max-w-md mx-auto font-light"
          >
            Available for full-stack engineering opportunities and innovative projects.
          </motion.p>
        </div>

        <div className="space-y-3.5 max-w-3xl mx-auto">
          {/* Top row: 3 Primary Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {primaryContacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {renderCard(item)}
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 2 Social Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg mx-auto">
            {socialContacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.18 + i * 0.06 }}
              >
                {renderCard(item)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
