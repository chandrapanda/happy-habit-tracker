const displayHabitData = function (label, data) {
  let myChart = document.getElementById("myChart").getContext("2d");

  const massPopChart = new Chart(myChart, {
    type: "bar", //Type of chart
    data: {
      labels: ["Today"],
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: "#add8e6",
        },
      ],
    },
  });

  return massPopChart;
};
displayHabitData("test", [1, 2, 3, 4]);
