import React, { useState, useEffect } from 'react';
import '../style.css'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Navbar style change after scrolling about 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll spy logic to determine which section is currently active
      const sections = document.querySelectorAll('section, footer');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      if (current) {
        setActiveLink(current);
      }
    };

    // Add scroll event listener properly to avoid memory leaks
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially on component mount

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-text">Nexus</span><span className="logo-dot">.</span>
        </a>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#features" className={`nav-link ${activeLink === 'features' ? 'active' : ''}`} onClick={closeMobileMenu}>Features</a></li>
          <li><a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</a></li>
          <li><a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</a></li>
        </ul>
        <a href="#contact" className="btn-primary nav-btn">Get Started</a>
        
        {/* Hamburger menu for mobile devices */}
        <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
