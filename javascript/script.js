const HOURHAND = document.querySelector(".hr");
const MINUTEHAND = document.querySelector(".min");
const SECONDHAND = document.querySelector(".sec");
const SIZE = document.querySelector(".container");

function getDaHeight(){
  let daHeight = document.querySelector(".container").offsetHeight;
  return daHeight;
}

function getDaWidth(){
  let daWidth = document.querySelector(".container").offsetWidth;
  return daWidth;
}

var daWidth = getDaWidth();

var daHeight = getDaHeight();

console.log("daHeight: ", daHeight);
console.log("daWidth", daWidth);

console.log("SIZE: ", SIZE);
var computedHeight = getComputedStyle(document.querySelector(".container")).height;

console.log("computedHeight: ", computedHeight);

var containerHeight = SIZE.style.offsetHeight;
console.log("containerHeight: ", containerHeight);

var date = new Date();
console.log(date);
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log("hour: " + hr + " minute: " + min + " second: " + sec);

let hrPosition = hr * (360/12) + (min * (360/60)/12);
let minPosition = (min * (360/60)) + (sec * (360/60)/60);
let secPosition = sec * (360/60);

function runTheClock(){

  hrPosition = hrPosition+(3/360);
  minPosition = minPosition + (6/60);
  secPosition = secPosition + 6;


  HOURHAND.style.transform = "rotate(" +hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" +minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" +secPosition + "deg)";


}


var interval = setInterval(runTheClock, 1000);
