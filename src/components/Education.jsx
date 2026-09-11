import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { education } from '../data/portfolioData'
import './Education.css'

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My academic background
        </motion.p>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <div className="edu-content">
            <div className="edu-header">
              <div>
                <h3>{education.degree}</h3>
                <p className="edu-field">{education.field}</p>
                <p className="edu-university">{education.university}</p>
              </div>
              <div className="edu-meta">
                <span className="edu-period">{education.period}</span>
                <span className="edu-cgpa">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
