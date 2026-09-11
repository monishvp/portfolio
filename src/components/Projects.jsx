import { motion } from 'framer-motion'
import { FaGift, FaRobot, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/portfolioData'
import './Projects.css'

const iconMap = {
  gift: <FaGift />,
  robot: <FaRobot />
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Some of my notable work
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="project-icon">
                {iconMap[project.icon]}
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
