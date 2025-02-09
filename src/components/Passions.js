import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';

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
  { name: 'PSG', Icon: PSGLogo, description: 'Passionné de football et supporter du Paris Saint-Germain' },
  { name: 'Bitcoin', Icon: BitcoinLogo, description: 'Intéressé par les cryptomonnaies et la technologie blockchain' },
  { name: 'Échecs', Icon: ChessLogo, description: 'Amateur du jeu d\'échecs' },
  { name: 'Minecraft', Icon: MinecraftLogo, description: 'Fan de Minecraft et ses possibilités créatives infinies' },
  { name: 'League of Legends', Icon: RiotLogo, description: 'Joueur de League of Legends' },
  { name: 'Rocket League', Icon: RocketLeagueLogo, description: 'Compétiteur sur Rocket League' },
  { name: 'Star Wars', Icon: StarWarsLogo, description: 'Fan de l\'univers Star Wars' },
  { name: 'Xbox', Icon: XboxLogo, description: 'Gamer sur Xbox' }
];

const Passions = () => {
  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Passions
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {passions.map((passion, index) => {
            const Icon = passion.Icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={passion.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        '& .passion-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
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
                        transition: 'transform 0.3s ease-in-out',
                        '& svg': {
                          width: '100%',
                          height: '100%'
                        }
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {passion.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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
