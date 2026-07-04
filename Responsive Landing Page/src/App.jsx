import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Experience the <span className="highlight">Future</span> of Web Design</h1>
          <p className="hero-subtitle">We build premium, interactive, and fully responsive web experiences that captivate your audience.</p>
          <div className="hero-buttons">
            <a href="#features" className="btn-primary">Explore Features</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-orb"></div>
          <div className="glass-card">
            <div className="card-header">
              <div className="circle red"></div>
              <div className="circle yellow"></div>
              <div className="circle green"></div>
            </div>
            <div className="card-body">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-desc">Everything you need to create stunning interfaces.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Premium Aesthetics</h3>
            <p>Beautiful color palettes and modern typography to make you stand out.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Optimized for speed and seamless user interactions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>Looks amazing on any device, from mobile to desktop.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-text">
            <h2 className="section-title">Why Choose Us?</h2>
            <p>We blend art and technology to deliver experiences that are both beautiful and highly functional. Scroll up and down to see our interactive navigation menu adapt to its environment seamlessly.</p>
            <ul className="about-list">
              <li>Dynamic scroll effects</li>
              <li>Glassmorphism designs</li>
              <li>Micro-interactions</li>
            </ul>
          </div>
          <div className="about-visual">
            <div className="abstract-shape"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-text">Nexus</span><span className="logo-dot">.</span>
            </a>
            <p>Building the web of tomorrow.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Nexus. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
