import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Button, TextField, Slider, Typography, Box } from '@mui/material';
import { Chart as ChartJS } from 'chart.js/auto';
import '../../public/Style/Insertionsort.css'; // Import the CSS file for custom styles

const generateRandomArray = (size, min, max) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

const InsertionSort = () => {
  const [array, setArray] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [arraySize, setArraySize] = useState(20);
  const [speed, setSpeed] = useState(100);
  const [timeTaken, setTimeTaken] = useState(0);
  const [highlightIndices, setHighlightIndices] = useState([]); // Track indices of bars being highlighted

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    setArray(generateRandomArray(arraySize, 5, 100));
    setSorted(false);
    setTimeTaken(0);
    setHighlightIndices([]);
  };

  const insertionSort = async () => {
    let arr = array.slice();
    let len = arr.length;
    const startTime = performance.now();

    const animate = async (arr) => {
      return new Promise((resolve) => {
        setArray(arr);
        setTimeout(resolve, speed);
      });
    };

    for (let i = 1; i < len; i++) {
      let key = arr[i];
      let j = i - 1;
      
      setHighlightIndices([i, j]); // Highlight the current index and the key index
      
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        await animate(arr.slice());
      }
      arr[j + 1] = key;
      await animate(arr.slice());
    }

    setSorted(true);
    setTimeTaken(performance.now() - startTime);
  };

  const handleSort = () => {
    if (sorted) return;
    insertionSort();
  };

  const handleSizeChange = (event) => {
    setArraySize(Number(event.target.value));
    resetArray();
  };

  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
  };

  const data = {
    labels: array.map((_, idx) => idx + 1),
    datasets: [
      {
        label: 'Value',
        data: array,
        backgroundColor: array.map((_, idx) =>
          highlightIndices.includes(idx) ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)'
        ),
        borderColor: array.map((_, idx) =>
          highlightIndices.includes(idx) ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)'
        ),
        borderWidth: 1,
        borderSkipped: false,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.6)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    animation: {
      duration: speed,
      easing: 'easeInOutQuad',
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <Box className="insertion-sort-container">
      <section className="info-section">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: '2.5rem',
            marginBottom: '20px',
            width: '40vw',
            textAlign: 'center',
          }}
        >
          Insertion Sort
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}
        >
          Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. The algorithm works by dividing the list into a sorted and an unsorted region, and repeatedly inserting the next element from the unsorted region into the correct position in the sorted region.
        </Typography>
      </section>
      <Box className="content-sections">
        <section className="controls-section">
          <div className="controls">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSort}
              disabled={sorted}
              className="button"
            >
              Sort
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={resetArray}
              className="button"
            >
              Reset
            </Button>
          </div>
          <div className="settings">
            <TextField
              label="Array Size"
              type="number"
              value={arraySize}
              onChange={handleSizeChange}
              InputProps={{ inputProps: { min: 5, max: 100 } }}
              className="textfield"
            />
            <div className="slider-container">
              <Typography gutterBottom>Sorting Speed (ms)</Typography>
              <Slider
                value={speed}
                onChange={handleSpeedChange}
                step={10}
                min={10}
                max={1000}
                valueLabelDisplay="auto"
              />
            </div>
          </div>
          <div className="analysis">
            <Typography variant="h6">Analysis</Typography>
            <Typography>Time Complexity: O(n<sup>2</sup>)</Typography>
            <Typography>Space Complexity: O(1)</Typography>
            <Typography>Time Taken: {timeTaken.toFixed(2)} ms</Typography>
          </div>
        </section>
        <section className="chart-section">
          <Bar data={data} options={options} />
        </section>
      </Box>
    </Box>
  );
};

export default InsertionSort;
