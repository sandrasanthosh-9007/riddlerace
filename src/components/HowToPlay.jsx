// HowToPlay.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaSignInAlt, 
  FaTachometerAlt, 
  FaQuestionCircle, 
  FaFlag, 
  FaBolt, 
  FaTrophy,
  FaArrowRight,
  FaClock,
  FaBrain,
  FaRocket,
  FaGamepad,
  FaStar,
  FaMedal,
  FaUsers
} from 'react-icons/fa';

import './HowToPlay.css'; 
import FeatureCards from './FeatureCards';

const HowToPlay = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FaGamepad />,
      title: "Create Profile",
      description: "Sign up and customize your neon racer with unique colors and accessories",
      details: ["Choose your avatar", "Pick a team color", "Select starting boost"],
      color: "var(--primary)"
    },
    {
      icon: <FaFlag />,
      title: "Start Racing",
      description: "Join live races against players worldwide in real-time",
      details: ["Quick match or tournaments", "Practice mode available", "Track selection"],
      color: "#e36414" 
    },
    {
      icon: <FaQuestionCircle />,
      title: "Answer Gates",
      description: "Each checkpoint presents a challenge - answer to proceed",
      details: ["Multiple choice questions", "Timed responses", "Increasing difficulty"],
      color: "var(--amber)"
    },
    {
      icon: <FaBolt />,
      title: "Boost Ahead",
      description: "Fast answers give you speed boosts and special powers",
      details: ["Nitro acceleration", "Shield protection", "Question skip option"],
      color: "#ffe30a" 
    },
    {
      icon: <FaTrophy />,
      title: "Win Prizes",
      description: "Earn rewards, unlock new cars, and climb the leaderboards",
      details: ["Daily challenges", "Season rewards", "Exclusive items"],
      color: "var(--primary)"
    }
  ];

  const features = [
    {
      icon: <FaClock />,
      title: "Time Attack Mode",
      desc: "Race against the clock for high scores",
      stats: "60 sec rounds",
      color: "var(--primary)"
    },
    {
      icon: <FaBrain />,
      title: "Knowledge Test",
      desc: "Questions from various categories",
      stats: "5000+ questions",
      color: "#e36414"
    },
    {
      icon: <FaRocket />,
      title: "Speed Multiplier",
      desc: "Chain answers for bonus speed",
      stats: "Up to 5x boost",
      color: "var(--amber)"
    }
  ];

  return (
    <section className="how-to-play-section py-5">
      <Container fluid className="px-4 px-lg-5">
       
        {/* Interactive Steps with Progress */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="section-title">
              How It <span>Works</span>
            </h2>
          </Col>
          
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="journey-panel">
              <h4 className="journey-title">Journey Steps</h4>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-item ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                  style={{ 
                    borderLeft: activeStep === index ? `4px solid ${step.color}` : '4px solid transparent'
                  }}
                >
                  <div 
                    className="step-icon-wrapper"
                    style={{ 
                      background: step.color + '20',
                      color: step.color,
                    }}
                  >
                    {React.cloneElement(step.icon, { size: 24 })}
                  </div>
                  <div>
                    <h6 className="step-title">{step.title}</h6>
                    <p className="step-preview">{step.description.substring(0, 40)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          
          <Col lg={8}>
            <div className="active-step-panel">
              <div className="active-step-header">
                <div 
                  className="active-step-icon"
                  style={{ 
                    background: steps[activeStep].color + '20',
                    color: steps[activeStep].color
                  }}
                >
                  {React.cloneElement(steps[activeStep].icon, { size: 32 })}
                </div>
                <div>
                  <h3 className="active-step-title" style={{ color: steps[activeStep].color }}>
                    {steps[activeStep].title}
                  </h3>
                  <p className="active-step-description">{steps[activeStep].description}</p>
                </div>
              </div>
              
              <Row className="g-3">
                {steps[activeStep].details.map((detail, idx) => (
                  <Col md={4} key={idx}>
                    <div 
                      className="detail-card"
                      style={{ background: steps[activeStep].color + '10' }}
                    >
                      <FaStar className="detail-icon" style={{ color: steps[activeStep].color }} />
                      <p className="detail-text">{detail}</p>
                    </div>
                  </Col>
                ))}
              </Row>

              <div className="progress-container">
                <div className="progress-header">
                  <span className="progress-label">Progress</span>
                  <span className="progress-count">{activeStep + 1}/{steps.length}</span>
                </div>
                <div className="progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Quick Start Guide & Stats */}
              <div className="mt-4">
                <Row className="g-3">
                  <Col xs={6}>
                    <div className="quick-stat-card">
                      <FaMedal className="stat-icon" style={{ color: 'var(--primary)' }} />
                      <h6 className="stat-title">Quick Match</h6>
                      <p className="stat-value">Join in 5 seconds</p>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="quick-stat-card" style={{ background: 'rgba(227, 100, 20, 0.05)' }}>
                      <FaUsers className="stat-icon" style={{ color: '#e36414' }} />
                      <h6 className="stat-title">Online Players</h6>
                      <p className="stat-value">1,234 racing now</p>
                    </div>
                  </Col>
                </Row>

                <div className="pro-tips">
                  <h6 className="pro-tips-title">Pro Tips</h6>
                  <div className="tip-item">
                    <FaBolt className="tip-icon" />
                    <p className="tip-text">Answer in under 3s for double boost</p>
                  </div>
                  <div className="tip-item">
                    <FaStar className="tip-icon" style={{ color: 'var(--primary)' }} />
                    <p className="tip-text">5 correct answers = shield activation</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <FeatureCards />
        
      </Container>
    </section>
  );
};

export default HowToPlay;