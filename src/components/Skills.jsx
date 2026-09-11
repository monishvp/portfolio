import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import './Skills.css'

const categoryIcons = {
  'Languages': '💻',
  '.NET Technologies': '⚙️',
  'Frontend': '🎨',
  'Databases': '🗄️',
  'Cloud & Tools': '☁️',
  'Practices': '🔄'
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies & tools I work with
        </motion.p>

        <div className="skills-grid">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="skill-card-header">
                <span className="skill-emoji">{categoryIcons[skillGroup.category]}</span>
                <h3>{skillGroup.category}</h3>
              </div>
              <div className="skill-tags">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
