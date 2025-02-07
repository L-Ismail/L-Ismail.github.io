
src="https://cdn.jsdelivr.net/npm/chart.js"

const xValues = ["C/C++", "Python", "Javascript/HTML/CSS", "SQL", "C#"];
const yValues = [100, 95, 60, 98, 30];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("graph", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false
    },
    title: {
      display: true,
      text: "Compétences logiciels en %"
    }
  }
});

