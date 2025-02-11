import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/hacker.css';
import '../styles/Skills.css';

const Skills = () => {
  const [loadingText, setLoadingText] = useState('');
  const [loadedSkills, setLoadedSkills] = useState([]);
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = useMemo(() => [
    { 
      category: 'PROGRAMMING_LANGUAGES', 
      items: [
        { name: 'C++', level: 90 },
        { name: 'C', level: 90 },
        { name: 'Python', level: 40 },
        { name: 'JavaScript', level: 40 }
      ]
    },
    { 
      category: 'WEB_TECHNOLOGIES', 
      items: [
        { name: 'React.js', level: 20 },
        { name: 'Node.js', level: 20 },
        { name: 'HTML5/CSS3', level: 80  },
        { name: 'DJango/API REST', level: 60 }
      ]
    },
    { 
      category: 'DATABASE_SYSTEMS', 
      items: [
        { name: 'MongoDB', level: 50 },
        { name: 'MySQL', level: 50 },
        { name: 'PostgreSQL', level: 50 }
      ]
    },
    { 
      category: 'TOOLS_AND_FRAMEWORKS', 
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker/Dev Ops', level: 80 },
        { name: 'IA', level: 150 },
        { name: 'Linux', level: 90 },
        { name: 'Cybersecurity', level: 10 }
      ]
    }
  ], []);

  const loadSkillsSequentially = useCallback(async () => {
    for (const skillGroup of skills) {
      for (const skill of skillGroup.items) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setLoadedSkills(prev => [...prev, skill.name]);
      }
    }
  }, [skills, setLoadedSkills]);

  useEffect(() => {
    const text = "ANALYZING_SKILL_MATRIX...";
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setLoadingText(currentText);
        index++;
      } else {
        clearInterval(interval);
        loadSkillsSequentially();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [loadSkillsSequentially]);

  return (
    <Container>
      <div className="scan-line"></div>
      <Box sx={{ pt: 8, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="terminal-text" 
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              fontSize: 'calc(1.5rem + 1vw)',
              textShadow: '0 0 10px #00ff00'
            }}
          >
            {loadedSkills.length < skills.reduce((acc, group) => acc + group.items.length, 0) ? (
              <>{loadingText}<span className="cursor-blink">_</span></>
            ) : (
              <>SKILL_MATRIX_ANALYZED<span className="cursor-blink">_</span></>
            )}
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: groupIndex * 0.2 }}
              className="skill-card"
            >
              <h3 className="skill-title terminal-text">
                [{skillGroup.category}]
              </h3>
              <div className="skill-list">
                {skillGroup.items.map((skill, skillIndex) => {
                  const isLoaded = loadedSkills.includes(skill.name);
                  const isActive = activeSkill === skill.name;

                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      onMouseEnter={() => setActiveSkill(skill.name)}
                      onMouseLeave={() => setActiveSkill(null)}
                      className="skill-item"
                    >
                      <div className="skill-name terminal-text">
                        <span>{skill.name}</span>
                        <span style={{ opacity: 0.8 }}>{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: isLoaded ? 0.2 : 0 }}
                          className="progress-fill"
                          style={{
                            animation: isActive ? 'progressBlink 1s infinite' : 'none'
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default Skills;
