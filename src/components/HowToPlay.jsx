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

const HowToPlay = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FaGamepad />,
      title: "Create Profile",
      description: "Sign up and customize your neon racer with unique colors and accessories",
      details: ["Choose your avatar", "Pick a team color", "Select starting boost"],
      color: "#ffd700"
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
      color: "#fca311"
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
      color: "#ffd700"
    }
  ];

  const features = [
    {
      icon: <FaClock />,
      title: "Time Attack Mode",
      desc: "Race against the clock for high scores",
      stats: "60 sec rounds",
      color: "#ffd700"
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
      color: "#fca311"
    }
  ];

  return (
    <section className="how-to-play-section py-5" style={{ background: '#030514' }}>
      <Container fluid className="px-4 px-lg-5">
       
        {/* Interactive Steps with Progress */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="text-center h1 fw-bold mb-5" style={{ color: '#FFFFFF' }}>
              How It <span style={{ color: '#ffd700' }}>Works</span>
            </h2>
          </Col>
          
          <Col lg={4} className="mb-4 mb-lg-0">
            <div 
              className="p-4 rounded-4 h-100" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 227, 10, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h4 className="mb-4" style={{ color: '#ffd700' }}>Journey Steps</h4>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`d-flex align-items-center gap-3 p-3 mb-2 rounded-3 cursor-pointer transition-all ${
                    activeStep === index ? 'shadow-sm' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                  style={{ 
                    cursor: 'pointer',
                    background: activeStep === index ? 'rgba(255, 227, 10, 0.05)' : 'transparent',
                    borderLeft: activeStep === index ? `4px solid ${step.color}` : '4px solid transparent'
                  }}
                >
                  <div 
                    className="rounded-circle p-3 d-flex align-items-center justify-content-center"
                    style={{ 
                      background: step.color + '20',
                      color: step.color,
                      width: '50px',
                      height: '50px'
                    }}
                  >
                    {React.cloneElement(step.icon, { size: 24 })}
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#FFFFFF' }}>{step.title}</h6>
                    <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{step.description.substring(0, 40)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          
          <Col lg={8}>
            <div 
              className="rounded-4 p-4 h-100" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 227, 10, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-4">
                <div 
                  className="rounded-circle p-3"
                  style={{ 
                    background: steps[activeStep].color + '20',
                    color: steps[activeStep].color
                  }}
                >
                  {React.cloneElement(steps[activeStep].icon, { size: 32 })}
                </div>
                <div>
                  <h3 className="h3 fw-bold mb-1" style={{ color: steps[activeStep].color }}>
                    {steps[activeStep].title}
                  </h3>
                  <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{steps[activeStep].description}</p>
                </div>
              </div>
              
              <Row className="g-3">
                {steps[activeStep].details.map((detail, idx) => (
                  <Col md={4} key={idx}>
                    <div 
                      className="p-3 rounded-3 text-center"
                      style={{ background: steps[activeStep].color + '10' }}
                    >
                      <FaStar className="mb-2" style={{ color: steps[activeStep].color }} />
                      <p className="small fw-bold mb-0" style={{ color: '#FFFFFF' }}>{detail}</p>
                    </div>
                  </Col>
                ))}
              </Row>

              <div className="mt-4 p-3 rounded-3" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small fw-bold" style={{ color: '#ffd700' }}>Progress</span>
                  <span className="small" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{activeStep + 1}/{steps.length}</span>
                </div>
                <div className="progress" style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)' }}>
                  <div 
                    className="progress-bar" 
                    style={{ 
                      width: `${((activeStep + 1) / steps.length) * 100}%`,
                      background: 'linear-gradient(90deg, #ffd700, #e36414, #fca311)'
                    }}
                  />
                </div>
              </div>

              {/* Quick Start Guide & Stats */}
              <div className="mt-4">
                <Row className="g-3">
                  <Col xs={6}>
                    <div 
                      className="p-3 rounded-3 text-center"
                      style={{ background: 'rgba(255, 215, 0, 0.05)' }}
                    >
                      <FaMedal className="mb-2" style={{ color: '#ffd700' }} />
                      <h6 className="fw-bold mb-1" style={{ color: '#FFFFFF' }}>Quick Match</h6>
                      <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Join in 5 seconds</p>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div 
                      className="p-3 rounded-3 text-center"
                      style={{ background: 'rgba(227, 100, 20, 0.05)' }}
                    >
                      <FaUsers className="mb-2" style={{ color: '#e36414' }} />
                      <h6 className="fw-bold mb-1" style={{ color: '#FFFFFF' }}>Online Players</h6>
                      <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>1,234 racing now</p>
                    </div>
                  </Col>
                </Row>

                <div className="mt-3 p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <h6 className="fw-bold mb-2" style={{ color: '#ffd700' }}>Pro Tips</h6>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <FaBolt size={12} style={{ color: '#fca311' }} />
                    <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Answer in under 3s for double boost</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaStar size={12} style={{ color: '#ffd700' }} />
                    <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>5 correct answers = shield activation</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Feature Cards */}
        <Row className="g-4 mb-5">
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <div 
                className="rounded-4 p-4 h-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 227, 10, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  borderBottom: '4px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderBottomColor = feature.color;
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = `0 15px 35px ${feature.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div 
                    className="rounded-circle p-3"
                    style={{ 
                      background: `linear-gradient(135deg, ${feature.color} 0%, ${index === 1 ? '#fca311' : index === 2 ? '#e36414' : '#ffd700'} 100%)`,
                      color: '#fff'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="h5 fw-bold mb-0" style={{ color: '#FFFFFF' }}>{feature.title}</h4>
                </div>
                <p className="mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{feature.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span 
                    className="badge p-2" 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: feature.color,
                      border: `1px solid ${feature.color}40`
                    }}
                  >
                    {feature.stats}
                  </span>
                 
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .cursor-pointer {
          cursor: pointer;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .progress {
          border-radius: 10px;
          overflow: hidden;
        }
        .progress-bar {
          transition: width 0.3s ease;
        }
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HowToPlay;