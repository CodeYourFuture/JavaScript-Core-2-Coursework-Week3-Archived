/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
*/
setTimeout(() => {
  document.querySelector("body").style.backgroundColor = "blue";
}, 5000);

/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

setInterval(() => {
  const hexCode = "0123456789ABCDEF";
  let colour = "#";

  for (let i = 0; i < 6; i++) {
    colour += hexCode[Math.floor(Math.random() * 16)];
  }

  document.querySelector("body").style.backgroundColor = colour;
}, 5000);
