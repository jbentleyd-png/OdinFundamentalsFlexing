window.onload = function () {
  alert("Welcome to the real world, homie. The date is " + month + ".");
};

const fullDate = new Date();
// Example output: "Sun Feb 22 2026 11:14:10 GMT-0700 (Mountain Standard Time)"

const month = fullDate.toLocaleDateString(); //nifty little function. After learning string manipulation, can try to make it more manually just for fun.
