import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = () => {
  const features = [
    { 
      icon: 'bi-stopwatch', 
      color: '#e36414', 
      title: 'Beat the Clock', 
      desc: 'Milliseconds matter. Race through gates before time runs out.', 
      bgColor: 'rgba(255, 227, 10, 0.1)' 
    },
    { 
      icon: 'bi-sign-turn-slight-right', 
      color: '#ffd700', 
      title: 'Break the Gates', 
      desc: 'Crush knowledge barriers. Each correct answer = speed boost.', 
      bgColor: 'rgba(227, 100, 20, 0.1)' 
    },
    { 
      icon: 'bi-trophy', 
      color: '#fca311', 
      title: 'Win Rewards', 
      desc: 'Earn points, unlock premium avatars and neon cars.', 
      bgColor: 'rgba(255, 227, 10, 0.1)' 
    }
  ];

  return (
    <Container id="features" className="py-5 my-5" data-aos="zoom-in-up" data-aos-duration="900">
      {/* Attractive Section Heading */}
      <Row className="justify-content-center mb-5">
        <Col md={8} lg={6} className="text-center">
          <span 
            className="badge px-4 py-2 mb-3" 
            style={{ 
              background: 'rgba(255, 227, 10, 0.1)',
              border: '1px solid rgba(255, 227, 10, 0.3)',
              borderRadius: '100px',
              color: '#ffd700',
              fontSize: '0.9rem',
              letterSpacing: '2px',
              fontWeight: '500',
              backdropFilter: 'blur(4px)',
              display: 'inline-block'
            }}
          >
            ⚡ GAME FEATURES ⚡
          </span>
          
          <h2 
            className="display-5 fw-bold mb-3"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(255, 227, 10, 0.2)',
            }}
          >
            <span style={{ color: '#ffd700' }}>Power-Up</span>{' '}
            <span style={{ color: '#e36414' }}> Your Race</span>
          </h2>
          
          <p 
            className="mb-0"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1.1rem',
              maxWidth: '500px',
              margin: '0 auto'
            }}
          >
            Discover the tools you need to dominate the track and crush your opponents
          </p>
          
          {/* Decorative line */}
          <div 
            className="mx-auto mt-3"
            style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, #ffd700, #e36414, #fca311)',
              borderRadius: '2px'
            }}
          />
        </Col>
      </Row>

      {/* Features Grid - Centered */}
      <Row className="g-4 justify-content-center">
        {features.map((feature, index) => (
          <Col md={4} key={index} className="d-flex justify-content-center">
            <div 
              className="p-4 rounded-5 h-100" 
              style={{ 
                background: feature.bgColor,
                border: '1px solid rgba(255, 227, 10, 0.3)',
                backdropFilter: 'blur(4px)',
                maxWidth: '350px', 
                width: '100%',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = '#ffd700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 227, 10, 0.3)';
              }}
            >
              <div className="text-center">
                <i className={`bi ${feature.icon} fs-1`} style={{ color: feature.color }}></i>
                <h4 className="fw-bold mt-3" style={{ color: '#ffd700' }}>{feature.title}</h4>
                <p style={{ color: '#fff', opacity: 0.8 }}>{feature.desc}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
