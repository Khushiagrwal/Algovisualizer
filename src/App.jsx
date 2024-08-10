import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Stack  from './DataStructures/Stack';
import LinkedList from './DataStructures/LinkedList';

function App() {
  return (
    <div>
      <Navbar/>
      <Outlet /> 
      {/* This is where the nested route content will be rendered */}
     
    </div>
  );
}

export default App;
