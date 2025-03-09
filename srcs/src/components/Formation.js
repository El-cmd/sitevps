import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolLogo from '../assets/42_Logo.svg';
import '../styles/hacker.css';

const Formation = () => {
  const [loadingText, setLoadingText] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const text = "ACCESSING_EDUCATION_DATABASE...";
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setLoadingText(currentText);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowDetails(true);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const logoAnimation = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      rotate: 180,
      filter: [
        'brightness(1.2) hue-rotate(0deg)',
        'brightness(1.5) hue-rotate(90deg)',
        'brightness(1.2) hue-rotate(180deg)',
        'brightness(1.5) hue-rotate(270deg)',
        'brightness(1.2) hue-rotate(360deg)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <div className="scan-line"></div>
      <Box 
        sx={{ 
          pt: 12, 
          pb: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            className="terminal-text"
            sx={{ 
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              textShadow: '0 0 10px #00ff00'
            }}
          >
            {!showDetails ? (
              <>{loadingText}<span className="cursor-blink">_</span></>
            ) : (
              <>EDUCATION_RECORDS_FOUND<span className="cursor-blink">_</span></>
            )}
          </Typography>
        </motion.div>

        {showDetails && (
          <motion.div
            variants={logoAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <div style={{ position: 'relative' }}>
              <img 
                src={SchoolLogo} 
                alt="École 42 Logo" 
                style={{ 
                  width: '200px',
                  height: '200px',
                  filter: 'brightness(1.2) sepia(100%) hue-rotate(95deg)',
                }} 
              />
              <div 
                className="glitch-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 255, 0, 0.1)',
                  mixBlendMode: 'overlay',
                  animation: 'glitch 2s infinite',
                }}
              />
            </div>
            <Box 
              sx={{ 
                textAlign: 'center',
                p: 4,
                border: '1px solid #00ff00',
                background: 'rgba(0, 255, 0, 0.05)',
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                className="terminal-text glitch"
                sx={{ textShadow: '0 0 10px #00ff00' }}
              >
                ÉCOLE_42
              </Typography>
              <Typography 
                variant="h6" 
                className="terminal-text"
                sx={{ opacity: 0.8 }}
              >
                LOCATION: PARIS
              </Typography>
              <Typography 
                variant="body1" 
                className="terminal-text"
                sx={{ 
                  mt: 2, 
                  maxWidth: '600px',
                  lineHeight: '1.6',
                  letterSpacing: '0.5px'
                }}
              >
                [TRAINING_PROTOCOL]: PEER_LEARNING && PROJECT_BASED_DEVELOPMENT<br />
                [SPECIALIZATION]: SYSTEM_ARCHITECTURE && NETWORK_ENGINEERING<br />
                [STATUS]: MISSION_ACCOMPLISHED
              </Typography>
            </Box>
          </motion.div>
        )}
      </Box>
    </Container>
  );
};

export default Formation;
