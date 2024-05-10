import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Papa from "papaparse";
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
    <div style={styles.container}>
      <div style={styles.header}>
        <label htmlFor="selectionDropdown">Choose Forecasting Method:</label>
        <select
          id="selectionDropdown"
          value={selectedOption}
          onChange={handleOptionChange}
          required
        >
          <option value="">Select...</option>
          <option value="get_short_term">Short Term</option>
          <option value="get_medium_term">Medium Term</option>
        </select>
      </div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload} style={styles.buttonStyle}>
        Process Data
      </button>
      <div style={styles.graph}>
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
const styles = {
  container: {
    minHeight: "calc(50vh)",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  graph: {
    paddingTop: "20px",
  },
  buttonStyle: {
    padding: "5px 10px", // Medium size padding
    fontSize: "12px", // Readable font size
    backgroundColor: "#007bff", // Bootstrap primary color
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  header: {
    marginBottom: "20px",
  },
  dropdown: {
    marginLeft: "10px",
    padding: "8px 16px",
    borderRadius: "4px",
    borderColor: "#ccc",
  },
  input: {
    display: "block",
    width: "100%",
    margin: "20px 0",
    padding: "8px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  chartOptions: {
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
          text: "Natural Demand (MW)",
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  },
};
export { DashboardForm };
