import React from 'react';
import { Container, Typography, Grid, Paper, Box, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const skills = [
  { name: 'HTML/CSS', level: 85, icon: <HtmlIcon sx={{ fontSize: 40, color: '#E44D26' }} /> },
  { name: 'JavaScript', level: 80, icon: <JavascriptIcon sx={{ fontSize: 40, color: '#F7DF1E' }} /> },
  { name: 'React.js', level: 75, icon: <FaReact size={40} color="#61DAFB" /> },
  { name: 'Node.js', level: 70, icon: <FaNodeJs size={40} color="#339933" /> },
  { name: 'Python', level: 65, icon: <FaPython size={40} color="#3776AB" /> },
  { name: 'Git', level: 75, icon: <GitHubIcon sx={{ fontSize: 40, color: '#F05032' }} /> },
  { name: 'SQL', level: 70, icon: <StorageIcon sx={{ fontSize: 40, color: '#336791' }} /> },
  { name: 'MongoDB', level: 65, icon: <CodeIcon sx={{ fontSize: 40, color: '#47A248' }} /> },
];

const Skills = () => {
  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Compétences
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    background: 'rgba(19, 47, 76, 0.4)',
                    backdropFilter: 'blur(5px)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    {skill.icon}
                    <Typography variant="h6">
                      {skill.name}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            background: 'linear-gradient(45deg, #5C6BC0 30%, #26A69A 90%)',
                          },
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;
