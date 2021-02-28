/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
*/

// setTimeout(() => {
//   document.body.style.backgroundColor = "gold";
// }, 5000);


/*Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

// declare initialize variables
const colours = ["#3fb8af", "#7fc7af", "#dad8a7", "#ff9e9d", "#ff3d7f"];  // a set of colours to change to/from 
let index = 0;  // refers to the first colour code in colours array
setInterval(function () {
  // do this every 5 seconds
  if (index === 5) {  // if the end of colours array is reached
    index = 0;  // start over
  }
  document.body.style.backgroundColor = colours[index++]; // change document background to a different colour
 }, 5000, index);