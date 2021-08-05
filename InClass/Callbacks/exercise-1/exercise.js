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
//task 1

function changeBgColor() {
  document.body.style.backgroundColor = "lightblue";
}
setTimeout(changeBgColor, 5000);
//task 2

const bgColor = document.getElementById("main");

const allColors = [
  "green",
  "orange",
  "pink",
  "lightblue",
  "red",
  "yellow",
  "purple",
];

function changeBgColors() {
  let randomColor = Math.floor(Math.random() * allColors.length); //choose a random color from allColors Array
  bgColor.style.backgroundColor = allColors[randomColor];
}
setInterval(changeBgColors, 5000);
