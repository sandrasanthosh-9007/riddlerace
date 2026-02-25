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
  FaHome,
  FaQrcode,
  FaGooglePlay,
  FaApple,
  FaTimes
} from "react-icons/fa";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // State for responsive sizing
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // State for download panel
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints
  const isMobile = windowWidth < 576;
  const isTablet = windowWidth >= 576 && windowWidth < 992;

  // Toggle download panel
  const toggleDownload = () => {
    setShowDownload(!showDownload);
  };

  return (
    <section 
      id="home"
      ref={ref}
      className="parallax d-flex align-items-center text-center position-relative overflow-hidden"
      style={{
        paddingTop: isMobile ? "60px" : "100px",
        width: "100%", 
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(circle at 10% 30%, #0a0f1f, #030514)"
      }}
    >
    
      {/* Top Right Download Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: isMobile ? '15px' : '30px',
          right: isMobile ? '15px' : '30px',
          zIndex: 20
        }}
      >
        <Button 
          className="border-0 d-inline-flex align-items-center gap-2"
          style={{
            background: showDownload ? 'rgba(255, 227, 10, 0.2)' : 'rgba(255, 227, 10, 0.1)',
            borderRadius: '50px',
            fontSize: isMobile ? '0.8rem' : isTablet ? '0.9rem' : '0.95rem',
            fontWeight: '500',
            color: showDownload ? '#ffffff' : '#ffd700',
            border: showDownload ? '1px solid #ffd700' : '1px solid rgba(255, 227, 10, 0.3)',
            backdropFilter: 'blur(4px)',
            transition: 'all 0.3s ease',
            padding: isMobile ? '6px 12px' : '8px 16px'
          }}
          onClick={toggleDownload}
          onMouseEnter={(e) => {
            if (!showDownload) {
              e.currentTarget.style.background = 'rgba(255, 227, 10, 0.2)';
              e.currentTarget.style.borderColor = '#ffd700';
            }
          }}
          onMouseLeave={(e) => {
            if (!showDownload) {
              e.currentTarget.style.background = 'rgba(255, 227, 10, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 227, 10, 0.3)';
            }
          }}
        >
          <FaDownload size={isMobile ? 12 : 14} /> 
          <span className={isMobile ? "d-none d-sm-inline" : ""}>
            App Download
          </span>
        </Button>
      </motion.div>

      {/* Download Panel - Appears when button is clicked */}
      <AnimatePresence>
        {showDownload && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: isMobile ? '70px' : '90px',
              right: isMobile ? '10px' : '30px',
              zIndex: 19,
              background: 'rgba(10, 15, 31, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 227, 10, 0.2)',
              padding: isMobile ? '20px' : '25px',
              width: isMobile ? '280px' : '320px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}
          >
        
            
            {/* Download Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Button
                style={{
                  background: 'linear-gradient(135deg, #ffd700 0%, #e36414 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px',
                  color: '#030514',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}
                onClick={() => window.open("#", "_blank")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <FaGooglePlay size={18} /> Google Play
              </Button>

              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 227, 10, 0.3)',
                  borderRadius: '12px',
                  padding: '12px',
                  color: '#ffffff',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}
                onClick={() => window.open("#", "_blank")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 227, 10, 0.1)';
                  e.currentTarget.style.borderColor = '#ffd700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 227, 10, 0.3)';
                }}
              >
                <FaApple size={18} /> App Store
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Animated background elements - Responsive sizes */}
      <motion.div
        className="position-absolute w-100 h-100" 
        style={{ 
          zIndex: 1,
          y: textY
        }}
      >
        <div className="floating-icon position-absolute" style={{ 
          top: isMobile ? '10%' : '15%', 
          left: isMobile ? '2%' : '5%', 
          opacity: 0.1 
        }}>
          <FaCar size={isMobile ? 40 : isTablet ? 60 : 80} color="#ffd700" />
        </div>
        <div className="floating-icon position-absolute" style={{ 
          top: isMobile ? '60%' : '70%', 
          left: isMobile ? '85%' : '90%', 
          opacity: 0.1, 
          animationDelay: '2s' 
        }}>
          <FaRocket size={isMobile ? 45 : isTablet ? 70 : 90} color="#e36414" />
        </div>
        <div className="floating-icon position-absolute" style={{ 
          top: isMobile ? '75%' : '80%', 
          left: isMobile ? '5%' : '10%', 
          opacity: 0.1, 
          animationDelay: '1s' 
        }}>
          <FaBrain size={isMobile ? 35 : isTablet ? 50 : 70} color="#fca311" />
        </div>
        <div className="floating-icon position-absolute" style={{ 
          top: isMobile ? '20%' : '25%', 
          left: isMobile ? '80%' : '85%', 
          opacity: 0.1, 
          animationDelay: '3s' 
        }}>
          <FaTrophy size={isMobile ? 30 : isTablet ? 45 : 60} color="#ffe30a" />
        </div>
        <div className="floating-icon position-absolute" style={{ 
          top: isMobile ? '40%' : '45%', 
          left: isMobile ? '10%' : '15%', 
          opacity: 0.1, 
          animationDelay: '4s' 
        }}>
          <FaClock size={isMobile ? 32 : isTablet ? 50 : 65} color="#ffd700" />
        </div>
      </motion.div>

      {/* Gradient overlay - unchanged */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 227, 10, 0.03) 0%, rgba(227, 100, 20, 0.03) 70%)',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      {/* Content with parallax */}
      <motion.div 
        style={{ 
          y: textY,
          opacity,
          width: '100%',
          position: 'relative',
          zIndex: 3
        }}
      >
        <Container className="position-relative">
          {/* Logo - Responsive and centered */}
          <motion.div 
            className="position-relative mb-3 mb-md-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              marginTop: isMobile ? '-20px' : '-50px'
            }}
          >
            <img 
              src="./src/assets/logo.png" 
              alt="Riddle Race Logo"
              style={{
                maxWidth: isMobile ? '280px' : isTablet ? '400px' : '500px',
                width: '100%',
                height: 'auto',
                margin: '0 auto'
              }}
              className="img-fluid"
            />
          </motion.div>

          {/* Animated Subtitle - Responsive */}
          <motion.div 
            className="mt-3 mt-md-4 mb-3 mb-md-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 
              className="mx-auto"
              style={{
                color: '#ffd700',
                fontSize: isMobile ? '0.65rem' : isTablet ? '0.85rem' : '1rem',
                fontWeight: '400',
                letterSpacing: isMobile ? '2px' : '4px',
                textTransform: 'uppercase',
                border: '1px solid rgba(255, 227, 10, 0.3)',
                display: 'inline-block',
                padding: isMobile ? '8px 16px' : '12px 30px',
                borderRadius: '50px',
                background: 'rgba(10, 15, 31, 0.2)',
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
                maxWidth: isMobile ? '90%' : 'none'
              }}
            >
              {isMobile ? 'Race Knowledge · Beat Clock' : 'Race Your Knowledge · Beat The Clock'}
            </h4>
          </motion.div>

          {/* Value Proposition - Responsive */}
          <motion.p 
            className="mx-auto mb-3 mb-md-4 px-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              color: '#FFFFFF',
              fontSize: isMobile ? '0.9rem' : isTablet ? '1.1rem' : '1.25rem',
              maxWidth: isMobile ? '90%' : '700px',
              lineHeight: isMobile ? '1.5' : '1.8',
              fontWeight: '400',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <span style={{ color: '#ffd700', fontWeight: '600' }}>
              {isMobile ? 'Break gates, answer fast' : 'Break the gates, answer fast, drive through'}
            </span>
            {!isMobile && ' and win amazing rewards in this interactive speed quiz.'}
            {isMobile && <><br/>Win amazing rewards!</>}
          </motion.p>

          {/* Feature Cards - Responsive */}
          <motion.div 
            className="d-flex justify-content-center gap-2 gap-md-3 mb-4 flex-wrap px-2" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: <FaBolt />, text: 'Break Gates', color: '#ffd700' },
              { icon: <FaClock />, text: 'Beat Clock', color: '#e36414' },
              { icon: <FaFlag />, text: 'Level 01', color: '#fca311' }
            ].map((feature, index) => (
              <div
                key={index}
                className="d-flex align-items-center gap-1 gap-md-2"
                style={{
                  background: 'rgba(10, 15, 31, 0.2)',
                  backdropFilter: 'blur(2px)',
                  WebkitBackdropFilter: 'blur(2px)',
                  border: `1px solid ${feature.color}20`,
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                  padding: isMobile ? '6px 12px' : '8px 16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = feature.color;
                  e.currentTarget.style.background = 'rgba(10, 15, 31, 0.3)';
                  e.currentTarget.style.boxShadow = `0 4px 20px ${feature.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${feature.color}20`;
                  e.currentTarget.style.background = 'rgba(10, 15, 31, 0.2)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                }}
              >
                <span style={{ 
                  color: feature.color, 
                  fontSize: isMobile ? '1rem' : '1.2rem' 
                }}>
                  {feature.icon}
                </span>
                <span style={{ 
                  color: '#FFFFFF', 
                  fontSize: isMobile ? '0.75rem' : isTablet ? '0.85rem' : '0.95rem', 
                  fontWeight: '500' 
                }}>
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Bottom decoration - Responsive */}
          <motion.div 
            className="text-center mt-4 mt-md-5" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="d-flex justify-content-center gap-1">
              <span style={{ color: '#ffd700', fontSize: isMobile ? '0.5rem' : '0.7rem' }}>⚡</span>
              <span style={{ color: '#e36414', fontSize: isMobile ? '0.5rem' : '0.7rem' }}>⚡</span>
              <span style={{ color: '#fca311', fontSize: isMobile ? '0.5rem' : '0.7rem' }}>⚡</span>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .floating-icon {
          animation: float 6s ease-in-out infinite;
        }

        /* Mobile optimizations */
        @media (max-width: 576px) {
          .floating-icon {
            animation-duration: 4s;
          }
          
          section {
            min-height: 100vh;
            padding-bottom: 40px;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 577px) and (max-width: 992px) {
          .floating-icon {
            animation-duration: 5s;
          }
        }

        /* Ensure content stays centered */
        .container {
          padding-left: 15px;
          padding-right: 15px;
        }

        /* Smooth transitions */
        * {
          transition: all 0.2s ease;
        }

        /* Prevent text overflow */
        h4, p {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
      `}</style>
    </section>
  );
}