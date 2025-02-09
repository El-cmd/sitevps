import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Formation from './components/Formation';
import Passions from './components/Passions';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64B5F6',
      light: '#90CAF9',
      dark: '#42A5F5',
    },
    secondary: {
      main: '#81C784',
      light: '#A5D6A7',
      dark: '#66BB6A',
    },
    background: {
      default: '#0A1929',
      paper: 'rgba(13, 27, 42, 0.7)',
    },
    text: {
      primary: '#E3F2FD',
      secondary: '#90CAF9',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h5: {
      letterSpacing: '0.02em',
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(13, 27, 42, 0.7)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(144, 202, 249, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            border: '1px solid rgba(144, 202, 249, 0.2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          padding: '10px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #64B5F6 30%, #81C784 90%)',
          boxShadow: 'none',
          '&:hover': {
            background: 'linear-gradient(45deg, #42A5F5 30%, #66BB6A 90%)',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
          },
        },
        outlined: {
          borderColor: '#64B5F6',
          '&:hover': {
            borderColor: '#90CAF9',
            backgroundColor: 'rgba(144, 202, 249, 0.08)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <ParticlesBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/passions" element={<Passions />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
