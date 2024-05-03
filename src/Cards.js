import React from 'react';

const Cards = () => {
  return (
    <section className="cards-container">
      <div className="card">
        <h3>Consumption</h3>
        <p>1645.71 kWH +4.35%</p>
      </div>
      <div className="card">
        <h3>Cost</h3>
        <p>$3.993 -2.11%</p>
      </div>
      <div className="card">
        <h3>Accuracy</h3>
        <p>83.46%</p>
      </div>
    </section>
  );
};

export default Cards;
