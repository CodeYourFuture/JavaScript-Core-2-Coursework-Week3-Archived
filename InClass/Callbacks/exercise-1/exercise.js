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
//Task 1
setTimeout(function()  {
    document.body.style.background ="red";
  }, 5000);

  //task 2

  let i = 0;
function BackgroundChange() {
  let color = ["blue", "green", "pink", "yellow"];
  document.body.style.backgroundColor = color[i];
  i++;

  if (i > color.length - 1) {
    i = 0;
  }
}
setInterval(BackgroundChange, 1000);
