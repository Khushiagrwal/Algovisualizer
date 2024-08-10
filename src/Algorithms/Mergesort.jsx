import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Button, TextField, Slider, Typography } from '@mui/material';
// import { Chart as ChartJS } from 'chart.js/auto';
import '../../public/Style/Mergesort.css'; // Import the CSS file for custom styles

const generateRandomArray = (size, min, max) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

const MergeSort = () => {
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

  const mergeSort = async () => {
    const startTime = performance.now();

    const merge = async (arr, l, m, r) => {
      const n1 = m - l + 1;
      const n2 = r - m;

      const left = Array(n1).fill(0);
      const right = Array(n2).fill(0);

      for (let i = 0; i < n1; i++) left[i] = arr[l + i];
      for (let j = 0; j < n2; j++) right[j] = arr[m + 1 + j];

      let i = 0, j = 0, k = l;

      while (i < n1 && j < n2) {
        setHighlightIndex(k);
        if (left[i] <= right[j]) {
          arr[k] = left[i];
          i++;
        } else {
          arr[k] = right[j];
          j++;
        }
        k++;
        await animate(arr.slice());
      }

      while (i < n1) {
        setHighlightIndex(k);
        arr[k] = left[i];
        i++;
        k++;
        await animate(arr.slice());
      }

      while (j < n2) {
        setHighlightIndex(k);
        arr[k] = right[j];
        j++;
        k++;
        await animate(arr.slice());
      }
    };

    const mergeSortRecursive = async (arr, l, r) => {
      if (l >= r) {
        return;
      }

      const m = l + Math.floor((r - l) / 2);
      await mergeSortRecursive(arr, l, m);
      await mergeSortRecursive(arr, m + 1, r);
      await merge(arr, l, m, r);
    };

    await mergeSortRecursive(array.slice(), 0, array.length - 1);

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
    mergeSort();
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
    <div className="merge-sort-container">
      {/* Section 1: Information about Merge Sort */}
      <section className="info-section">
        <Typography variant="h4" gutterBottom sx={{
            fontWeight: 'bold',
            fontSize: '2.5rem',
            marginBottom: '20px',
            width: '40vw',
            textAlign: 'center',
          }}>
          Merge Sort Algorithm
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}>
          Merge Sort is a divide and conquer algorithm that divides the array into two halves, recursively sorts them, and then merges the sorted halves back together. It's efficient for large datasets and has a time complexity of O(n log n).
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}>
          The algorithm splits the array into smaller parts, sorts those parts, and then combines them to get the final sorted array. Merge Sort ensures that the entire array is sorted in an efficient manner.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            marginBottom: '20px',
            width: '70vw',
            textAlign: 'center',
          }}>
          This sorting algorithm is well-suited for linked lists and large data sets. However, it requires additional space proportional to the array size, making its space complexity O(n).
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
            <Typography>Space Complexity: O(n)</Typography>
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

export default MergeSort;
