import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import { experience } from '../data/portfolioData'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My career journey so far
        </motion.p>

        <div className="timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="location">{exp.location}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
