import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Drawer, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MaterializedHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: 1000,
        boxShadow: 3, // Subtle elevation
        backgroundColor: '#263238', // Darker background
        transition: 'background-color 0.3s ease', // Smooth background color transition
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}
      >
        {/* Logo / App Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#FFFFFF',
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
          }}
        >
          SummarizeIt
        </Typography>

        {/* Mobile Hamburger Icon */}
        <IconButton
          edge="start"
          sx={{
            display: { xs: 'block', sm: 'none' }, // Only show on small screens
            color: 'white',
          }}
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          <Button
            sx={{
              color: 'white',
              margin: '0 10px',
              '&:hover': {
                backgroundColor: '#455A64',
                transition: 'background-color 0.3s ease',
              },
            }}
            onClick={() => alert('Home clicked')}
          >
            Home
          </Button>
          <Button
            sx={{
              color: 'white',
              margin: '0 10px',
              '&:hover': {
                backgroundColor: '#455A64',
                transition: 'background-color 0.3s ease',
              },
            }}
            onClick={() => alert('About clicked')}
          >
            About
          </Button>
          <Button
            sx={{
              color: 'white',
              margin: '0 10px',
              '&:hover': {
                backgroundColor: '#455A64',
                transition: 'background-color 0.3s ease',
              },
            }}
            onClick={() => alert('Contact clicked')}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            paddingTop: 7,
            backgroundColor: '#263238', // Same dark background for mobile drawer
            height: '100%',
          }}
        >
          <Button
            sx={{
              color: 'white',
              margin: '15px 0',
              width: '100%',
              '&:hover': {
                backgroundColor: '#455A64',
              },
            }}
            onClick={() => alert('Home clicked')}
          >
            Home
          </Button>
          <Button
            sx={{
              color: 'white',
              margin: '15px 0',
              width: '100%',
              '&:hover': {
                backgroundColor: '#455A64',
              },
            }}
            onClick={() => alert('About clicked')}
          >
            About
          </Button>
          <Button
            sx={{
              color: 'white',
              margin: '15px 0',
              width: '100%',
              '&:hover': {
                backgroundColor: '#455A64',
              },
            }}
            onClick={() => alert('Contact clicked')}
          >
            Contact
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default MaterializedHeader;
