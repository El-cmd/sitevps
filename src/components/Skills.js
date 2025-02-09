import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FaDocker, FaPython, FaLinux, FaReact, FaNodeJs, FaServer } from 'react-icons/fa';
import { SiDjango, SiC, SiCplusplus, SiGnubash } from 'react-icons/si';

const iconAnimation = {
  animate: {
    y: [0, -5, 0],
    rotate: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const starAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20
  }
};

const skills = [
  { name: 'C', level: 3, icon: <SiC size={60} color="#A8B9CC" /> },
  { name: 'C++', level: 3, icon: <SiCplusplus size={60} color="#00599C" /> },
  { name: 'JavaScript', level: 2, icon: <JavascriptIcon sx={{ fontSize: 60, color: '#F7DF1E' }} /> },
  { name: 'React.js', level: 2, icon: <FaReact size={60} color="#61DAFB" /> },
  { name: 'Node.js', level: 2, icon: <FaNodeJs size={60} color="#339933" /> },
  { name: 'Python', level: 1, icon: <FaPython size={60} color="#3776AB" /> },
  { name: 'Git', level: 2, icon: <GitHubIcon sx={{ fontSize: 60, color: '#F05032' }} /> },
  { name: 'HTML/CSS', level: 2, icon: <HtmlIcon sx={{ fontSize: 60, color: '#E44D26' }} /> },
  { name: 'Docker', level: 2, icon: <FaDocker size={60} color="#2496ED" /> },
  { name: 'Django', level: 1, icon: <SiDjango size={60} color="#092E20" /> },
  { name: 'Shell', level: 2, icon: <SiGnubash size={60} color="#4EAA25" /> },
  { name: 'VM', level: 2, icon: <FaServer size={60} color="#183A61" /> },
  { name: 'Linux', level: 2, icon: <FaLinux size={60} color="#FCC624" /> },
];

const Skills = () => {
  const renderStars = (level) => {
    return [...Array(3)].map((_, index) => (
      <motion.div
        key={index}
        initial="initial"
        animate="animate"
        variants={starAnimation}
        transition={{ delay: index * 0.1 }}
      >
        {index < level ? 
          <StarIcon sx={{ color: '#FFD700', fontSize: 30 }} /> : 
          <StarBorderIcon sx={{ color: '#FFD700', fontSize: 30 }} />}
      </motion.div>
    ));
  };

  return (
    <Container maxWidth="lg">
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

        <Grid container spacing={6} sx={{ mt: 2 }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: 'center',
                    '&:hover .skill-icon': {
                      transform: 'scale(1.2) rotate(360deg)',
                      transition: 'all 0.5s ease-in-out',
                    }
                  }}
                >
                  <motion.div
                    className="skill-icon"
                    variants={iconAnimation}
                    animate="animate"
                    style={{ display: 'inline-flex' }}
                  >
                    {skill.icon}
                  </motion.div>
                  <Typography variant="h6" align="center">
                    {skill.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {renderStars(skill.level)}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;
