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
// exercise 1
function changeColor (){

 document.getElementById("main").style.background ="orange";

}
setTimeout(changeColor, 3000);

// exercise 2.
let colors=["red", "green" ,"blue"]
 let index=-1;

setInterval(() => {
    index ++;
    document.getElementById("main").style.background = colors[index];
    if(index == colors.length){
        index = -1;
    }

}, 5000);

