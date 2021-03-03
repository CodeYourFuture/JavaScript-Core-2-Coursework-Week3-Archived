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

// setTimeout(function(){
//     main.style.backgroundColor ="blue";
// }, 5000);

const x = Math.floor(Math.random() * 256);
const y = Math.floor(Math.random() * 256);
const z = Math.floor(Math.random() * 256);
const bgColor = "rgb(" + x + "," + y + "," + z + ")";

setInterval(function () {
    main.style.backgroundColor = bgColor;
}, 1000);
