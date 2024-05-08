import React, { useState } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardForm = () => {
  const [csvData, setcsvData] = useState(null);
  const [chartData, setChartData] = useState({});
  const [selectedOption, setSelectedOption] = useState("select");

  const handleFileChange = (event) => {
    setcsvData(event.target.files[0]); 
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
          header: true,
          dynamicTyping: true,
          complete: function(results) {
              console.log("Parsing results:", results);
              processChartData(results.data);
          }
      });
    }
  };

  const processChartData = (data) => {
    const labels = data.map(item => item.datetime);
    const values = data.map(item => parseFloat(item.nat_demand));
    setChartData({
        labels: labels,
        datasets: [
            {
                label: 'Natural Demand',
                data: values,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                fill: false,
                tension: 0.1
            }
        ]
    });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUpload = async () => {
    if (!csvData) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", csvData); // Append the file. 'file' is the key expected by the server

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/get_short_term",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Server Response:", response.data);
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed!");
    }
  };  

  return (
    <div>
      <div>
        <label htmlFor="selectionDropdown">Choose Forecasting Method:</label>
        <select
          id="selectionDropdown"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="select">Select...</option>
          <option value="short term">Short Term</option>
          <option value="medium term">Medium Term</option>
        </select>
      </div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Process Data</button>
      {chartData.labels && <Line data={chartData} options={{
          scales: {
            x: {
              title: {
                display: true,
                text: 'DateTime'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Natural Demand (MW)'
              }
            }
          }
        }} />}
    </div>
  );
};

export { DashboardForm };
