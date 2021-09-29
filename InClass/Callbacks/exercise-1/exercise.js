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
function changeBackgroundColor(){
   document.body.style.backgroundColor = "green";
}
setTimeout(changeBackgroundColor,5000);

// Task2
let i = 0 ; 
color = new Array("red","green","blue","yellow","purple","gray","white") ;
function change(){
i++ ;
if(i >= color.length) {
i = 0 ;
}
document.body.style.backgroundColor = color[i];
}
function continueChangeBackground(){
setInterval("change()",1000) ;
}
window.onload = continueChangeBackground() ;
