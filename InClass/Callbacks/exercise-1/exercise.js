/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
*/

function randomColour() {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  return `rgb(${red}, ${green}, ${blue})`;
}

const mainEl = document.getElementById("main");
setTimeout(function() {
  mainEl.style.background = randomColour();
}, 5000);

/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

const mainEl = document.getElementById("main");

// setTimeout(function(){
//     main.style.backgroundColor ="blue";
// }, 5000);


Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

setInterval(function() {
  mainEl.style.background = randomColour();
}, 5000);