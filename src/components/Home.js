import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/hacker.css';
import moiImage from '../assets/moi.jpeg';

const Home = () => {
  const [loadingText, setLoadingText] = useState('');
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [systemReady, setSystemReady] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const loadSequence = async () => {
      // Simulation du chargement du système
      const text = "INITIALIZING_SYSTEM...";
      for (let i = 0; i <= text.length; i++) {
        setLoadingText(text.slice(0, i));
        await new Promise(r => setTimeout(r, 100));
      }
      await new Promise(r => setTimeout(r, 1000));
      
      // Animation du nom
      const name = "VALENTIN_LOTH";
      for (let i = 0; i <= name.length; i++) {
        setNameText(name.slice(0, i));
        await new Promise(r => setTimeout(r, 100));
      }
      await new Promise(r => setTimeout(r, 500));

      // Animation du titre
      const title = "JUNIOR_DEVELOPER";
      for (let i = 0; i <= title.length; i++) {
        setTitleText(title.slice(0, i));
        await new Promise(r => setTimeout(r, 100));
      }
      
      setSystemReady(true);
    };

    loadSequence();
  }, []);

  return (
    <Container sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      mt: { xs: -8, sm: -10, md: -12 } 
    }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
          py: { xs: 4, md: 6 },
          position: 'relative'
        }}
      >
        <div className="scan-line"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: '100%' }}
        >
          <Typography 
            className="terminal-text"
            sx={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              opacity: systemReady ? 0 : 1
            }}
          >
            {loadingText}<span className="cursor-blink">_</span>
          </Typography>

          {systemReady && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '200px', sm: '250px', md: '300px' },
                  height: { xs: '200px', sm: '250px', md: '300px' },
                  margin: '0 auto 2rem auto',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-3px',
                    left: '-3px',
                    right: '-3px',
                    bottom: '-3px',
                    border: '2px solid #00ff00',
                    animation: 'glitch 2s infinite',
                    zIndex: 1
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'linear-gradient(45deg, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0) 100%)',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }
                }}
              >
                <motion.img
                  src={moiImage}
                  alt="Valentin Loth"
                  onLoad={() => setImageLoaded(true)}
                  initial={{ filter: 'grayscale(100%) brightness(0.8)' }}
                  animate={{
                    filter: imageLoaded ? [
                      'grayscale(100%) brightness(0.8)',
                      'grayscale(0%) brightness(1)',
                      'grayscale(100%) brightness(0.8)'
                    ] : 'grayscale(100%) brightness(0.8)'
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
                  }}
                />
              </Box>
            </motion.div>
          )}

          <Typography 
            variant="h1" 
            className="terminal-text glitch"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              marginBottom: '1rem',
              textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00'
            }}
          >
            {nameText}<span className="cursor-blink">_</span>
          </Typography>

          <Typography 
            variant="h2"
            className="terminal-text"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              marginBottom: '2rem'
            }}
          >
            {titleText}<span className="cursor-blink">_</span>
          </Typography>

          {systemReady && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Typography 
                  className="terminal-text"
                  sx={{ marginBottom: '2rem' }}
                >
                  STATUS: ONLINE<br />
                  LOCATION: FRANCE, PARIS<br />
                  MISSION: "Trouver un stage"
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Button
                    component={Link}
                    to="/projets"
                    className="terminal-text"
                    sx={{
                      border: '1px solid #00ff00',
                      color: '#00ff00',
                      padding: '10px 20px',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                        boxShadow: '0 0 10px #00ff00',
                      }
                    }}
                  >
                    VOIR_PROJETS
                  </Button>
                  <Button
                    component={Link}
                    to="/contact"
                    className="terminal-text"
                    sx={{
                      border: '1px solid #00ff00',
                      color: '#00ff00',
                      padding: '10px 20px',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                        boxShadow: '0 0 10px #00ff00',
                      }
                    }}
                  >
                    ÉTABLIR_CONNEXION
                  </Button>
                </Box>
              </motion.div>
            </>
          )}
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
