// HeroSection.jsx
import { Container, Button } from "react-bootstrap";
import { 
  FaBolt, 
  FaFlag, 
  FaClock, 
  FaTrophy,
  FaRocket,
  FaBrain,
  FaDownload,
  FaCar,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import './Hero.css'; // Make sure this import is present

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [showDownload, setShowDownload] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  // Debounced resize handler
  useEffect(() => {
    let timeoutId;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showDownload) {
        setShowDownload(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        setShowDownload(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showDownload]);

  const isMobile = windowWidth < 576;
  const isTablet = windowWidth >= 576 && windowWidth < 992;

  const toggleDownload = useCallback(() => {
    setShowDownload(prev => !prev);
  }, []);

  const handleDownload = useCallback((platform) => {
    console.log(`Download clicked for ${platform}`);
    window.open("#", "_blank");
  }, []);

  const features = [
    { icon: <FaBolt />, text: 'Break Gates', color: 'var(--primary);' },
    { icon: <FaClock />, text: 'Beat Clock', color: '#e36414' },
    { icon: <FaFlag />, text: 'Level 01', color: '#fca311' }
  ];

  const floatingIcons = [
    { Icon: FaCar, top: '15%', left: '5%', delay: 0, color: 'var(--primary);' },
    { Icon: FaRocket, top: '70%', left: '90%', delay: 2, color: '#e36414' },
    { Icon: FaBrain, top: '80%', left: '10%', delay: 1, color: '#fca311' },
    { Icon: FaTrophy, top: '25%', left: '85%', delay: 3, color: '#ffe30a' },
    { Icon: FaClock, top: '45%', left: '15%', delay: 4, color: 'var(--primary);' }
  ];

  return (
    <section id="home" ref={ref} className="hero-section">
      {/* Top Right Download Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`download-button-wrapper ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}
      >
        <Button 
          className={`download-trigger ${showDownload ? 'active' : ''}`}
          onClick={toggleDownload}
          aria-expanded={showDownload}
          aria-label="App Download (Ctrl/Cmd + D)"
          title="Download App (Ctrl/Cmd + D)"
        >
          <FaDownload className="download-icon" /> 
          <span className={isMobile ? "d-none d-sm-inline" : ""}>
            App Download
          </span>
        </Button>
      </motion.div>

      {/* Download Panel */}
      <AnimatePresence>
        {showDownload && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`download-panel ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}
          >
            <div className="download-buttons">
              <Button
                className="download-btn google-play"
                onClick={() => handleDownload('google')}
                aria-label="Download from Google Play"
              >
                <FaGooglePlay className="btn-icon" /> Google Play
              </Button>

              <Button
                className="download-btn app-store"
                onClick={() => handleDownload('apple')}
                aria-label="Download from App Store"
              >
                <FaApple className="btn-icon" /> App Store
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Animated background elements */}
      <motion.div className="floating-icons-wrapper" style={{ y: textY }}>
        {floatingIcons.map((item, index) => {
          const IconComponent = item.Icon;
          return (
            <div 
              key={index}
              className="floating-icon"
              style={{ 
                top: item.top, 
                left: item.left,
                animationDelay: `${item.delay}s`,
                '--icon-color': item.color
              } }
            >
              <IconComponent />
            </div>
          );
        })}
      </motion.div>

      {/* Gradient overlay */}
      <div className="hero-gradient-overlay" />

      {/* Content with parallax */}
      <motion.div 
        className="hero-content"
        style={{ y: textY, opacity }}
      >
        <Container>
          {/* Logo */}
          <motion.div 
            className="logo-wrapper"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="./public/assets/logo.png" 
              alt="Riddle Race Logo"
              className={`hero-logo ${logoLoaded ? 'loaded' : 'loading'}`}
              onLoad={() => setLogoLoaded(true)}
              loading="eager"
            />
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div 
            className="subtitle-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="hero-subtitle">
              {isMobile ? 'Race Knowledge · Beat Clock' : 'Race Your Knowledge · Beat The Clock'}
            </h4>
          </motion.div>

          {/* Value Proposition */}
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="highlight-text">
              {isMobile ? 'Break gates, answer fast' : 'Break the gates, answer fast, drive through'}
            </span>
            {!isMobile && ' and win amazing rewards in this interactive speed quiz.'}
            {isMobile && <><br />Win amazing rewards!</>}
          </motion.p>

          {/* Feature Cards */}
          <motion.div 
            className="feature-cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ '--feature-color': feature.color,   width: '175px'} }
              >
                <span className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </span>
                <span className="feature-text">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>

        
        </Container>


      </motion.div>
    </section>
  );
}