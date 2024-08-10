import React, { useState, useEffect, useRef } from 'react';
import { Button, Typography, Paper } from '@mui/material';

const generateRandomArray = (size, min, max) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

// Function to calculate the minimum number of swaps required to sort the array
const calculateMinimumSwaps = (arr) => {
  let swaps = 0;
  let tempArray = arr.slice();
  for (let i = 0; i < tempArray.length - 1; i++) {
    for (let j = 0; j < tempArray.length - i - 1; j++) {
      if (tempArray[j] > tempArray[j + 1]) {
        [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
        swaps++;
      }
    }
  }
  return swaps;
};

const BubbleBlitz = () => {
  const [array, setArray] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isSorted, setIsSorted] = useState(false);
  const [dragging, setDragging] = useState(null);
  const [minMoves, setMinMoves] = useState(0);
  const [result, setResult] = useState(null);
  const [sortInProgress, setSortInProgress] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = generateRandomArray(8, 1, 100);
    setArray(newArray);
    setMoves(0);
    setIsSorted(false);
    setDragging(null);
    setResult(null);
    setMinMoves(calculateMinimumSwaps(newArray));
  };

  const swap = (i, j) => {
    let newArray = [...array];
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    setArray(newArray);
    setMoves(moves + 1);
    checkIfSorted(newArray);
  };

  const checkIfSorted = (arr) => {
    if (arr.every((val, i, arr) => !i || arr[i - 1] <= val)) {
      setIsSorted(true);
      setSortInProgress(false);
      if (moves <= minMoves) {
        setResult('win');
      } else {
        setResult('lose');
      }
    }
  };

  const visualizeSort = async () => {
    setSortInProgress(true);
    let arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]); // Trigger re-render
          await new Promise(resolve => setTimeout(resolve, 500)); // Pause for visualization
        }
      }
    }
    setSortInProgress(false);
    checkIfSorted(arr);
  };

  const handleDragStart = (index) => {
    setDragging(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (dragging !== null && dragging !== index) {
      swap(dragging, index);
      setDragging(null);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Bubble Blitz</Typography>
      <Typography variant="h6" gutterBottom>
        Drag and drop the numbers to sort them in ascending order. You can also click "Start Sort" to see the algorithm in action.
      </Typography>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {array.map((value, index) => (
          <Paper
            key={index}
            elevation={4}
            draggable={!isSorted && !sortInProgress}
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              width: '60px',
              height: '60px',
              lineHeight: '60px',
              margin: '5px',
              backgroundColor: isSorted ? 'lightgreen' : 'lightcoral',
              cursor: isSorted || sortInProgress ? 'default' : 'move',
              textAlign: 'center',
              fontSize: '18px',
              borderRadius: '50%', // Makes the element circular
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Adds shadow for 3D effect
              transform: 'scale(1.1)', // Slightly enlarges the element
              transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for effects
            }}
          >
            {value}
          </Paper>
        ))}
      </div>
      <div style={{ margin: '20px 0' }}>
        <Typography variant="h6">Moves: {moves}</Typography>
        {result === 'win' && <Typography variant="h6" color="primary">You Win!</Typography>}
        {result === 'lose' && <Typography variant="h6" color="error">You Lose!</Typography>}
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={resetArray}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={visualizeSort}
        disabled={sortInProgress || isSorted}
        style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}
      >
        Start Sort
      </Button>
    </div>
  );
};

export default BubbleBlitz;
