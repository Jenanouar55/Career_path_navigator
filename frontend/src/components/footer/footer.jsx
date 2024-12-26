import React from 'react';
import logo from '../../assets/images/c-logo.png';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Top Section: Logo, About, and Services */}
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>

        {/* Services Section */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Career Exploration tool</a></li>
            <li><a href="#">Education and Training Ressources</a></li>
            <li><a href="#">Career Pivot Tools</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="AboutUspage.jsx#t-section">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="footer-icons">
        <h4>Follow Us</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

      {/* Back to Top Section */}
      <div className="back-to-top">
        <a href="#nav">Back to Top</a>
      </div>
    </footer>
  );
};

export default Footer;
