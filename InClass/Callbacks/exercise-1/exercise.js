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

// setTimeout(() => {
// 	document.querySelector('body').style.backgroundColor = 'green'
// }, 5000)

setInterval(() => {
  let colorArray = ["green", "red", "yellow", "pink", "blue"];
  let i = Math.round(Math.random() * (colorArray.length - 1));
  document.querySelector("body").style.backgroundColor = colorArray[i];
}, 5000);
