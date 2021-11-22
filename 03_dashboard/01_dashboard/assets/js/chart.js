"use strict";

// Setup
const labels = ["January", "February", "March", "April"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "New Users",
      backgroundColor: ["#12C9E5", "#12C9E5", "#12C9E5", "#111b54"],
      borderColor: "rgb(255, 99, 132)",
      maxBarThickness: 30,
      data: [50, 100, 150, 200],
    },
  ],
};

// Config
const config = {
  type: "bar",
  data: data,
  options: {},
};

// Finally, render the chart using our configuration:

// === include 'setup' then 'config' above ===
const myChart = new Chart(document.getElementById("myChart"), config);
