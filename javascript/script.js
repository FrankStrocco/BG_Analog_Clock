const HOURHAND = document.querySelector(".hr");
const MINUTEHAND = document.querySelector(".min");
const SECONDHAND = document.querySelector(".sec");
const SIZE = document.querySelector(".container");

// var w = window,
//     d = document,
//     e = d.documentElement,
//     g = d.getElementsByTagName('body')[0],
//     x = w.innerWidth || e.clientWidth || g.clientWidth,
//     y = w.innerHeight || e.clientHeight || g.clientHeight;
// console.log("w.innerWidth: ", w.innerWidth);
// // console.log("e.clientWidth: ", e.clientWidth);
// // console.log("g.clientWidth: ", g.clientWidth);
//
//
// console.log(`x: ${x} and y: ${y}`);
//
//
// if (x > y) {
//   document.querySelector(".face").style.width = 60 + "%";
//   document.querySelector(".face").style.height = 60 + "%";
//
//   let w = window,
//       d = document,
//       e = d.documentElement,
//       g = d.getElementsByTagName('body')[0],
//       x = w.innerWidth || e.clientWidth || g.clientWidth,
//       y = w.innerHeight || e.clientHeight || g.clientHeight;
//
//   console.log("w.innerWidth: ", w.innerWidth);
// }




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
