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

// Task -1
const body = document.querySelector("body");
function changeBodyColor() {
  body.style.backgroundColor = "green"
}
setTimeout(changeBodyColor, 5000);


// Task -2
colors = ["green", "yellow", "blue", "purple", "pink", "coral", "lightblue", "orange"];
function randomNumber(){
  const number = Math.floor(Math.random() * colors.length);
  return number;
};

function changeBodyColor1() {
  body.style.backgroundColor = colors[randomNumber()];
  randomNumber();
  console.log(randomNumber());
};

let interval = setInterval(changeBodyColor1, 1000);

setTimeout(() => {
  clearInterval(interval);
  body.style.backgroundColor = "white";
}, 10000);