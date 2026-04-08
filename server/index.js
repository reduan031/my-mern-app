const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend Server is Running!' });
});

// API Routes
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot powered by machine learning for customer support and engagement.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];
  res.json(projects);
});

app.get('/api/skills', (req, res) => {
  const skills = {
    frontend: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'],
    backend: ['Node.js', 'Express', 'Python', 'REST APIs', 'Authentication'],
    tools: ['Git', 'MongoDB', 'PostgreSQL', 'Docker', 'Figma'],
    soft: ['Problem Solving', 'Communication', 'Team Work', 'Creativity', 'Leadership'],
  };
  res.json(skills);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  // Here you would typically save this to a database or send an email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ message: 'Thank you for your message! I will get back to you soon.' });
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});