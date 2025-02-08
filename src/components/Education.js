import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    year: '2023',
    degree: 'Diplôme Développeur Web Full Stack',
    school: 'École de Développement Web',
    description: 'Formation intensive en développement web moderne. Spécialisation en React et Node.js.',
  },
  {
    year: '2022',
    degree: 'Certification JavaScript',
    school: 'FreeCodeCamp',
    description: 'Certification complète en JavaScript avec focus sur ES6+ et les frameworks modernes.',
  },
  {
    year: '2021',
    degree: 'Baccalauréat Scientifique',
    school: 'Lycée',
    description: 'Option Mathématiques et Sciences de l\'Ingénieur.',
  },
];

const Education = () => {
  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Formation
          </Typography>
        </motion.div>

        <Timeline position="alternate" sx={{ mt: 4 }}>
          {education.map((item, index) => (
            <TimelineItem key={item.year}>
              <TimelineSeparator>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    <Typography variant="h6" component="h3" gutterBottom>
                      {item.degree}
                    </Typography>
                    <Typography color="primary" gutterBottom>
                      {item.year}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {item.school}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
};

export default Education;
