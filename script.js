import Countdown from "./countdown.js";

const diasParaNatal = new Countdown("24 December 2023 23:59:59 GMT-0300");

console.log(diasParaNatal.total);

// setInterval(() => {
//   console.log(diasParaNatal.total);
// }, 1000);

// const showTotalDays = diasParaNatal.total.seconds;
// const getCountdown = document.getElementById("countdown");
// getCountdown.innerText = showTotalDays;

setInterval(() => {
  const showTotalSeconds = diasParaNatal.total.seconds;
  const getCountdown = document.getElementById("countdown");
  getCountdown.innerText = showTotalSeconds;
}, 1000);
