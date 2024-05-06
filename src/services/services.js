import axios from "axios";

export const checkApi = async () => {
  const url = "http://127.0.0.1:5000/upload-csv";
  try {
    const response = await axios.post(url);
    console.log(response);
  } catch (error) {
    console.error("Error during API call:", error);
  }
};
