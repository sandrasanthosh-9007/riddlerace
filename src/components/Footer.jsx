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
    <footer 
      className="footer-section position-relative overflow-hidden"
      style={{
        background: '#030514',
        borderTop: '1px solid rgba(255, 227, 10, 0.1)',
        marginTop: 'auto'
      }}
    >
      {/* Animated Background Elements */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'radial-gradient(circle at 0% 100%, rgba(255, 227, 10, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      <div 
        className="position-absolute top-0 end-0 w-100 h-100"
        style={{
          background: 'radial-gradient(circle at 100% 0%, rgba(227, 100, 20, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <Container className="position-relative" style={{ zIndex: 1 }}>
        {/* Main Footer Content */}
        <Row className="g-5 py-5">
          {/* Brand Column - Now taking full width on mobile, half on desktop */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="pe-lg-5">
              <div className="d-flex align-items-center mb-3">
                <img 
                  src="./src/assets/logo.png"
                  alt="Riddle Race Logo"
                  className="me-3"
                  style={{
                    height: '60px',
                    width: 'auto',
                    filter: 'drop-shadow(0 0 20px rgba(255, 227, 10, 0.3))'
                  }}
                />
                <h2 
                  className="h2 fw-bold mb-0"
                  style={{
                    color: '#FFFFFF',
                    textShadow: '0 0 20px rgba(255, 227, 10, 0.2)',
                    letterSpacing: '-1px'
                  }}
                >
                  <span style={{ color: '#ffd700' }}>Riddle</span>{' '}
                  <span style={{ color: '#e36414' }}>Race</span>
                </h2>
              </div>

              {/* Tagline */}
              <p className="text-white-50 mb-4" style={{ lineHeight: '1.8', maxWidth: '500px' }}>
                Race your knowledge, beat the clock, and win amazing rewards 
                in the ultimate interactive speed quiz game.
              </p>

              {/* Quick Stats */}
              <div className="d-flex gap-4 mb-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div style={{ color: '#ffd700', fontSize: '1.5rem' }}>
                      {stat.icon}
                    </div>
                    <div className="fw-bold text-white mt-1">{stat.value}</div>
                    <div className="small text-white-50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Newsletter Column */}
          <Col lg={6}>
            <div 
              className="p-4 rounded-4 h-100 d-flex flex-column justify-content-center"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 227, 10, 0.1)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <h4 className="text-white mb-3">Stay in the loop</h4>
              <p className="text-white-50 mb-4">
                Get updates on new features and tournaments
              </p>
              <div className="d-flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="form-control bg-transparent text-white"
                  style={{
                    border: '1px solid rgba(255, 227, 10, 0.2)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    padding: '0.75rem'
                  }}
                />
                <Button
                  className="border-0"
                  style={{
                    background: '#ffd700',
                    color: '#000',
                    borderRadius: '8px',
                    padding: '0.75rem 1.5rem',
                    fontWeight: '600'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#e36414';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffd700';
                    e.currentTarget.style.color = '#000';
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Social Links & Copyright */}
        <Row className="py-4 align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <div className="d-flex gap-3">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 227, 10, 0.1)',
                    color: social.color,
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color;
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 5px 15px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>

          <Col md={6} className="text-md-end">
            <p className="mb-0 text-white-50 small">
              © {currentYear} Riddle Race. All rights reserved. Made with{' '}
              <FaHeart size={12} color="#ffd700" className="mx-1" /> by the Riddle Team
            </p>
          </Col>
        </Row>

        {/* Bottom Decorative Line */}
        <div 
          className="mx-auto"
          style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #ffd700, #e36414, #fca311, transparent)',
            marginTop: '1rem'
          }}
        />
      </Container>

      <style jsx>{`
        .footer-section {
          position: relative;
          width: 100%;
        }

        .form-control:focus {
          border-color: #ffd700;
          box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.25);
          outline: none;
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Logo hover effect */
        img {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        img:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 25px rgba(255, 227, 10, 0.5));
        }

        @media (max-width: 768px) {
          .text-md-end {
            text-align: center !important;
            margin-top: 1rem;
          }
          
          .d-flex.gap-3 {
            justify-content: center;
          }

          .d-flex.align-items-center {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;