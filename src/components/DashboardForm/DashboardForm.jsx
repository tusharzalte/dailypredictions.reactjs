import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./DashboardForm.module.css";

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
  const [selectedOption, setSelectedOption] = useState(null);

  const handleFileChange = (event) => {
    setcsvData(event.target.files[0]);
    const file = event.target.files[0];
  };

  const processChartData = (data) => {
    // const labels = data.map(item => item.datetime);
    const labels = data.datetime;
    // const values = data.map(item => parseFloat(item.nat_demand));
    const values = data.nat_demand;
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Natural Demand",
          data: values,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          fill: false,
          tension: 0.1,
        },
      ],
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
        `http://127.0.0.1:5000/${selectedOption}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Server Response:", response.data);
      console.log(response.data.dates);
      console.log(response.data.predicted_demand);
      // const demand = response.data.predicted_demand.flat()
      const times = response.data.dates.map((dateStr) => {
        // Split the string to isolate the time component
        const parts = dateStr.split(" "); // Split by space
        return parts[4]; // The time component is the fifth element
      });
      const dates = response.data.dates.map((dateStr) => {
        // Split the string to isolate the time component
        const parts = dateStr.split(" "); // Split by space
        return `${parts[1]} ${parts[2]} ${parts[3]}`; // The time component is the fifth element
      });

      // console.log(demand)
      if (response.data) {
        processChartData({
          datetime: selectedOption == "get_short_term" ? times : dates,
          nat_demand: response.data.predicted_demand,
        });
      }

      alert("Upload successful!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <label htmlFor="selectionDropdown">Choose Forecasting Method:</label>
        <select
          id="selectionDropdown"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Method...</option>
          <option value="get_short_term">Short Term</option>
          <option value="get_medium_term">Medium Term</option>
        </select>
        <div className={`${styles.uploadOption} grid gap-2`}>
          <label htmlFor="csvFile">Upload a CSV File: </label>
          <input type="file" accept=".csv" onChange={handleFileChange} />
        </div>
        <button
          onClick={handleUpload}
          className={`${styles.btnUpload} button btn-solid-primary`}
        >
          Process Data
        </button>
      </div>

      <div className={styles.graph}>
        {chartData.labels && (
          <Line
            data={chartData}
            options={{
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "DateTime",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: " Demand (MW)",
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export { DashboardForm };
