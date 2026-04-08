import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="home">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <motion.div className="blob blob-1" animate={{ x: [0, 50, 0], y: [0, -50, 0] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="blob blob-2" animate={{ x: [0, -50, 0], y: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} />
        <motion.div className="blob blob-3" animate={{ x: [0, 30, 0], y: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity, delay: 4 }} />
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="profile-image-wrapper"
          variants={itemVariants}
        >
          <motion.div
            className="profile-image"
            animate={floatingVariants}
          >
            <div className="image-placeholder">👨‍💻</div>
          </motion.div>
          <div className="glow-ring"></div>
        </motion.div>

        {/* Hero Text */}
        <motion.div className="hero-text" variants={itemVariants}>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | Creative Thinker | Problem Solver
          </p>
          <p className="hero-description">
            I build beautiful, responsive, and user-friendly web applications.
            Passionate about turning ideas into interactive digital experiences.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className="cta-buttons" variants={itemVariants}>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(100, 200, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div className="social-links" variants={itemVariants}>
          <motion.a href="#" className="social-link" whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
            <span>GitHub</span>
          </motion.a>
          <motion.a href="#" className="social-link" whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
            <span>LinkedIn</span>
          </motion.a>
          <motion.a href="#" className="social-link" whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
            <span>Twitter</span>
          </motion.a>
          <motion.a href="#" className="social-link" whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
            <span>Email</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p>Scroll to explore</p>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
