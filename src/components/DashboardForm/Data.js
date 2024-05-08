const chartData = {
  labels: [
    "2024-05-01T00:00:00Z",
    "2024-05-02T00:00:00Z",
    "2024-05-03T00:00:00Z",
  ], // Example dates in ISO format
  datasets: [
    {
      label: "Demand",
      data: [100, 200, 150], // Example demand values
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export { chartData };