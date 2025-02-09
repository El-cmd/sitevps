import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/hacker.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const pages = [
    { name: 'INIT_HOME', path: '/' },
    { name: 'SCAN_SKILLS', path: '/competences' },
    { name: 'ACCESS_EDU', path: '/formation' },
    { name: 'VIEW_PROJECTS', path: '/projets' },
    { name: 'LOAD_HOBBIES', path: '/passions' },
    { name: 'CONNECT', path: '/contact' },
  ];

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
        <Toolbar>
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
                flexGrow: 1, 
                marginRight: 2,
                fontFamily: 'Share Tech Mono',
                letterSpacing: '0.1em'
              }}
            >
              {terminalText}<span className="cursor-blink">_</span>
            </Typography>
          </motion.div>

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
            <div style={{ display: 'flex', gap: '1rem' }}>
              {pages.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    className="nav-button glitch"
                    sx={{
                      color: '#00ff00',
                      fontFamily: 'Share Tech Mono',
                      border: '1px solid transparent',
                      '&:hover': {
                        border: '1px solid #00ff00',
                        boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                        textShadow: '0 0 5px #00ff00',
                        backgroundColor: 'rgba(0, 255, 0, 0.1)'
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            background: 'rgba(0, 20, 0, 0.95)',
            borderLeft: '1px solid #00ff00',
            boxShadow: '-5px 0 15px rgba(0, 255, 0, 0.2)'
          }
        }}
      >
        <List>
          {pages.map((item) => (
            <ListItem
              button
              key={item.name}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: '#00ff00',
                fontFamily: 'Share Tech Mono',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 0, 0.1)',
                  textShadow: '0 0 5px #00ff00'
                }
              }}
            >
              <ListItemText 
                primary={item.name}
                sx={{
                  '& .MuiTypography-root': {
                    fontFamily: 'Share Tech Mono',
                    letterSpacing: '0.1em'
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
