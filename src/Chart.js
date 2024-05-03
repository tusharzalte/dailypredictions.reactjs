import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components you need from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Consumption', 'Cost', 'Accuracy'],
  datasets: [
    {
      label: 'Today\'s Prediction',
      data: [1645.71, 3.993, 83.46],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
    }
  ],
};

const Chart = () => {
  return (
    <div>
      <Bar data={data} options={{
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Category'
            }
          },
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Value'
            },
            beginAtZero: true
          }
        }
      }} />
    </div>
  );
};

export default Chart;
