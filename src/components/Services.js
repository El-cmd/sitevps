import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
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
  const [activeService, setActiveService] = useState(null);

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
    <Container sx={{ py: 8 }}>
      <div className="scan-line"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography 
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

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onHoverStart={() => setActiveService(service.title)}
            onHoverEnd={() => setActiveService(null)}
            key={service.title}
            className={`service-card ${activeService === service.title ? 'active' : ''}`}
            sx={{ 
              m: 2,
              p: 3,
              border: '1px solid #00ff00',
              backgroundColor: 'rgba(0, 255, 0, 0.05)',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                transform: 'translateY(-5px)',
                transition: 'all 0.3s ease-in-out'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {service.icon}
              <Typography 
                variant="h6" 
                sx={{ 
                  ml: 2,
                  color: '#00ff00',
                  fontFamily: 'monospace'
                }}
              >
                {service.title}
              </Typography>
            </Box>

            <Typography 
              sx={{ 
                color: '#00ff00',
                fontFamily: 'monospace',
                mb: 2
              }}
            >
              {service.description}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {service.tags.map(tag => (
                <Typography 
                  key={tag}
                  sx={{ 
                    color: '#00ff00',
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    border: '1px solid #00ff00',
                    px: 1,
                    borderRadius: 1
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Services;
