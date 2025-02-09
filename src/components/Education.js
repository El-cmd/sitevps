import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactComponent as SchoolLogo } from '../assets/42_Logo.svg';
import '../styles/hacker.css';

const education = [
  {
    id: 'EDU_001',
    period: '2023 - PRESENT',
    program: 'DEVELOPER_TRAINING_PROGRAM',
    institution: 'ÉCOLE_42',
    status: 'IN_PROGRESS',
    modules: [
      'C_PROGRAMMING_MASTERY',
      'CPP_ADVANCED_DEVELOPMENT',
      'SYSTEM_ARCHITECTURE',
      'NETWORK_PROTOCOLS',
      'ALGORITHM_OPTIMIZATION'
    ],
    achievements: [
      'PEER_LEARNING_CERTIFICATION',
      'PROJECT_BASED_METHODOLOGY',
      'SYSTEM_LEVEL_EXPERTISE'
    ],
    logo: SchoolLogo
  }
];

const Education = () => {
  const [loadingText, setLoadingText] = useState('');
  const [currentModule, setCurrentModule] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const text = "ACCESSING_EDUCATION_RECORDS...";
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
          startModuleRotation();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const startModuleRotation = () => {
    setInterval(() => {
      setCurrentModule(prev => 
        (prev + 1) % education[0].modules.length
      );
    }, 2000);
  };

  return (
    <Container>
      <div className="scan-line"></div>
      <Box sx={{ pt: 12, pb: 6 }}>
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
              <>EDUCATION_DATA_RETRIEVED<span className="cursor-blink">_</span></>
            )}
          </Typography>
        </motion.div>

        {showDetails && (
          <div className="education-container">
            {education.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="education-item"
                style={{
                  padding: '2rem',
                  border: '1px solid #00ff00',
                  background: 'rgba(0, 255, 0, 0.05)',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div 
                  className="logo-container"
                  style={{
                    position: 'relative',
                    marginBottom: '2rem',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <item.logo 
                      width="150" 
                      height="150" 
                      style={{
                        filter: 'brightness(1.2) sepia(100%) hue-rotate(95deg)',
                      }}
                    />
                  </motion.div>
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
                      animation: 'glitch 2s infinite'
                    }}
                  />
                </div>

                <div className="education-details">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Typography 
                      className="terminal-text" 
                      variant="h4" 
                      sx={{ 
                        mb: 2,
                        textAlign: 'center',
                        textShadow: '0 0 10px #00ff00'
                      }}
                    >
                      [{item.program}]
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography 
                        className="terminal-text"
                        sx={{ mb: 1 }}
                      >
                        > INSTITUTION: {item.institution}
                      </Typography>
                      <Typography 
                        className="terminal-text"
                        sx={{ mb: 1 }}
                      >
                        > TIMELINE: {item.period}
                      </Typography>
                      <Typography 
                        className="terminal-text"
                        sx={{ mb: 1 }}
                      >
                        > STATUS: <span className="glitch">{item.status}</span>
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography 
                        className="terminal-text"
                        sx={{ mb: 2 }}
                      >
                        > ACTIVE_MODULE: {item.modules[currentModule]}
                      </Typography>
                      <div 
                        style={{
                          height: '4px',
                          background: 'rgba(0, 255, 0, 0.1)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <motion.div
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{
                            width: '50%',
                            height: '100%',
                            background: '#00ff00',
                            boxShadow: '0 0 10px #00ff00',
                          }}
                        />
                      </div>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography 
                        className="terminal-text"
                        sx={{ mb: 2 }}
                      >
                        > ACHIEVEMENTS:
                      </Typography>
                      {item.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <Typography 
                            className="terminal-text"
                            sx={{ 
                              ml: 2, 
                              mb: 1,
                              opacity: 0.8
                            }}
                          >
                            - {achievement}
                          </Typography>
                        </motion.div>
                      ))}
                    </Box>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Box>

      <style jsx>{`
        .education-container {
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 600px) {
          .education-container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </Container>
  );
};

export default Education;
