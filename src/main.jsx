import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import Bubblesort from './Algorithms/Bubblesort.jsx';
import Insertionsort from "./Algorithms/Insertionsort.jsx";
import Mergesort from './Algorithms/Mergesort.jsx';
import QuickSort from './Algorithms/Quicksort.jsx'; // Ensure this matches the file name and path
import About from "./About/About.jsx"
import Sorting from './Algorithms/Sorting.jsx'
import Games from "./Games/Games.jsx"
import Application from './Application/Application.jsx';
import TicToeSort from "./Games/TictoeSort.jsx"
import BubbleBlitz from "./Games/BubbleBlitz.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App as a wrapper or main component
    children: [
      {
        index: true, // This will render Home component when the path is "/"
        element: <Home />,
      },
      {
        path: "bubblesort",
        element: <Bubblesort />,
      },
      {
        path: "insertionsort",
        element: <Insertionsort />,
      },
      {
        path: "mergesort",
        element: <Mergesort />,
      },
      {
        path: "quicksort",
        element: <QuickSort />,
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"sorting",
        element:<Sorting/>
      },
      {
        path:"games",
        element:<Games/>
      },
      {
        path:"applications",
        element:<Application/>
      },
      {
        path:"tictoeSort",
        element:<TicToeSort/>
      },
      {
        path:"bubbleblitz",
        element:<BubbleBlitz/>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
