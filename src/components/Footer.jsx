// Footer.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  FaTwitter, 
  FaDiscord, 
  FaInstagram, 
  FaYoutube,
  FaEnvelope,
  FaHeart,
  FaGamepad,
  FaBolt,
  FaTrophy,
  FaRocket,
  FaArrowRight
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    social: [
      { icon: <FaTwitter />, label: 'Twitter', href: '#', color: '#1DA1F2' },
      { icon: <FaInstagram />, label: 'Instagram', href: '#', color: '#E4405F' },
      { icon: <FaYoutube />, label: 'YouTube', href: '#', color: '#FF0000' }
    ]
  };

  const quickStats = [
    { icon: <FaGamepad />, value: '50K+', label: 'Players' },
    { icon: <FaBolt />, value: '1M+', label: 'Races' },
    { icon: <FaTrophy />, value: '100+', label: 'Tournaments' }
  ];

  return (
    <footer className="footer-section">
      {/* Animated Background Elements */}
      <div className="footer-bg-gradient footer-bg-gradient-1" />
      <div className="footer-bg-gradient footer-bg-gradient-2" />

      <Container className="footer-container">
        {/* Main Footer Content */}
        <Row className="g-5 py-5">
          {/* Brand Column */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="pe-lg-5">
              <div className="brand-wrapper">
                <img 
                  src="./public/assets/logo.png"
                  alt="Riddle Race Logo"
                  className="brand-logo"
                />
                <h2 className="brand-title">
                  <span className="text-gold">Riddle</span>{' '}
                  <span className="text-orange">Race</span>
                </h2>
              </div>

              {/* Tagline */}
              <p className="brand-tagline">
                Race your knowledge, beat the clock, and win amazing rewards 
                in the ultimate interactive speed quiz game.
              </p>

              {/* Quick Stats */}
              <div className="stats-wrapper">
                {quickStats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">
                      {stat.icon}
                    </div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Newsletter Column */}
          <Col lg={6}>
            <div className="newsletter-card">
              <h4 className="newsletter-title">Stay in the loop</h4>
              <p className="newsletter-text">
                Get updates on new features and tournaments
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                  aria-label="Email for newsletter"
                />
                <Button className="newsletter-button">
                  Subscribe
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Social Links & Copyright */}
        <Row className="py-4 align-items-center footer-bottom">
          <Col md={6} className="mb-3 mb-md-0">
            <div className="social-links">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  style={{ '--social-color': social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>

          <Col md={6} className="text-md-end">
            <p className="copyright-text">
              © {currentYear} Riddle Race. All rights reserved. Made with{' '}
              <FaHeart className="heart-icon" aria-hidden="true" /> by the Riddle Team
            </p>
          </Col>
        </Row>

        {/* Bottom Decorative Line */}
        <div className="footer-divider" />
      </Container>
    </footer>
  );
};

export default Footer;