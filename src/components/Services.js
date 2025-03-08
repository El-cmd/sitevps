import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/hacker.css';

const services = [
  {
    title: 'DÉVELOPPEMENT WEB',
    description: 'Création de sites web modernes et réactifs avec les dernières technologies (React, Django, Three.js)',
    icon: <FaCode size={24} color="#00ff00" />,
    tags: ['FRONTEND', 'BACKEND', '3D', 'RESPONSIVE']
  },
  {
    title: 'MICROSERVICES',
    description: 'Architecture et développement de systèmes distribués avec Docker et API REST',
    icon: <FaServer size={24} color="#00ff00" />,
    tags: ['DOCKER', 'API', 'SCALABLE', 'CLOUD']
  },
  {
    title: 'SÉCURITÉ',
    description: 'Implémentation de systèmes d\'authentification et de sécurité (OAuth2, JWT)',
    icon: <FaDatabase size={24} color="#00ff00" />,
    tags: ['OAUTH2', 'JWT', 'CYBERSECURITY']
  },
  {
    title: 'COURS C/C++',
    description: 'Formation personnalisée en C et C++ pour débutants et intermédiaires. Projets pratiques et mentorat.',
    icon: <FaCode size={24} color="#00ff00" />,
    tags: ['C', 'C++', 'ALGORITHMIE', 'MENTORAT']
  },
  {
    title: 'JEUX 2D',
    description: 'Développement de jeux 2D avec SDL2, MLX, ou moteurs de jeux modernes',
    icon: <FaCode size={24} color="#00ff00" />,
    tags: ['SDL2', 'MLX', 'GAME', 'GRAPHICS']
  },
  {
    title: 'IA & CHATBOTS',
    description: 'Développement de chatbots intelligents et intégration de l\'API OpenAI (GPT-3, GPT-4)',
    icon: <FaCode size={24} color="#00ff00" />,
    tags: ['OPENAI', 'CHATBOT', 'GPT', 'API']
  }
];

const Services = () => {
  const [loadingText, setLoadingText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const text = "AVAILABLE_SERVICES...";
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setLoadingText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <div className="scan-line"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography 
          variant="h2"
          className="terminal-text" 
          sx={{ 
            textAlign: 'center',
            mb: 6,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            textShadow: '0 0 10px #00ff00'
          }}
        >
          {loadingText}<span className="cursor-blink">_</span>
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(0, 51, 0, 0.2)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid #00ff00',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
                    border: '1px solid #00ff00',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {service.icon}
                    <Typography
                      variant="h6"
                      sx={{
                        ml: 2,
                        fontWeight: 'bold',
                        letterSpacing: '0.1em',
                        color: '#00ff00'
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      color: 'rgba(0, 255, 0, 0.8)',
                      lineHeight: 1.6
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                    {service.tags.map((tag) => (
                      <Typography
                        key={tag}
                        variant="caption"
                        sx={{
                          px: 1,
                          py: 0.5,
                          border: '1px solid rgba(0, 255, 0, 0.3)',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          color: 'rgba(0, 255, 0, 0.7)'
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        mt: 6 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              color: '#00ff00',
              borderColor: '#00ff00',
              fontSize: '1.1rem',
              padding: '12px 32px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              '&:hover': {
                borderColor: '#00ff00',
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)',
              }
            }}
          >
            Demander un service
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Services;
