/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).


Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

// Exercise 1 -Syllabus
const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];

// before running the code in your browser, discuss the expected order of each loop

// synchronous - loop through the array of greek gods and print the index numbers and values to the console, e.g. '1. Ares'
greekGods.forEach((item, i) => console.log(i, item));
// asynchronous - same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout()
greekGods.forEach((element, i) => {
  setTimeout(() => {
    if (i === 2) {
      console.log(i, element);
    }
  }, 2000);
  if (i === 2) {
    return;
  }
  console.log(i, element);
});

const body = document.querySelector("body");
// Task 1
setTimeout(() => {
  body.style.backgroundColor = "blue";
}, 5000);

// Task 2
let colours = ["red", "blue", "green", "purple"];

let change = 0;
setInterval(() => {
  if (change === colours.length) change = 0;
  body.style.backgroundColor = colours[change];
  change++;
}, 5000);
