async function countEntries() {
  const habit_id = document.querySelector("#addBtn").dataset.id;
  console.log(habit_id);
  const response = await fetch(`/api/entry/tracking/${habit_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const entries = await response.json();

  let myChart = document.getElementById("myChart").getContext("2d");
  const massPopChart = new Chart(myChart, {
    type: "bar", //Type of chart
    data: {
      labels: ["Total Entries"],
      datasets: [
        {
          label: "Entries",
          data: [entries.length],
          backgroundColor: "#add8e6",
        },
      ],
    },
  });
  return massPopChart;
}

// const displayHabitData = function (label, data) {
// };

// displayHabitData("test", [1, 2, 3, 4]);
countEntries();
