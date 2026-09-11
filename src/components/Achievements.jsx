import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'
import { achievements } from '../data/portfolioData'
import './Achievements.css'

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Highlights & recognition
        </motion.p>

        <div className="achievements-list">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              className="achievement-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="achievement-icon">
                <FaTrophy />
              </div>
              <p>{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
