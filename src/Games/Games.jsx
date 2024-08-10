import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Grid, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the back arrow icon
import BubbleBlitzIcon from '@mui/icons-material/Gamepad'; // Example icon
import TicTacToeIcon from '@mui/icons-material/SportsEsports'; // Example icon

const Games = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Container sx={{ paddingY: 4, marginTop: '64px', position: 'relative' }}>
      <IconButton 
        onClick={handleBack} 
        sx={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          color: 'black', 
          zIndex: 1000, 
          backgroundColor: '#F5F5F5', 
          borderRadius: '50%', 
          padding: '10px', 
          boxShadow: 3, 
          '&:hover': {
            backgroundColor: '#E0E0E0', 
            color: '#B90E0A', 
            boxShadow: 6,
          },
        }}
      >
        <ArrowBackIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <Typography variant="h4" gutterBottom align="center">
        Choose a Sorting Game
      </Typography>
      <Typography variant="h6" paragraph align="center">
        Explore these engaging games designed to enhance your understanding of sorting algorithms. Click on each card to dive into the game!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
              cursor: 'pointer', 
              boxShadow: 3, 
              '&:hover': { 
                boxShadow: 6, 
                backgroundColor: '#B90E0A', 
                '& svg': { color: 'white' },
                '& .MuiTypography-root': { color: 'white' },
              },
              transition: 'all 0.3s ease-in-out'
            }}
            onClick={() => handleNavigate('/bubbleblitz')}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                BubbleBlitz
              </Typography>
              <BubbleBlitzIcon sx={{ fontSize: 40, color: '#B90E0A', my: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Test your sorting skills in this fast-paced Bubble Sort game! Match and sort numbers to win.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
              cursor: 'pointer', 
              boxShadow: 3, 
              '&:hover': { 
                boxShadow: 6, 
                backgroundColor: '#B90E0A', 
                '& svg': { color: 'white' },
                '& .MuiTypography-root': { color: 'white' },
              },
              transition: 'all 0.3s ease-in-out'
            }}
            onClick={() => handleNavigate('/tictoesort')}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                TicTacToeSort
              </Typography>
              <TicTacToeIcon sx={{ fontSize: 40, color: '#B90E0A', my: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Sort numbers to win in this Tic-Tac-Toe style game! Place numbers strategically to achieve a sorted grid.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body1" paragraph>
          Enjoy these games and improve your sorting algorithm skills while having fun. Feel free to explore and challenge yourself!
        </Typography>
      </Box>
    </Container>
  );
};

export default Games;
