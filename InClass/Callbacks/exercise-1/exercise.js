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
  // setTimeout(function bgColor() {
  //   document.body.style.backgroundColor = "blue";
  // },5000);


// Task-2

 
setInterval(
  function () {
    //random hex colors generated
     let randomColor = Math.floor(Math.random()*16777215).toString(16);
    // let randomColor = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = "#"+randomColor;
  },5000);