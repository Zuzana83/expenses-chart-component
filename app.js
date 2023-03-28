const data = [
    {
      day: "mon",
      amount: 17.45
    },
    {
      day: "tue",
      amount: 34.91
    },
    {
      day: "wed",
      amount: 52.36
    },
    {
      day: "thu",
      amount: 31.07
    },
    {
      day: "fri",
      amount: 23.39
    },
    {
      day: "sat",
      amount: 43.28
    },
    {
      day: "sun",
      amount: 25.48
    }
  ]

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const chartWrapper = document.querySelector(".chart-wrapper");

let today = new Date().getDay();
console.log(days[today]);
  
const spendingChart = data.map((day) => {
    let index = (day.amount / 3.25).toFixed(1);
    console.log(day.day);
    let isToday = day.day === days[today];
    
    return `<div class="chart">
               <span class="${isToday ? 'chart-graph today-graph' :'chart-graph'}" data-tooltip="$${day.amount}" style="height: ${index}rem"></span>
               <p class="chart-label">${day.day}</p>
             </div>`
}).join("");
  
  
chartWrapper.innerHTML = spendingChart;