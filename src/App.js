import React from 'react';
import Chart from './Chart';
import Navigation from './Navigation';
import Header from './Header';
import Cards from './Cards';
import './App.css';
// Import other components

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Chart />
      <Cards />
      {/* Cards section */}
    </div>
  );
}

export default App;
