import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Formation from './components/Formation';
import Services from './components/Services';
import Contact from './components/Contact';
import './styles/hacker.css';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00',
      light: '#33ff33',
      dark: '#00cc00',
    },
    secondary: {
      main: '#003300',
      light: '#004d00',
      dark: '#001a00',
    },
    background: {
      default: '#0a0a0a',
      paper: 'rgba(0, 51, 0, 0.7)',
    },
    text: {
      primary: '#00ff00',
      secondary: '#00cc00',
    },
  },
  typography: {
    fontFamily: '"Share Tech Mono", monospace',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 400,
      letterSpacing: '0.1em',
      textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 400,
      letterSpacing: '0.1em',
      textShadow: '0 0 8px #00ff00',
    },
    body1: {
      fontFamily: '"Share Tech Mono", monospace',
      letterSpacing: '0.05em',
    },
    button: {
      fontFamily: '"Share Tech Mono", monospace',
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 51, 0, 0.2)',
          backdropFilter: 'blur(8px)',
          border: '1px solid #00ff00',
          boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            border: '1px solid #00ff00',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          textTransform: 'uppercase',
          padding: '10px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            textShadow: '0 0 10px #00ff00',
          },
        },
        contained: {
          background: '#003300',
          border: '1px solid #00ff00',
          '&:hover': {
            background: '#004d00',
            boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)',
          },
        },
        outlined: {
          borderColor: '#00ff00',
          '&:hover': {
            borderColor: '#00ff00',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
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
          <div className="scan-line"></div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
