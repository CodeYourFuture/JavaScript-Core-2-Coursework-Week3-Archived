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
setTimeout(() => {
 document.body.style.backgroundColor = "pink";
}, 5000)


//Task2:
const colors = ["blue", "red", "pink", "green"]; 
let i = 0;
setInterval(() => {document.body.style.backgroundColor = colors[i];
i = (i + 1) % colors.length;} , 2000);