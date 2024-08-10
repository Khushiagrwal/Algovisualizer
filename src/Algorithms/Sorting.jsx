import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the back arrow icon
import BubbleSortIcon from '@mui/icons-material/Sort'; // Example icon
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'; // Example icon
import MergeIcon from '@mui/icons-material/Merge'; // Example icon
import SortIcon from '@mui/icons-material/SortByAlpha'; // Example icon

const Sorting = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        justifyContent: 'center', 
        marginTop: '90px',
        position: 'relative' // Ensure position context for absolute children
      }}
    >
      <IconButton 
        onClick={handleBack} 
        sx={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          color: 'black', 
          zIndex: 1000, // Ensure button appears above other elements
          backgroundColor: '#F5F5F5', // Light background color
          borderRadius: '50%', // Circular button
          padding: '10px', // Add padding
          boxShadow: 3, // Add shadow for depth
          '&:hover': {
            backgroundColor: '#E0E0E0', // Slightly darker on hover
            color: '#B90E0A', // Change icon color on hover
            boxShadow: 6, // Enhance shadow on hover
          },
        }}
      >
        <ArrowBackIcon sx={{ fontSize: 30 }} /> {/* Adjust icon size */}
      </IconButton>
      <Typography variant="h3" gutterBottom align="center">
        Choose a Sorting Algorithm
      </Typography>
      <Typography variant="h6" paragraph align="center">
        Sorting algorithms are fundamental to computer science and are used to arrange data in a specific order. They are essential for tasks such as searching, organizing, and efficiently processing data.
      </Typography>
      <Typography variant="h6" paragraph align="center">
        Here are some common sorting algorithms and their uses. Click on each card to learn more about the algorithm and see it in action.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              cursor: 'pointer', 
              boxShadow: 3, 
              height: '100%',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease-in-out',
              '&:hover': { 
                backgroundColor: '#B90E0A',
                color: 'white',
                '& svg': { 
                  color: 'white' 
                },
                boxShadow: 6,
              }
            }}
            onClick={() => handleNavigate('/bubblesort')}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <BubbleSortIcon sx={{ fontSize: 60, color: '#B90E0A', mb: 2 }} />
              <Typography variant="h5" component="div">
                Bubble Sort
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <strong>What It Does:</strong> Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <strong>Why Use It:</strong> It's a simple algorithm that's easy to understand and implement. However, it’s inefficient for large datasets due to its O(n²) time complexity.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              cursor: 'pointer', 
              boxShadow: 3, 
              height: '100%',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease-in-out',
              '&:hover': { 
                backgroundColor: '#B90E0A',
                color: 'white',
                '& svg': { 
                  color: 'white' 
                },
                boxShadow: 6,
              }
            }}
            onClick={() => handleNavigate('/insertionsort')}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <InsertDriveFileIcon sx={{ fontSize: 60, color: '#B90E0A', mb: 2 }} />
              <Typography variant="h5" component="div">
                Insertion Sort
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <strong>What It Does:</strong> Insertion Sort builds the final sorted array one item at a time by comparing each new element to the already-sorted portion and inserting it in the correct position.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <strong>Why Use It:</strong> It's efficient for small datasets or partially sorted lists and has a time complexity of O(n²) in the worst case but O(n) in the best case.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              cursor: 'pointer', 
              boxShadow: 3, 
              height: '100%',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease-in-out',
              '&:hover': { 
                backgroundColor: '#B90E0A',
                color: 'white',
                '& svg': { 
                  color: 'white' 
                },
                boxShadow: 6,
              }
            }}
            onClick={() => handleNavigate('/mergesort')}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <MergeIcon sx={{ fontSize: 60, color: '#B90E0A', mb: 2 }} />
              <Typography variant="h5" component="div">
                Merge Sort
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <strong>What It Does:</strong> Merge Sort divides the list into halves, recursively sorts each half, and then merges the sorted halves to produce the final sorted list.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <strong>Why Use It:</strong> It's highly efficient with a time complexity of O(n log n) and is well-suited for large datasets or external sorting.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              cursor: 'pointer', 
              boxShadow: 3, 
              height: '100%',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease-in-out',
              '&:hover': { 
                backgroundColor: '#B90E0A',
                color: 'white',
                '& svg': { 
                  color: 'white' 
                },
                boxShadow: 6,
              }
            }}
            onClick={() => handleNavigate('/quicksort')}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <SortIcon sx={{ fontSize: 60, color: '#B90E0A', mb: 2 }} />
              <Typography variant="h5" component="div">
                Quick Sort
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <strong>What It Does:</strong> Quick Sort selects a 'pivot' element, partitions the array into elements less than and greater than the pivot, and recursively sorts the partitions.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <strong>Why Use It:</strong> It is very efficient with an average time complexity of O(n log n) and is suitable for large datasets. However, its performance can degrade to O(n²) in the worst case.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sorting;
