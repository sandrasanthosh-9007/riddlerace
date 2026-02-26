import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { 
  FaClock,
  FaBrain,
  FaRocket
} from 'react-icons/fa';
import './FeatureCards.css';

const FeatureCards = () => {
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

  const SingleFeatureCard = ({ feature, index }) => {
    // Determine the second gradient color based on index
    const getGradientColor = () => {
      if (index === 1) return '#fca311';
      if (index === 2) return '#e36414';
      return '#ffd700';
    };

    // Create a unique class name for this card based on its color
    const cardClass = `feature-card color-${feature.color.substring(1)}`;

    return (
      <Col md={4}>
        <div className={cardClass}>
          <div className="feature-card-inner">
            <div className="feature-icon-wrapper">
              <div 
                className="feature-icon"
                style={{ 
                  background: `linear-gradient(135deg, ${feature.color} 0%, ${getGradientColor()} 100%)`
                }}
              >
                {feature.icon}
              </div>
            </div>
            <div className="feature-content">
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.desc}</p>
            </div>
            <div className="feature-footer">
              <span className="feature-badge">
                {feature.stats}
              </span>
            </div>
          </div>
        </div>
      </Col>
    );
  };

  return (
    <Row className="g-4 mb-5">
      {features.map((feature, index) => (
        <SingleFeatureCard key={index} feature={feature} index={index} />
      ))}
    </Row>
  );
};

export default FeatureCards;