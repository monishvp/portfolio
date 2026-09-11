import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaRobot } from 'react-icons/fa'
import { personalInfo, strengths } from '../data/portfolioData'
import './About.css'

const highlights = [
  { icon: <FaCode />, title: 'Frontend', desc: 'React, AngularJS, TypeScript' },
  { icon: <FaServer />, title: 'Backend', desc: 'ASP.NET, C#, Web API' },
  { icon: <FaDatabase />, title: 'Database', desc: 'SQL Server, PostgreSQL' },
  { icon: <FaRobot />, title: 'AI & Automation', desc: 'AI Agents, n8n Workflows' },
]

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get to know me and what I do
        </motion.p>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>{personalInfo.summary}</p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, i) => (
              <div key={i} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
