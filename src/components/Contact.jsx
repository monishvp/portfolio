import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import './Contact.css'

const contactItems = [
  { icon: <FaEnvelope />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FaPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.location, href: null },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/monish-p', href: personalInfo.linkedin },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/monishvp', href: personalInfo.github },
]

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Feel free to reach out for collaborations or opportunities
        </motion.p>

        <div className="contact-grid">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <p className="contact-label">{item.label}</p>
                    <p className="contact-value">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="contact-link">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <p className="contact-label">{item.label}</p>
                    <p className="contact-value">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
