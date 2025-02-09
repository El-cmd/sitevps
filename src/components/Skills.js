import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/hacker.css';

const Skills = () => {
  const [loadingText, setLoadingText] = useState('');
  const [loadedSkills, setLoadedSkills] = useState([]);
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { 
      category: 'PROGRAMMING_LANGUAGES', 
      items: [
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C++', level: 90 },
        { name: 'Java', level: 75 }
      ]
    },
    { 
      category: 'WEB_TECHNOLOGIES', 
      items: [
        { name: 'React.js', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 }
      ]
    },
    { 
      category: 'DATABASE_SYSTEMS', 
      items: [
        { name: 'MongoDB', level: 78 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    { 
      category: 'TOOLS_AND_FRAMEWORKS', 
      items: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 75 },
        { name: 'Linux', level: 88 }
      ]
    }
  ];

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
  }, []);

  const loadSkillsSequentially = async () => {
    for (const skillGroup of skills) {
      for (const skill of skillGroup.items) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setLoadedSkills(prev => [...prev, skill.name]);
      }
    }
  };

  return (
    <Container>
      <div className="scan-line"></div>
      <Box sx={{ pt: 12, pb: 6 }}>
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
              className="skill-group"
              style={{
                padding: '20px',
                border: '1px solid #00ff00',
                background: 'rgba(0, 255, 0, 0.05)',
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                marginBottom: '20px'
              }}
            >
              <h3 
                className="terminal-text" 
                style={{
                  marginBottom: '1rem',
                  textShadow: '0 0 5px #00ff00'
                }}
              >
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
                      className={isActive ? 'glitch' : ''}
                    >
                      <div 
                        className="terminal-text"
                        style={{ 
                          marginBottom: '0.5rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span>> {skill.name}</span>
                        <span style={{ opacity: 0.8 }}>{skill.level}%</span>
                      </div>
                      <div 
                        className="skill-progress"
                        style={{
                          height: '4px',
                          background: 'rgba(0, 255, 0, 0.1)',
                          marginBottom: '15px',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: isLoaded ? 0.2 : 0 }}
                          className="skill-progress-bar"
                          style={{
                            height: '100%',
                            background: '#00ff00',
                            boxShadow: '0 0 10px #00ff00',
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

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        @keyframes progressBlink {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }

        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Container>
  );
};

export default Skills;
