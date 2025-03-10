import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/hacker.css';

// Import des SVG en tant que composants React
import { ReactComponent as PSGLogo } from '../assets/Paris_Saint-Germain_Logo.svg';
import { ReactComponent as BitcoinLogo } from '../assets/bitcoin-svgrepo-com.svg';
import { ReactComponent as ChessLogo } from '../assets/chess-svgrepo-com.svg';
import { ReactComponent as MinecraftLogo } from '../assets/minecraft-svgrepo-com.svg';
import { ReactComponent as RiotLogo } from '../assets/riotgames-svgrepo-com.svg';
import { ReactComponent as RocketLeagueLogo } from '../assets/rocket-league-logo-svgrepo-com.svg';
import { ReactComponent as StarWarsLogo } from '../assets/star-wars-logo-svgrepo-com.svg';
import { ReactComponent as XboxLogo } from '../assets/xbox-svgrepo-com.svg';

const passions = [
  { 
    id: 'PSG_01',
    name: 'PSG', 
    Icon: PSGLogo, 
    description: '[SPORT_MODULE] Football && Paris_Saint_Germain_Fan' 
  },
  { 
    id: 'CRYPTO_02',
    name: 'BITCOIN', 
    Icon: BitcoinLogo, 
    description: '[TECH_MODULE] Cryptocurrency && Blockchain_Technology' 
  },
  { 
    id: 'CHESS_03',
    name: 'CHESS', 
    Icon: ChessLogo, 
    description: '[STRATEGY_MODULE] Chess_Player && Strategic_Planning' 
  },
  { 
    id: 'MC_04',
    name: 'MINECRAFT', 
    Icon: MinecraftLogo, 
    description: '[GAME_MODULE] Creative_Building && World_Generation' 
  },
  { 
    id: 'LOL_05',
    name: 'LEAGUE_OF_LEGENDS', 
    Icon: RiotLogo, 
    description: '[GAME_MODULE] MOBA_Player && Team_Strategy' 
  },
  { 
    id: 'RL_06',
    name: 'ROCKET_LEAGUE', 
    Icon: RocketLeagueLogo, 
    description: '[GAME_MODULE] Competitive_Player && Physics_Mastery' 
  },
  { 
    id: 'SW_07',
    name: 'STAR_WARS', 
    Icon: StarWarsLogo, 
    description: '[ENTERTAINMENT_MODULE] Sci-Fi && Universe_Exploration' 
  },
  { 
    id: 'XBOX_08',
    name: 'XBOX', 
    Icon: XboxLogo, 
    description: '[GAMING_MODULE] Console_Gaming && Digital_Entertainment' 
  }
];

const Passions = () => {
  const [loadingText, setLoadingText] = useState('');
  const [loadedPassions, setLoadedPassions] = useState([]);
  const [activePassion, setActivePassion] = useState(null);

  useEffect(() => {
    const text = "LOADING_PERSONAL_DATABASE...";
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setLoadingText(currentText);
        index++;
      } else {
        clearInterval(interval);
        loadPassionsSequentially();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const loadPassionsSequentially = async () => {
    for (let i = 0; i < passions.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setLoadedPassions(prev => [...prev, passions[i].id]);
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
          <Typography 
            className="terminal-text"
            sx={{ 
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              textShadow: '0 0 10px #00ff00'
            }}
          >
            {loadedPassions.length < passions.length ? (
              <>{loadingText}<span className="cursor-blink">_</span></>
            ) : (
              <>PERSONAL_INTERESTS_ACCESSED<span className="cursor-blink">_</span></>
            )}
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {passions.map((passion, index) => {
            const Icon = passion.Icon;
            const isLoaded = loadedPassions.includes(passion.id);
            
            return (
              <Grid item xs={12} sm={6} md={3} key={passion.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  onHoverStart={() => setActivePassion(passion.id)}
                  onHoverEnd={() => setActivePassion(null)}
                >
                  <Box
                    className={activePassion === passion.id ? 'glitch' : ''}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                      background: 'rgba(0, 255, 0, 0.05)',
                      border: '1px solid #00ff00',
                      boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
                        '& .passion-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          filter: 'brightness(1.5) hue-rotate(90deg)',
                        }
                      }
                    }}
                  >
                    <Box
                      className="passion-icon"
                      sx={{
                        width: '80px',
                        height: '80px',
                        marginBottom: '1rem',
                        transition: 'all 0.3s ease-in-out',
                        filter: 'brightness(1.2) sepia(100%) hue-rotate(95deg)',
                        '& svg': {
                          width: '100%',
                          height: '100%'
                        }
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      className="terminal-text"
                      sx={{ textShadow: '0 0 5px #00ff00' }}
                    >
                      {passion.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      className="terminal-text"
                      sx={{ opacity: 0.8 }}
                    >
                      {passion.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Passions;
