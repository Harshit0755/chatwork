import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import MaterializedHeader from './MaterializedHeader';
import FileInput from './FileInput';
import './App.css'; // Import the CSS file

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Blue primary color
    },
    secondary: {
      main: '#FF4081', // Accent color
    },
    background: {
      default: '#F5F5F5', // Light background color
    },
    text: {
      primary: '#333', // Dark text color
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MaterializedHeader />
      <FileInput />
      {/* Wavy background at the bottom */}
      <div className="wave-background"></div>
    </ThemeProvider>
  );
};

export default App;
