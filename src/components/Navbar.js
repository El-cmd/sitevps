import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/hacker.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const mainPages = [
    { name: 'INIT_HOME', path: '/' },
    { name: 'SCAN_SKILLS', path: '/competences' },
    { name: 'ACCESS_EDU', path: '/formation' },
    { name: 'VIEW_PROJECTS', path: '/projets' },
    { name: 'GET_SERVICES', path: '/services' },
  ];

  const connectPage = { name: 'CONNECT', path: '/contact' };

  useEffect(() => {
    const text = "SYSTEM_READY>";
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setTerminalText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {mainPages.map((item) => (
        <ListItem 
          key={item.name} 
          component={Link} 
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
            }
          }}
        >
          <ListItemText 
            primary={item.name} 
            sx={{ 
              color: '#00ff00',
              '& .MuiTypography-root': {
                fontFamily: 'Share Tech Mono',
              }
            }} 
          />
        </ListItem>
      ))}
      <ListItem 
        key={connectPage.name} 
        component={Link} 
        to={connectPage.path}
        onClick={handleDrawerToggle}
        sx={{
          marginTop: 2,
          borderTop: '1px solid #00ff00',
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
          }
        }}
      >
        <ListItemText 
          primary={connectPage.name} 
          sx={{ 
            color: '#00ff00',
            '& .MuiTypography-root': {
              fontFamily: 'Share Tech Mono',
            }
          }} 
        />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(0, 20, 0, 0.9)',
          backdropFilter: 'blur(5px)',
          borderBottom: '1px solid #00ff00',
          boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="terminal-text"
            >
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  marginRight: 2,
                  fontFamily: 'Share Tech Mono',
                  letterSpacing: '0.1em'
                }}
              >
                {terminalText}<span className="cursor-blink">_</span>
              </Typography>
            </motion.div>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                {mainPages.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{
                        color: '#00ff00',
                        fontFamily: 'Share Tech Mono',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 0, 0.1)',
                          textShadow: '0 0 5px #00ff00'
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Box>

          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  color: '#00ff00',
                  textShadow: '0 0 5px #00ff00'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: mainPages.length * 0.1 }}
            >
              <Button
                component={Link}
                to={connectPage.path}
                sx={{
                  color: '#00ff00',
                  fontFamily: 'Share Tech Mono',
                  border: '1px solid #00ff00',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    textShadow: '0 0 5px #00ff00',
                    boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)'
                  }
                }}
              >
                {connectPage.name}
              </Button>
            </motion.div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: 'rgba(0, 20, 0, 0.95)',
            borderLeft: '1px solid #00ff00',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Navbar;
