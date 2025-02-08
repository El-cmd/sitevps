import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaReact } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';

const projects = [
  {
    title: 'ft_irc',
    description: 'Serveur IRC aux petits oignons - Un serveur de chat en temps réel implémenté en C++',
    image: 'https://source.unsplash.com/random/400x300/?server',
    github: 'https://github.com/El-cmd/ft_irc',
    tags: ['C++', 'Networking', 'IRC Protocol'],
    icon: <SiCplusplus size={24} color="#00599C" />
  },
  {
    title: 'Cub3D',
    description: 'Un moteur de ray-casting 3D inspiré du célèbre jeu Wolfenstein 3D, développé en C',
    image: 'https://source.unsplash.com/random/400x300/?gaming',
    github: 'https://github.com/El-cmd/Cub3D',
    tags: ['C', 'Graphics', 'Game Development'],
    icon: <SiC size={24} color="#A8B9CC" />
  },
  {
    title: 'So_long',
    description: 'Pokemon Bad Version - Un jeu 2D développé en C avec la bibliothèque MLX',
    image: 'https://source.unsplash.com/random/400x300/?pokemon',
    github: 'https://github.com/El-cmd/So_long',
    tags: ['C', 'Game Development', 'Graphics'],
    icon: <SiC size={24} color="#A8B9CC" />
  },
  {
    title: 'Portfolio',
    description: 'Mon portfolio personnel développé avec React et Material-UI',
    image: 'https://source.unsplash.com/random/400x300/?portfolio',
    github: 'https://github.com/El-cmd/sitevps',
    tags: ['React', 'Material-UI', 'JavaScript'],
    icon: <FaReact size={24} color="#61DAFB" />
  }
];

const Projects = () => {
  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center" mb={6}>
          Mes Projets
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={project.title} xs={12} sm={6} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.6)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                    {project.icon}
                    <Typography variant="h5" component="h2">
                      {project.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.tags.map((tag) => (
                      <motion.div
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Box
                          sx={{
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'primary.main',
                            fontSize: '0.875rem',
                          }}
                        >
                          {tag}
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="large" 
                      href={project.github}
                      target="_blank"
                      startIcon={<GitHubIcon />}
                      sx={{
                        background: 'linear-gradient(45deg, #5C6BC0 30%, #26A69A 90%)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #26A69A 30%, #5C6BC0 90%)',
                        }
                      }}
                    >
                      Voir sur GitHub
                    </Button>
                  </motion.div>
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
