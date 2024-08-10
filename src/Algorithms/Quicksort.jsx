import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Button, TextField, Slider, Typography } from '@mui/material';
import { Chart as ChartJS } from 'chart.js/auto';
import '../../public/Style/Quicksort.css'; // Import the CSS file for custom styles

const generateRandomArray = (size, min, max) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

const QuickSort = () => {
  const [array, setArray] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [arraySize, setArraySize] = useState(20);
  const [speed, setSpeed] = useState(100);
  const [timeTaken, setTimeTaken] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(null);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    setArray(generateRandomArray(arraySize, 5, 100));
    setSorted(false);
    setTimeTaken(0);
    setHighlightIndex(null);
  };

  const quickSort = async () => {
    const startTime = performance.now();

    const partition = async (arr, low, high) => {
      let pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        setHighlightIndex(j);
        if (arr[j] <= pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          await animate(arr.slice());
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      await animate(arr.slice());
      return i + 1;
    };

    const quickSortRecursive = async (arr, low, high) => {
      if (low < high) {
        let pi = await partition(arr, low, high);
        await quickSortRecursive(arr, low, pi - 1);
        await quickSortRecursive(arr, pi + 1, high);
      }
    };

    await quickSortRecursive(array.slice(), 0, array.length - 1);

    setSorted(true);
    setTimeTaken(performance.now() - startTime);
  };

  const animate = async (arr) => {
    return new Promise((resolve) => {
      setArray(arr);
      setTimeout(resolve, speed);
    });
  };

  const handleSort = () => {
    if (sorted) return;
    quickSort();
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
          idx === highlightIndex ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)'
        ),
        borderColor: array.map((_, idx) =>
          idx === highlightIndex ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)'
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
    <div className="quick-sort-container">
      {/* Section 1: Information about Quick Sort */}
      <section className="info-section">
        <Typography variant="h4" gutterBottom sx={{
            fontWeight: 'bold',
            fontSize: '2.5rem',
            marginBottom: '20px',
            width: '40vw',
            textAlign: 'center',
          }}>
          Quick Sort Algorithm
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}>
          Quick Sort is a highly efficient sorting algorithm that divides the array into smaller sub-arrays based on a pivot element. It's known for its average-case time complexity of O(n log n).
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}>
          The algorithm picks an element as a pivot and partitions the array into two halves. The sub-arrays are then sorted recursively, leading to a fully sorted array.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}>
          While Quick Sort is often faster in practice compared to other algorithms, its worst-case time complexity can reach O(n²) when the smallest or largest element is always chosen as the pivot.
        </Typography>
      </section>

      {/* Flex Container for Sections 2 and 3 */}
      <div className="flex-container">
        {/* Section 2: Controls and Complexity Analysis */}
        <section className="controls-analysis-section">
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
            <Typography variant="h6">Complexity Analysis</Typography>
            <Typography>Time Complexity: O(n log n)</Typography>
            <Typography>Space Complexity: O(log n)</Typography>
            <Typography>Time Taken: {timeTaken.toFixed(2)} ms</Typography>
          </div>
        </section>

        {/* Section 3: Bar Visualization */}
        <section className="chart-section">
          <Bar data={data} options={options} />
        </section>
      </div>
    </div>
  );
};

export default QuickSort;
