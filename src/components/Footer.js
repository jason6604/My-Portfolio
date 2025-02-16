import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Your Name</h3>
            <p>UX Designer & Developer</p>
            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="home" smooth={true} duration={500}>Home</Link>
              <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
              <Link to="about" smooth={true} duration={500}>About</Link>
              <Link to="skills" smooth={true} duration={500}>Skills</Link>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><i className="fas fa-map-marker-alt"></i> New York, NY 10012</p>
            <p><i className="fas fa-envelope"></i> your.email@example.com</p>
            <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;