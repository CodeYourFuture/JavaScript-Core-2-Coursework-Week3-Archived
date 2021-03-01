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

// Task 1

let div = document.getElementById("main");

function changeColour() {
  div.style.backgroundColor = "red";
}
setTimeout(changeColour, 5000);

//Task 2

let i = 0;
let colours = ["blue", "green", "purple"];

function changeColourFiveSeconds() {
  div.style.backgroundColor = colours[i];
  i++;

  if (i > colours.length) {
    i = 0;
  };
};

setInterval(changeColourFiveSeconds, 5000);