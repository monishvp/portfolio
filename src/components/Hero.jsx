import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-effects">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-image-ring">
            <img src={personalInfo.profileImage} alt={personalInfo.name} className="hero-image" />
          </div>
        </motion.div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">{personalInfo.title}</h2>
          <p className="hero-tagline">{personalInfo.tagline}</p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaChevronDown />
      </motion.a>
    </section>
  )
}

export default Hero
