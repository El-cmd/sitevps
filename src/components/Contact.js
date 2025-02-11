import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Paper, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import emailjs from '@emailjs/browser';
import '../styles/hacker.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loadingText, setLoadingText] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('INITIALIZING');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

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

    // Initialize EmailJS
    emailjs.init("P8NSyKwfHXep4XkdD");

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConnectionStatus('SENDING');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Valentin Loth',
      };

      await emailjs.send(
        'service_0uzfjds',
        'template_rhgkdb5',
        templateParams
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setConnectionStatus('CONNECTED');
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
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
                  CONTACT_PROTOCOLS
                </Typography>
                <Typography className="terminal-text" paragraph sx={{ opacity: 0.8 }}>
                  AVAILABLE_COMMUNICATION_CHANNELS
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ color: '#00ff00', mr: 2 }} />
                    <Typography className="terminal-text">
                      lothvalentin@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ color: '#00ff00', mr: 2 }} />
                    <Typography className="terminal-text">
                      Paris, France
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PhoneIcon sx={{ color: '#00ff00', mr: 2 }} />
                    <Typography className="terminal-text">
                      06 29 95 15 86 (WhatsApp only)
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                    <Button
                      className="terminal-text"
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/loth-valentin-50378a231/"
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
                      LINKEDIN
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
                      GITHUB
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
                  SEND_A_MESSAGE
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="NAME"
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
                    label="EMAIL"
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
                    label="MESSAGE"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                    multiline
                    rows={4}
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
                    fullWidth
                    variant="outlined"
                    sx={{
                      mt: 3,
                      mb: 2,
                      color: '#00ff00',
                      border: '1px solid #00ff00',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                        boxShadow: '0 0 10px #00ff00',
                      }
                    }}
                    className="terminal-text"
                  >
                    {connectionStatus === 'SENDING' ? 'SENDING...' : 'SEND_MESSAGE'}
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
