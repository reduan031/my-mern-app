# 🚀 Personal Portfolio Web App - MERN Stack

## Project Overview

This is a stunning, modern personal portfolio web application built with the MERN stack (MongoDB, Express, React, Node.js). It showcases projects, skills, and contact information with beautiful, animated UI.

## ✨ Features

### 1. **Home Page** 
- Animated hero section with floating profile image
- Gradient text animations
- Smooth scroll animations with Framer Motion
- Call-to-action buttons
- Social media links
- Floating blob background animations

### 2. **About Page**
- Detailed bio section with profile image
- Skills grid display with 4 categories:
  - Frontend Technologies
  - Backend Technologies
  - Tools & Technologies
  - Soft Skills
- Timeline of professional journey
- Statistics showcase (Years, Projects, Satisfaction)
- Hover effects on all interactive elements

### 3. **Projects Page**
- Beautiful project card grid layout
- Project filtering by technology stack
- 6 sample projects with:
  - Gradient colored backgrounds
  - Project descriptions
  - Technology tags
  - GitHub and Live Demo links
- Smooth animations and hover effects

### 4. **Navigation & Footer**
- Sticky navigation bar with logo
- Mobile-responsive hamburger menu
- Complete footer with:
  - Quick links
  - Social media links
  - Copyright information

## 🎨 Design Highlights

### Color Scheme
- **Primary Gradient**: Purple to Blue (#667eea → #764ba2)
- **Secondary Gradient**: Pink to Red (#f093fb → #f5576c)  
- **Tertiary Gradient**: Cyan to Blue (#4facfe → #00f2fe)
- **Dark Background**: #0f172a
- **Accent Colors**: Blue (#3b82f6), Purple (#8b5cf6)

### Animations & Effects
- ✨ Blob animations in background
- 🎯 Smooth scroll behavior
- 🔄 Hover effects on cards and buttons
- 🎬 Framer Motion animations throughout
- 🌊 Gradient text animations
- 📱 Fully responsive design

## 📁 Project Structure

```
my-mern-app/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   └── Projects.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── Navbar.css
│   │   │   ├── Home.css
│   │   │   ├── About.css
│   │   │   ├── Projects.css
│   │   │   └── Footer.css
│   │   ├── App.js (Router setup)
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── public/
│
└── server/
    ├── index.js (Express server with API endpoints)
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. **Install Client Dependencies**
```bash
cd client
npm install
```

2. **Install Server Dependencies**
```bash
cd server
npm install
```

### Running the Application

1. **Start the React Development Server**
```bash
cd client
npm start
```
The app will open at `http://localhost:3000`

2. **Start the Backend Server** (in a new terminal)
```bash
cd server
npm start
```
The server runs on `http://localhost:5000`

## 📦 Dependencies

### Client
- **react**: ^19.2.4
- **react-dom**: ^19.2.4
- **react-router-dom**: Latest (for routing)
- **framer-motion**: Latest (for animations)
- **axios**: Latest (for API calls)
- **react-scripts**: 5.0.1

### Server
- **express**: ^5.2.1
- **cors**: ^2.8.6
- **dotenv**: ^17.4.1
- **mongoose**: ^9.4.1

## 🔌 API Endpoints

### Server Endpoints
- `GET /` - Server status
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get skills data
- `POST /api/contact` - Submit contact form

## 🎯 Key Files Overview

### Components
- **Navbar.js**: Sticky navigation with mobile menu
- **Footer.js**: Complete footer with links and info

### Pages
- **Home.js**: Hero section with animations
- **About.js**: Bio, skills, and timeline
- **Projects.js**: Project grid with filtering

### Styles
- **globals.css**: Global CSS variables and scrollbar
- **Navbar.css**: Navigation styling
- **Home.css**: Hero animations and effects
- **About.css**: Bio and skills cards
- **Projects.css**: Project grid and cards
- **Footer.css**: Footer styling

## 🎨 Customization Guide

### Change Your Name & Info
Edit the following files:
- [Home.js](client/src/pages/Home.js) - Update name, title, bio
- [About.js](client/src/pages/About.js) - Update bio, skills, timeline
- [Projects.js](client/src/pages/Projects.js) - Add your projects
- [Footer.js](client/src/components/Footer.js) - Update year, socials

### Add Social Links
Update social links in:
- [Home.js](client/src/pages/Home.js)
- [Footer.js](client/src/components/Footer.js)

### Modify Colors
Edit CSS variables in [globals.css](client/src/styles/globals.css):
```css
:root {
  --primary-gradient: your-gradient;
  --accent-blue: your-color;
  /* ... other colors */
}
```

### Add Your Projects
Edit `projects` array in [Projects.js](client/src/pages/Projects.js)

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: Hamburger menu, single column layout
- **Tablet**: 2-column grid for projects
- **Desktop**: 3-column grid with animations

## 🔐 Environment Variables

Create `.env` file in server directory:
```
PORT=5000
```

## 📝 Features in Detail

### Animations
- Using Framer Motion for smooth transitions
- Scroll-based animations
- Hover effects on interactive elements
- Background blob animations
- Gradient text animations

### Performance
- Optimized CSS with no unnecessary reflows
- Lazy animations with viewport detection
- Efficient event handling
- Clean component structure

## 🛠️ Future Enhancements

- [ ] Add contact form backend integration
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Add dark/light mode toggle
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Deploy to production

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Made with ❤️ using MERN Stack**
