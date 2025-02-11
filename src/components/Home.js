import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/hacker.css';

const Home = () => {
  const [loadingText, setLoadingText] = useState('');
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [systemReady, setSystemReady] = useState(false);

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
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
          pt: 8,
          position: 'relative'
        }}
      >
        <div className="scan-line"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
