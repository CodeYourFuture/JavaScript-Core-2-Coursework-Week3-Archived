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

setTimeout(() => {
  document.body.style.backgroundColor = "yellow";
}, 5000);

let colours = ["yellow", "red", "blue", "orange", "green"];
let index = 0;
setInterval(() => {
  index = (index + 1) % 5;
  document.body.style.backgroundColor = colours[index];
}, 5000);

// function colorChange() {
//   let bgEl = document.body;
//       if(bgEl.style.backgroundColor === 'yellow') {
//         bgEl.style.backgroundColor = 'red'
//       } else {
//         bgEl.style.backgroundColor = 'yellow'
//       }
//     }
