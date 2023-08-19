import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const data = [
  { date: '2023-08-01', yield: 0.75 },
  { date: '2023-08-02', yield: 0.82 },
  { date: '2023-08-03', yield: 0.88 },
  // Add more data entries
];
const chartData = {
  labels: data?.map(entry => entry.date), // Array of time labels
  datasets: [
    {
      label: 'Yield Over Time',
      data: data.map(entry => entry.yield), // Array of yield values
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const YieldOverTimeChart = () => {
  
  return (
    <div>
      <h2>Yield Over Time Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default YieldOverTimeChart;
