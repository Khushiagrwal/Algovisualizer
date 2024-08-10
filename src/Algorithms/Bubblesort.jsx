import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Button, TextField, Slider, Typography } from '@mui/material';
import { Chart as ChartJS } from 'chart.js/auto';
import '../../public/Style/Bubblesort.css'; // Import the CSS file for custom styles

const generateRandomArray = (size, min, max) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

const Bubblesort = () => {
  const [array, setArray] = useState({ values: [], highlightedIndexes: [] });
  const [sorted, setSorted] = useState(false);
  const [arraySize, setArraySize] = useState(20);
  const [speed, setSpeed] = useState(100);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    setArray({ values: generateRandomArray(arraySize, 5, 100), highlightedIndexes: [] });
    setSorted(false);
    setTimeTaken(0);
  };

  const bubbleSort = async () => {
    let arr = array.values.slice();
    let len = arr.length;
    let i, j;
    const startTime = performance.now();

    const animate = async (arr, highlightedIndexes) => {
      return new Promise((resolve) => {
        setArray({ values: arr, highlightedIndexes });
        setTimeout(resolve, speed);
      });
    };

    for (i = 0; i < len - 1; i++) {
      for (j = 0; j < len - i - 1; j++) {
        const highlightedIndexes = [j, j + 1];

        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        await animate(arr, highlightedIndexes);
      }
    }

    setSorted(true);
    setTimeTaken(performance.now() - startTime);
  };

  const handleSort = () => {
    if (sorted) return;
    bubbleSort();
  };

  const handleSizeChange = (event) => {
    setArraySize(Number(event.target.value));
    resetArray();
  };

  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
  };

  if (!Array.isArray(array.values)) {
    console.error("Array.values is not an array!");
    return <Typography color="error">Error: Array values is not an array!</Typography>;
  }

  const data = {
    labels: array.values.map((_, idx) => idx + 1),
    datasets: [
      {
        label: 'Value',
        data: array.values,
        backgroundColor: array.values.map((_, idx) =>
          array.highlightedIndexes.includes(idx) ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)'
        ),
        borderColor: array.values.map((_, idx) =>
          array.highlightedIndexes.includes(idx) ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)'
        ),
        borderWidth: 1,
        borderSkipped: false,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.6)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        hoverBorderWidth: 2,
        barThickness: 30, // Adjust bar thickness if needed
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
        ticks: {
          color: '#333',
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#333',
          callback: (value) => value,
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
      datalabels: {
        display: true,
        color: '#333',
        anchor: 'end',
        align: 'top',
        formatter: (value) => value,
        font: {
          weight: 'bold',
        },
      },
    },
  };

  return (
    <div className="bubblesort-container">
      {/* Section 1: Information about Bubble Sort */}
      <section className="info-section">
        <Typography variant="h4" gutterBottom sx={{
            fontWeight: 'bold',
            fontSize: '2.5rem',
            marginBottom: '20px',
            width: '40vw',
            textAlign: 'center',
          }}>
          Bubble Sort Algorithm
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}>
          Bubble Sort is a straightforward and commonly taught sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}>
          Although easy to understand and implement, Bubble Sort is not efficient for large datasets. It has a time complexity of O(n²), making it impractical for large data. However, it's often used in educational settings due to its simplicity.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}>
          The algorithm is named "Bubble Sort" because smaller elements "bubble" to the top of the list as the sort progresses.
        </Typography>
      </section>

      {/* Section 2 and Section 3: Controls and Complexity Analysis */}
      <div className="flex-container">
        {/* Section 2: Controls and Complexity Analysis */}
        <section className="complexity-section">
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
          <Typography variant="h6">Complexity Analysis</Typography>
          <Typography>Time Complexity: O(n<sup>2</sup>)</Typography>
          <Typography>Space Complexity: O(1)</Typography>
          <Typography>Time Taken: {timeTaken.toFixed(2)} ms</Typography>
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
        </section>

        {/* Section 3: Bar Visualization */}
        <section className="chart-section">
          <Bar data={data} options={options} />
        </section>
      </div>
    </div>
  );
};

export default Bubblesort;
