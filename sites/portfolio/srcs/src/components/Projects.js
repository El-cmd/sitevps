import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiCodio } from 'react-icons/si';
import '../styles/hacker.css';

const projects = [
  {
    title: 'FT_TRANSCENDENCE',
    description: '[PROJET_01] Site avec Pong multijoueurs - ThreeJS, Docker, PostgreSQL, Django',
    github: 'https://github.com/El-cmd/Ft_transcendence',
    tags: ['JS', 'MICRO-SERVICE', 'OAUTH2', 'JWT', 'POSTGRESQL', 'WEBSOCKET', 'DJANGO'],
    icon: <FaReact size={24} color="#00ff00" />
  },
  {
    title: 'INCEPTION',
    description: '[PROJET_02] Infrastructure Docker avec WordPress, MariaDB, et Nginx',
    github: 'https://github.com/El-cmd/Inception',
    tags: ['DOCKER', 'WORDPRESS', 'MARIADB', 'NGINX'],
    icon: <FaReact size={24} color="#00ff00" />
  },
  {
    title: 'FT_IRC',
    description: '[PROJET_03] Serveur IRC - Communication en temps réel',
    github: 'https://github.com/El-cmd/ft_irc',
    tags: ['C++', 'NETWORK', 'IRC', 'PROTOCOL'],
    icon: <SiCplusplus size={24} color="#00ff00" />
  },
  {
    title: 'CUB3D',
    description: '[PROJET_04] Moteur 3D - Ray-casting Engine',
    github: 'https://github.com/El-cmd/Cub3D',
    tags: ['C', 'GRAPHICS', 'GAME'],
    icon: <SiCodio size={24} color="#00ff00" />
  },
  {
    title: 'MY_MINISHELL',
    description: '[PROJET_05] Shell UNIX personnalisé - Interpréteur de commandes',
    github: 'https://github.com/El-cmd/My_MiniShell',
    tags: ['C', 'SHELL', 'UNIX'],
    icon: <SiCodio size={24} color="#00ff00" />
  },
  {
    title: 'PHILOSOPHER',
    description: '[PROJET_06] Problème des philosophes - Programmation concurrente',
    github: 'https://github.com/El-cmd/Philosopher',
    tags: ['C', 'THREADS', 'MUTEX'],
    icon: <SiCodio size={24} color="#00ff00" />
  },
  {
    title: 'PUSH_SWAP',
    description: '[PROJET_07] Algorithme de tri avec deux piles',
    github: 'https://github.com/El-cmd/Push_Swap-2.0',
    tags: ['C', 'ALGORITHM', 'SORTING'],
    icon: <SiCodio size={24} color="#00ff00" />
  },
  {
    title: 'SO_LONG',
    description: '[PROJET_08] Jeu 2D style Pokémon',
    github: 'https://github.com/El-cmd/So_long',
    tags: ['C', 'GAME', 'MLX'],
    icon: <SiCodio size={24} color="#00ff00" />
  },
  {
    title: 'PIPEX',
    description: '[PROJET_09] Reproduction du pipe UNIX',
    github: 'https://github.com/El-cmd/Pipex',
    tags: ['C', 'UNIX', 'PROCESS'],
    icon: <SiCodio size={24} color="#00ff00" />
  },
  {
    title: 'PISCINE CPP',
    description: '[PROJET_10] Série d\'exercices en C++',
    github: 'https://github.com/El-cmd/PiscineCPP',
    tags: ['C++', 'OOP', 'LEARNING'],
    icon: <SiCplusplus size={24} color="#00ff00" />
  },
  {
    title: 'FT_PRINTF',
    description: '[PROJET_11] Reproduction de printf',
    github: 'https://github.com/El-cmd/ft_printf',
    tags: ['C', 'VARIADIC', 'STDIO'],
    icon: <SiCodio size={24} color="#00ff00" />
  },
  {
    title: 'GET_NEXT_LINE',
    description: '[PROJET_12] Lecture de fichier ligne par ligne',
    github: 'https://github.com/El-cmd/get_next_line',
    tags: ['C', 'FILE', 'BUFFER'],
    icon: <SiCodio size={24} color="#00ff00" />
  },
  {
    title: 'LIBFT',
    description: '[PROJET_13] Bibliothèque de fonctions C',
    github: 'https://github.com/El-cmd/libft',
    tags: ['C', 'LIBRARY', 'UTILS'],
    icon: <SiCodio size={24} color="#00ff00" />
  },
  {
    title: 'PORTFOLIO',
    description: '[PROJET_14] Site web personnel en React',
    github: 'https://github.com/El-cmd/sitevps',
    tags: ['REACT', 'UI', 'PORTFOLIO'],
    icon: <FaReact size={24} color="#00ff00" />
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [loadingText, setLoadingText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

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
        // Déclencher le chargement des projets immédiatement après
        setTimeout(() => setIsLoaded(true), 300);
      }
    }, 50); // Réduit à 50ms

    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Container>
      <div className="scan-line"></div>
      <Box sx={{ pt: 8, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            className="terminal-text"
            sx={{
              textAlign: 'center',
              marginBottom: '1rem',
              fontSize: 'calc(1.5rem + 1vw)',
              textShadow: '0 0 10px #00ff00'
            }}
          >
            {!isLoaded ? (
              <>{loadingText}<span className="cursor-blink">_</span></>
            ) : (
              <>PROJECTS_LOADED<span className="cursor-blink">_</span></>
            )}
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 4 
          }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                component="a"
                href="https://github.com/El-cmd"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaGithub size={24} />}
                sx={{
                  color: '#00ff00',
                  border: '1px solid #00ff00',
                  padding: '10px 24px',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  backgroundColor: 'rgba(0, 255, 0, 0.05)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                    border: '1px solid #00ff00'
                  }
                }}
              >
                Voir tous mes projets sur GitHub
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isLoaded ? "show" : "hidden"}
        >
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.title}>
                <motion.div
                  variants={item}
                  onHoverStart={() => setActiveProject(project.title)}
                  onHoverEnd={() => setActiveProject(null)}
                >
                  <Box
                    className={activeProject === project.title ? 'glitch' : ''}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: '1px solid #00ff00',
                      backgroundColor: 'rgba(0, 255, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {project.icon}
                      <Typography 
                        className="terminal-text"
                        sx={{ 
                          ml: 2,
                          fontSize: '1.2rem'
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>

                    <Typography 
                      className="terminal-text"
                      sx={{ 
                        mb: 2,
                        minHeight: '60px',
                        fontSize: '0.9rem'
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.tags.map(tag => (
                        <Typography 
                          key={tag}
                          className="terminal-text"
                          sx={{ 
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

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: '#00ff00'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <FaGithub />
                        <Typography className="terminal-text">
                          GitHub
                        </Typography>
                      </Box>
                    </motion.a>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects;
