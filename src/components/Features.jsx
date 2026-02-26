import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Features.css';

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
    <Container id="features" className="py-5 my-5 features-container" data-aos="zoom-in-up" data-aos-duration="900">
 
      <Row className="justify-content-center mb-5">
        <Col md={8} lg={6} className="text-center">
          <span className="feature-badge">
            ⚡ GAME FEATURES ⚡
          </span>
          
          <h2 className="feature-heading">
            <span className="gold-text">Power-Up</span>{' '}
            <span className="orange-text">Your Race</span>
          </h2>
          
          <p className="feature-subheading">
            Discover the tools you need to dominate the track and crush your opponents
          </p>
          
          {/* Decorative line */}
          <div className="decorative-line" />
        </Col>
      </Row>

      {/* Features Grid - Centered */}
      <Row className="g-4 justify-content-center">
        {features.map((feature, index) => (
          <Col md={4} key={index} className="d-flex justify-content-center">
            <div 
              className="feature-card p-4 rounded-5 h-100" 
              style={{ 
                background: feature.bgColor,
              }}
            >
              <div className="text-center">
                <i className={`bi ${feature.icon} feature-icon`} style={{ color: feature.color }}></i>
                <h4 className="feature-title fw-bold mt-3">{feature.title}</h4>
                <p className="feature-description">{feature.desc}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;