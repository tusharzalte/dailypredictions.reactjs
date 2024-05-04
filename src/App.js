import React from 'react';
import './App.css';
import Navigation from './screens/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard/Dashboard';
// Import other components

function App() {
  return (
    <div className='App'>
    <Navigation />
    <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
    </div>
  );
}

export default App;
