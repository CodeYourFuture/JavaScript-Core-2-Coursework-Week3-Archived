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

const mainEl = document.getElementById("main");

// // Task 1
// setTimeout(() => {
//     mainEl.style.backgroundColor = "red";
// }, 5000);

// Task 2
setInterval(() => {
    mainEl.style.backgroundColor = mainEl.style.backgroundColor === "red" ? "blue" : "red";
}, 5000);