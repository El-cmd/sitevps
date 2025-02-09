import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaReact } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';
import '../styles/hacker.css';

const projects = [
  {
    title: 'FT_IRC',
    description: '[PROJET_01] Serveur IRC - Communication en temps réel',
    image: 'https://source.unsplash.com/random/400x300/?server',
    github: 'https://github.com/El-cmd/ft_irc',
    tags: ['C++', 'NETWORK', 'IRC'],
    icon: <SiCplusplus size={24} color="#00ff00" />
  },
  {
    title: 'CUB3D',
    description: '[PROJET_02] Moteur 3D - Ray-casting Engine',
    image: 'https://source.unsplash.com/random/400x300/?gaming',
    github: 'https://github.com/El-cmd/Cub3D',
    tags: ['C', 'GRAPHICS', 'GAME'],
    icon: <SiC size={24} color="#00ff00" />
  },
  {
    title: 'SO_LONG',
    description: '[PROJET_03] Pokemon - 2D Game Engine',
    image: 'https://source.unsplash.com/random/400x300/?pokemon',
    github: 'https://github.com/El-cmd/So_long',
    tags: ['C', 'GAME', 'MLX'],
    icon: <SiC size={24} color="#00ff00" />
  },
  {
    title: 'PORTFOLIO',
    description: '[PROJET_04] Interface Web - React Framework',
    image: 'https://source.unsplash.com/random/400x300/?hacker',
    github: 'https://github.com/El-cmd/sitevps',
    tags: ['REACT', 'UI', 'JS'],
    icon: <FaReact size={24} color="#00ff00" />
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const text = "LOADING_PROJECTS...";
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

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={project.title} xs={12} sm={6} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setActiveProject(project.title)}
              onHoverEnd={() => setActiveProject(null)}
            >
              <Card 
                className={activeProject === project.title ? 'glitch' : ''}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  background: 'rgba(0, 255, 0, 0.05)',
                  border: '1px solid #00ff00',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
                    border: '1px solid #00ff00',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ 
                    objectFit: 'cover',
                    filter: 'grayscale(80%) brightness(0.8) sepia(50%) hue-rotate(70deg)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      filter: 'grayscale(0%) brightness(1) sepia(0%) hue-rotate(0deg)',
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                    {project.icon}
                    <Typography 
                      className="terminal-text"
                      variant="h5" 
                      component="h2"
                    >
                      {project.title}
                    </Typography>
                  </Box>
                  <Typography 
                    className="terminal-text"
                    variant="body1" 
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.tags.map((tag) => (
                      <Typography
                        key={tag}
                        className="terminal-text"
                        sx={{
                          px: 1,
                          py: 0.5,
                          border: '1px solid #00ff00',
                          fontSize: '0.8rem',
                          backgroundColor: 'rgba(0, 255, 0, 0.1)',
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    className="terminal-text"
                    sx={{
                      color: '#00ff00',
                      border: '1px solid #00ff00',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                        boxShadow: '0 0 10px #00ff00',
                      }
                    }}
                  >
                    ACCESS_CODE
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
