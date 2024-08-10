import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 1)', // Solid black background
        backdropFilter: 'blur(5px)', // Blur effect for the AppBar background
        top: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure AppBar is above other content
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ 
            display: { xs: 'block', sm: 'none' },
            borderRadius: 0, // Remove border radius
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginRight: 'auto', // Align logo to the left
              borderRadius: 0, // Remove border radius
            }}
          >
            AlgoVisualizer
          </Button>
        </Box>
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ 
          display: { xs: 'block', sm: 'none' },
          borderRadius: 0, // Remove border radius
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ p: 2, borderRadius: 0 }}> {/* Add padding and remove border radius */}
            <Button
              component={Link}
              to="/"
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                borderRadius: 0, // Remove border radius
                '&:hover': {
                  backgroundColor: '#B90E0A', // #B90E0A background on hover
                },
              }}
            >
              AlgoVisualizer
            </Button>
          </Box>
        </div>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
