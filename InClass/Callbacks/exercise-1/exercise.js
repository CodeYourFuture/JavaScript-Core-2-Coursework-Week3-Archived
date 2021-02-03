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

mainPage = document.querySelector('#main');
// Task 1 - A function to change the background color after 5 seconds
setTimeout(function() {
    document.body.style.backgroundColor = 'blue';
}, 5000);

// Task 2 - An updated function to change the background color every 5 seconds
var i = 0;
function changeBgColor() {
  var color = ["blue", "white", "green", "yellow", "gray"];
  document.body.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(changeBgColor, 5000);

