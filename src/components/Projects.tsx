import React from 'react';
import { motion } from 'framer-motion';
import { FaGift, FaRobot, FaWineGlassAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const iconMap = {
  gift: <FaGift />,
  robot: <FaRobot />,
  wine: <FaWineGlassAlt />,
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0d0d12] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-3"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 text-sm md:text-base mb-16"
        >
          Some of my notable work
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="h-full flex"
            >
              <Card className="group relative hover:border-[#00d4ff]/60 hover:-translate-y-1.5 overflow-hidden w-full flex flex-col justify-between">
                {/* Top gradient highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center text-2xl mb-2">
                      {iconMap[project.icon]}
                    </div>
                    <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {/* Highlights list */}
                    <ul className="space-y-2.5 border-t border-white/10 pt-5">
                      {project.highlights.map((h, j) => (
                        <li key={j} className="text-gray-400 text-xs md:text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-[#00d4ff] mt-0.5 text-xs">✦</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                {/* Render live demo button only if a liveUrl exists */}
                {project.liveUrl && (
                  <CardFooter className="pt-4 border-t border-white/10 flex items-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="default" size="sm" className="w-full gap-2">
                        <FaExternalLinkAlt size={12} /> Live Demo
                      </Button>
                    </a>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
