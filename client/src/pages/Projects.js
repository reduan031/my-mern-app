import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '🛒',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '✅',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 3,
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot powered by machine learning for customer support and engagement.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '🤖',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with insights and scheduling.',
      tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '📊',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Real-time weather application with beautiful UI and location-based forecasting.',
      tech: ['React', 'OpenWeather API', 'Geolocation', 'CSS Animations'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '🌤️',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      tech: ['React', 'Framer Motion', 'Node.js', 'Figma'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '🎨',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  ]);

  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.tech.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()))
        )
      );
    }
  }, [filter, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const techStack = ['React', 'Node.js', 'MongoDB', 'Firebase', 'Python'];

  return (
    <motion.div
      className="projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="projects-header">
        <h1>My Projects</h1>
        <p className="tagline">Showcasing my best work and creative solutions</p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div className="filter-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <motion.button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Projects
        </motion.button>
        {techStack.map((tech) => (
          <motion.button
            key={tech}
            className={`filter-btn ${filter === tech ? 'active' : ''}`}
            onClick={() => setFilter(tech)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="projects-grid" variants={containerVariants}>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={projectVariants}
            whileHover={{ y: -20, boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="project-image" style={{ background: project.color }}>
              <div className="image-icon">{project.image}</div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <motion.span key={idx} className="tech-badge" whileHover={{ scale: 1.1 }}>
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="project-links">
                <motion.a
                  href={project.github}
                  className="link-btn github"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  className="link-btn demo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No projects found for this filter.</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Projects;
