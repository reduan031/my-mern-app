import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'],
      icon: '🎨',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'Authentication'],
      icon: '⚙️',
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'MongoDB', 'PostgreSQL', 'Docker', 'Figma'],
      icon: '🛠️',
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Work', 'Creativity', 'Leadership'],
      icon: '🌟',
    },
  ];

  return (
    <motion.div
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="about-container" variants={itemVariants}>
        <h1>About Me</h1>
        <p className="tagline">Crafting digital solutions with passion and precision</p>
      </motion.div>

      {/* Bio Section */}
      <motion.section className="bio-section" variants={itemVariants}>
        <div className="bio-content">
          <motion.div className="bio-image" whileHover={{ scale: 1.05 }}>
            <div className="image-placeholder">👤</div>
          </motion.div>
          <div className="bio-text">
            <h2>Who Am I?</h2>
            <p>
              I'm a passionate full stack developer with a keen interest in creating beautiful, functional web applications.
              With experience in modern web technologies and a love for clean code, I transform complex problems into simple, elegant solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
            </p>
            <div className="quick-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="skills-section" variants={itemVariants}>
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(100, 200, 255, 0.2)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section className="timeline-section" variants={itemVariants}>
        <h2>Journey</h2>
        <div className="timeline">
          <motion.div className="timeline-item" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Senior Developer</h3>
              <p className="timeline-date">2023 - Present</p>
              <p>Leading frontend development and mentoring junior developers in modern web technologies.</p>
            </div>
          </motion.div>

          <motion.div className="timeline-item" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <p className="timeline-date">2021 - 2023</p>
              <p>Built responsive web applications using React, Node.js, and MongoDB.</p>
            </div>
          </motion.div>

          <motion.div className="timeline-item" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Junior Developer</h3>
              <p className="timeline-date">2019 - 2021</p>
              <p>Started my journey in web development, learning and building projects.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default About;
