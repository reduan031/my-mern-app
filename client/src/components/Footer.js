import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Email', url: 'mailto:your.email@example.com' },
  ];

  const footerLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Blog', url: '#blog' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="footer-grid">
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Portfolio</h3>
            <p>Crafting beautiful digital experiences with modern technologies.</p>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="footer-divider" variants={itemVariants} />

        <motion.div className="footer-bottom" variants={itemVariants}>
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>
        </motion.div>
      </motion.div>

      <div className="footer-gradient"></div>
    </footer>
  );
}

export default Footer;
