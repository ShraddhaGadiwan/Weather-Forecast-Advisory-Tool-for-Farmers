import React from "react";
import { Line } from "react-chartjs-2";

// Register required Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const WeatherChart = ({ weather }) => {
  if (!weather || !weather.list) return null;

  const temps = weather.list.slice(0, 6).map((i) => i.main.temp);
  const labels = weather.list.slice(0, 6).map((i) => i.dt_txt);

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Temperature Trend</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
