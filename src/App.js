import React from 'react';
import { Code, User, Mail, ExternalLink, Code2, Server, Terminal, Briefcase } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className="navbar glass-effect">
        <div className="nav-content">
          <div className="logo">Portfolio.</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content animate-slide-up">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Avinash Sharma</span>
          </h1>
          <p className="hero-subtitle">
            Software Developer | Cloud Enthusiast | Problem Solver
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text glass-card">
            <p>
              I am a passionate software developer with expertise in building scalable applications and cloud integrations.
              I specialize in Python, React, and AWS services, always eager to tackle complex challenges and optimize workflows.
            </p>
            <div className="skills-container">
              <span className="skill-tag"><Code2 size={16} /> React & JavaScript</span>
              <span className="skill-tag"><Terminal size={16} /> Python</span>
              <span className="skill-tag"><Server size={16} /> AWS & Serverless</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">

          <div className="project-card glass-card hover-lift">
            <div className="project-icon"><Briefcase size={32} color="var(--primary)" /></div>
            <h3>Dummy Project 1</h3>
            <p>This is a placeholder for a dummy project. It demonstrates the layout of a project card.</p>
            <div className="project-links">
              <a href="#" className="icon-link"><Code size={20} /> Code</a>
              <a href="#" className="icon-link"><ExternalLink size={20} /> Live</a>
            </div>
          </div>

          <div className="project-card glass-card hover-lift">
            <div className="project-icon"><Briefcase size={32} color="var(--primary)" /></div>
            <h3>Dummy Project 2</h3>
            <p>Another placeholder description for a second dummy project, showing how multiple cards align.</p>
            <div className="project-links">
              <a href="#" className="icon-link"><Code size={20} /> Code</a>
            </div>
          </div>



        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-card glass-card">
          <p>I'm currently open to new opportunities and collaborations. Feel free to reach out!</p>
          <div className="social-links">
            <a href="mailto:your.email@example.com" className="social-link">
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a href="https://github.com/avinash-sharma-121" target="_blank" rel="noreferrer" className="social-link">
              <Code size={24} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/avinash-sharma-121" target="_blank" rel="noreferrer" className="social-link">
              <User size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Avinash. Built with React & deployed via GitHub Actions.</p>
      </footer>
    </div>
  );
}

export default App;
