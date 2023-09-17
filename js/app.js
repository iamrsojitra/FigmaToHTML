function initChart() {
  const ctx = document.getElementById("chart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          data: [100, 250, 100, 0, 200, 300, 400, 380],
          fill: false,
          borderColor: "#FF6B00",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
  });
}
document.body.onload = function () {
  initChart();
};
