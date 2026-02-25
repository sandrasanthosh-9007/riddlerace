// In NavigationBar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <Navbar  
        expand="lg" 
        fixed="top"
        className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
        style={{
          background: scrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          padding: scrolled ? '1rem 0' : '1.5rem 0',
          boxShadow: scrolled ? '0 5px 20px rgba(0, 0, 0, 0.3)' : 'none',
          transition: 'all 0.3s ease',
          width: '100%',
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <Container style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingRight: 'var(--bs-gutter-x, 0.75rem)',
          paddingLeft: 'var(--bs-gutter-x, 0.75rem)',
          marginRight: 'auto',
          marginLeft: 'auto'
        }}>
          <Navbar.Brand 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="brand-logo d-flex align-items-center"
            style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            {/* Logo Image */}
            <img 
              src="./src/assets/logo.png" 
              alt="Riddle Race Logo"
              style={{
                height: scrolled ? '40px' : '50px',
                width: 'auto',
                marginRight: '10px',
                transition: 'height 0.3s ease'
              }}
              onError={(e) => {
                e.target.style.display = 'none'; 
              }}
            />
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            style={{ 
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }} 
          />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ alignItems: 'center' }}>
              <Nav.Link 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  margin: '0 1rem',
                  padding: '0.5rem 0',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffd700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                Home
                <span style={{
                  content: '',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: '2px',
                  background: '#ffd700',
                  transition: 'width 0.3s ease'
                }} className="nav-link-underline" />
              </Nav.Link>
              
              <Nav.Link 
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  margin: '0 1rem',
                  padding: '0.5rem 0',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#e36414';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                Features
                <span style={{
                  content: '',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: '2px',
                  background: '#e36414',
                  transition: 'width 0.3s ease'
                }} className="nav-link-underline" />
              </Nav.Link>
            </Nav>
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(26, 26, 46, 0.98);
            padding: 2rem;
            border-radius: 10px;
            margin-top: 1rem;
            text-align: center;
          }
          
          .navbar-nav {
            align-items: center;
            width: 100%;
          }
          
          .navbar-nav .nav-link {
            text-align: center;
            margin: 0.5rem 0;
            display: inline-block;
          }
          
          .navbar-nav .nav-link:hover .nav-link-underline {
            width: 100%;
          }
          
          .download-btn {
            width: 100%;
            margin: 1rem 0 0 0 !important;
            text-align: center;
          }

          .brand-logo img {
            height: 35px !important;
          }
        }

        /* Hover effect for nav links */
        .nav-link:hover .nav-link-underline {
          width: 80%;
        }

        /* Ensure proper stacking */
        .custom-navbar {
          position: fixed;
          top: 0;
        }

        /* Bootstrap overrides */
        .navbar-toggler:focus {
          box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.25);
        }

        /* Optional animation for logo */
        .brand-logo {
          transition: all 0.3s ease;
        }
        
        .brand-logo:hover {
          transform: scale(1.05);
        }
        
        .brand-logo img {
          transition: transform 0.3s ease;
        }
        
        .brand-logo:hover img {
          transform: rotate(5deg);
        }
      `}</style>
    </>
  );
};

export default NavigationBar;