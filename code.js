window.onload = function () {
  alert(
    "Welcome to the real world, homie. The date is " +
      month +
      ". Your lucky number is " +
      luckyNum +
      ".",
  );
};

const fullDate = new Date();
// Example output: "Sun Feb 22 2026 11:14:10 GMT-0700 (Mountain Standard Time)"

const month = fullDate.toLocaleDateString(); //nifty little function. After learning string manipulation, can try to make it more manually just for fun.

//messing with data types
let myVar = "2";
console.log(typeof myVar);
myVar = +myVar;
console.log(typeof myVar);
myVar = myVar.toString(); //note, we really do need to set it = and to include ()
console.log(typeof myVar);
myVar = Number(myVar);
console.log(typeof myVar);
myVar = String(myVar);
console.log(typeof myVar);

function getRandomInt(maxIncl) {
  return Math.floor(Math.random() * maxIncl + 1);
}

let luckyNum = (myVar ** getRandomInt(69) % 420) + getRandomInt(2);
//this last bit is to make odds possible 50%ish of the time.
//still not sure how the function works though, check niext time?
