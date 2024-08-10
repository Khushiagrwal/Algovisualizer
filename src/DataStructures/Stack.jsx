import React, { useState } from 'react';
import { Button, Container, Typography, Box, Paper, Alert } from '@mui/material';
import { Howl } from 'howler';

// Sound effects
const pushSound = new Howl({ src: ['/sounds/push.mp3'] });
const popSound = new Howl({ src: ['/sounds/pop.mp3'] });
const peekSound = new Howl({ src: ['/sounds/peek.mp3'] });

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [topValue, setTopValue] = useState(null);
  const [message, setMessage] = useState('');

  const generateRandomStack = () => {
    const randomStack = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
    setStack(randomStack);
    setMessage('Random Stack of Size 6 Generated: O(n)');
    setTopValue(null);
  };

  const handlePop = () => {
    if (stack.length > 0) {
      setStack((prevStack) => prevStack.slice(0, -1));
      setMessage('Popped: O(1)');
      setTopValue(null);
      popSound.play();
    } else {
      setMessage('Stack is empty!');
    }
  };

  const handlePeek = () => {
    if (stack.length > 0) {
      setTopValue(stack[stack.length - 1]);
      setMessage('Peeked: O(1)');
      peekSound.play();
    } else {
      setMessage('Stack is empty!');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Stack Visualizer
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Button variant="contained" onClick={generateRandomStack} sx={{ ml: 2 }}>
          Generate Random Stack
        </Button>
        <Button variant="contained" color="error" onClick={handlePop} sx={{ ml: 2 }}>
          Pop
        </Button>
        <Button variant="contained" color="secondary" onClick={handlePeek} sx={{ ml: 2 }}>
          Peek
        </Button>
      </Box>
      {message && (
        <Alert severity="info" sx={{ mb: 2 }}>
          {message}
        </Alert>
      )}
      {topValue && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Top of the stack: {topValue}
        </Alert>
      )}
      <Box display="flex" flexDirection="column-reverse" alignItems="center">
        {stack.map((item, index) => (
          <Paper
            key={index}
            sx={{ 
              width: '60px', 
              height: '60px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              marginBottom: '10px',
              backgroundColor: '#1976d2',
              color: '#fff',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            {item}
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Stack;
