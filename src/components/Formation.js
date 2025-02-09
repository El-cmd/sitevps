import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolLogo from '../assets/42_Logo.svg';

const Formation = () => {
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
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Container maxWidth="lg">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Formation
          </Typography>
        </motion.div>

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
          <img 
            src={SchoolLogo} 
            alt="École 42 Logo" 
            style={{ 
              width: '200px',
              height: '200px',
              filter: 'invert(1)'  // Pour rendre le logo blanc
            }} 
          />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              École 42
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Paris
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, maxWidth: '600px' }}>
              Formation en développement informatique basée sur l'apprentissage par projets et le peer-learning.
              Spécialisation en développement système et réseau.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Formation;
