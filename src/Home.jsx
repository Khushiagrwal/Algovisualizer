import React, { useRef, useState } from 'react';
import { Box, Button, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Sort, SportsEsports, Apps } from '@mui/icons-material';
import code from '../public/Images/home.avif';
import About from './About/About';
import { useTheme } from '@mui/material/styles';

export default function ActionAreaCard() {
  const section2Ref = useRef(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    handleScroll(section2Ref);
    
    // Reset button color after a short delay
    setTimeout(() => {
      setButtonClicked(false);
    }, 500);
  };

  return (
    <Box>
      {/* Section 1: Background Image with "Get Started" Button */}
      <Box
        sx={{
          height: { xs: 'auto', sm: '100vh' },
          backgroundImage: `url(${code})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: { xs: '10px', sm: '20px' },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to AlgoVisualizer
        </Typography>
        <Typography variant="h6" gutterBottom>
          Explore sorting algorithms with interactive visualizations.
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{
            mt: 2,
            backgroundColor: buttonClicked ? '#B90E0A' : 'transparent',
            color: buttonClicked ? 'white' : 'inherit',
            border: buttonClicked ? 'none' : '2px solid white',
            borderRadius: '0',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: buttonClicked ? '#B90E0A' : '#B90E0A',
              color: 'white',
            },
          }}
          onClick={handleButtonClick}
        >
          Get Started
        </Button>
      </Box>

      {/* Section 2: Categories */}
      <Box
        ref={section2Ref}
        sx={{
          padding: { xs: '20px', sm: '40px 20px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap:4,
          backgroundColor: isDarkMode ? 'black' : 'white',
          color: isDarkMode ? 'white' : 'black',
          marginTop: { xs: '1rem', sm: '2rem' }, // Adjusted gap
        }}
      >
        <Typography variant="h4" gutterBottom>
          Categories
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          flexWrap="wrap"
          gap={2}
        >
          <NavLink to="/sorting" style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                maxWidth: { xs: '100%', sm: 345 },
                height: { xs: 'auto', sm: '350px' },
                transition: 'all 0.3s ease-in-out',
                backgroundColor: isDarkMode ? '#444' : 'white',
                color: isDarkMode ? 'white' : 'black',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  backgroundColor: '#B90E0A',
                  '& svg': {
                    color: 'white',
                  },
                },
              }}
            >
              <CardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                  <Sort sx={{ fontSize: { xs: 60, sm: 100 }, color: '#B90E0A' }} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sorting Algorithms
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dive into various sorting algorithms and see how they work step-by-step with visual aids.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>

          <NavLink to="/games" style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                maxWidth: { xs: '100%', sm: 345 },
                height: { xs: 'auto', sm: '350px' },
                transition: 'all 0.3s ease-in-out',
                backgroundColor: isDarkMode ? '#444' : 'white',
                color: isDarkMode ? 'white' : 'black',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  backgroundColor: '#B90E0A',
                  '& svg': {
                    color: 'white',
                  },
                },
              }}
            >
              <CardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                  <SportsEsports sx={{ fontSize: { xs: 60, sm: 100 }, color: '#B90E0A' }} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Games
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Play interactive games designed to help you understand sorting algorithms in a fun way.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>

          <NavLink to="/applications" style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                maxWidth: { xs: '100%', sm: 345 },
                height: { xs: 'auto', sm: '350px' },
                transition: 'all 0.3s ease-in-out',
                backgroundColor: isDarkMode ? '#444' : 'white',
                color: isDarkMode ? 'white' : 'black',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  backgroundColor: '#B90E0A',
                  '& svg': {
                    color: 'white',
                  },
                },
              }}
            >
              <CardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                  <Apps sx={{ fontSize: { xs: 60, sm: 100 }, color: '#B90E0A' }} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Applications
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore real-world applications of sorting algorithms across different domains.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>
        </Box>
      </Box>
      <About />
    </Box>
  );
}
