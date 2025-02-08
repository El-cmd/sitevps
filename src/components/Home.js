import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const Home = () => {
  return (
    <Container>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
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
          }}
        >
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #5C6BC0, #26A69A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Valentin Loth
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeInUp}
          >
            <Typography variant="h1" component="h1" gutterBottom>
              Développeur Junior
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeInUp}
          >
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{ maxWidth: 600 }}
            >
              Passionné par le développement web et les nouvelles technologies
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeInUp}
          >
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ maxWidth: 600 }}
            >
              Fraîchement diplômé et à la recherche de nouveaux défis passionnants.
              Je combine créativité et expertise technique pour créer des expériences web innovantes.
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeInUp}
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to="/projets"
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    background: 'linear-gradient(45deg, #5C6BC0 30%, #26A69A 90%)',
                    boxShadow: '0 3px 5px 2px rgba(92, 107, 192, .3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #26A69A 30%, #5C6BC0 90%)',
                    }
                  }}
                >
                  Voir mes projets
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    borderColor: '#5C6BC0',
                    color: '#5C6BC0',
                    '&:hover': {
                      borderColor: '#26A69A',
                      color: '#26A69A',
                      backgroundColor: 'rgba(38, 166, 154, 0.1)',
                    }
                  }}
                >
                  Me contacter
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Home;
