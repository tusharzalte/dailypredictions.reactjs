import React, { useState } from "react";
import axios from "axios";

const DashboardForm = () => {
  const [csvData, setcsvData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleFileChange = (event) => {
    setcsvData(event.target.files[0]); // Capture the first file
  };

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  }

  const handleUpload = async () => {
    if (!csvData) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", csvData); // Append the file. 'file' is the key expected by the server

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/upload-csv",
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
        <label htmlFor="selectionDropdown">
          Choose ForeCasting Method:
          <select
            id="selectionDropdown"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="select">Select...</option>
            <option value="short term">Short Term</option>
            <option value="medium term">Medium Term</option>
          </select>
        </label>
      </div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
};

export { DashboardForm };
