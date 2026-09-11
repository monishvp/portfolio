import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

interface ContactCardItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
}

const contactItems: ContactCardItem[] = [
  { icon: <FaEnvelope />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FaPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.location, href: null },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/monish-p-a12639219', href: personalInfo.linkedin },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/monishvp', href: personalInfo.github },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-3"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 text-sm md:text-base mb-16"
        >
          Feel free to reach out for collaborations or opportunities
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactItems.map((item, i) => {
            const content = (
              <div className="flex items-center gap-4 p-6 bg-[#161616] border border-white/10 rounded-xl hover:border-[#00d4ff]/60 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center text-xl shrink-0 group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#7c3aed] group-hover:text-black transition-all duration-300">
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium truncate">{item.value}</p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={i === contactItems.length - 1 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto w-full' : 'w-full'}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group h-full"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="h-full">{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;

