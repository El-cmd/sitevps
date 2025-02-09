import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/hacker.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loadingText, setLoadingText] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('INITIALIZING');

  useEffect(() => {
    const text = "ESTABLISHING_SECURE_CONNECTION...";
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setLoadingText(currentText);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setConnectionStatus('CONNECTED');
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConnectionStatus('SENDING');
    setTimeout(() => {
      setConnectionStatus('SENT');
      console.log(formData);
    }, 2000);
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
            {connectionStatus === 'INITIALIZING' ? (
              <>{loadingText}<span className="cursor-blink">_</span></>
            ) : (
              <>SECURE_CHANNEL_ESTABLISHED<span className="cursor-blink">_</span></>
            )}
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(0, 255, 0, 0.05)',
                  border: '1px solid #00ff00',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                <Typography className="terminal-text" variant="h5" gutterBottom>
                  COMMUNICATION_PROTOCOLS
                </Typography>
                <Typography className="terminal-text" paragraph sx={{ opacity: 0.8 }}>
                  ENCRYPTED_CHANNELS_AVAILABLE_FOR_CONTACT
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ color: '#00ff00', mr: 2 }} />
                    <Typography className="terminal-text">
                      valentin.loth@outlook.fr
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                    <Button
                      className="terminal-text"
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/valentin-loth-a7a0b0234/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#00ff00',
                        border: '1px solid #00ff00',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 0, 0.1)',
                          boxShadow: '0 0 10px #00ff00',
                        }
                      }}
                    >
                      LINKEDIN_ACCESS
                    </Button>
                    <Button
                      className="terminal-text"
                      startIcon={<GitHubIcon />}
                      href="https://github.com/El-cmd"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#00ff00',
                        border: '1px solid #00ff00',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 0, 0.1)',
                          boxShadow: '0 0 10px #00ff00',
                        }
                      }}
                    >
                      GITHUB_ACCESS
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(0, 255, 0, 0.05)',
                  border: '1px solid #00ff00',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                <Typography className="terminal-text" variant="h5" gutterBottom>
                  SEND_ENCRYPTED_MESSAGE
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="IDENTIFIER"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                    InputProps={{
                      className: 'terminal-text',
                    }}
                    InputLabelProps={{
                      className: 'terminal-text',
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#00ff00',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00ff00',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff00',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#00ff00',
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#00ff00',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="ENCRYPTION_KEY"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                    InputProps={{
                      className: 'terminal-text',
                    }}
                    InputLabelProps={{
                      className: 'terminal-text',
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#00ff00',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00ff00',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff00',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#00ff00',
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#00ff00',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="MESSAGE_CONTENT"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                    InputProps={{
                      className: 'terminal-text',
                    }}
                    InputLabelProps={{
                      className: 'terminal-text',
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#00ff00',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00ff00',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff00',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#00ff00',
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#00ff00',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="outlined"
                    fullWidth
                    className="terminal-text"
                    sx={{
                      mt: 3,
                      color: '#00ff00',
                      border: '1px solid #00ff00',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                        boxShadow: '0 0 10px #00ff00',
                      }
                    }}
                  >
                    {connectionStatus === 'SENDING' ? (
                      'ENCRYPTING_AND_SENDING...'
                    ) : connectionStatus === 'SENT' ? (
                      'MESSAGE_SENT_SUCCESSFULLY'
                    ) : (
                      'TRANSMIT_MESSAGE'
                    )}
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
