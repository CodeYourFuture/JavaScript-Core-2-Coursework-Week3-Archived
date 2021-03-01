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

const main = document.getElementById("main");
// Task 1:
// const changeBgColour = () => {
//   main.style.backgroundColor = "yellow";
// };

// setTimeout(changeBgColour, 5000);

// Task 2:
const coloursArray = [
  "pink",
  "blue",
  "green",
  "grey",
  "yellow",
  "orange",
  "red",
  "brown",
  "purple",
];

const changeBgToRandomColor = () => {
  const randomColor = Math.floor(Math.random() * coloursArray.length);
  main.style.backgroundColor = coloursArray[randomColor];
};

setInterval(changeBgToRandomColor, 5000);
