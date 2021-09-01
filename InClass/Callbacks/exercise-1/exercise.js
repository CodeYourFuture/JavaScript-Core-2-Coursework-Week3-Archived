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

var temp = document.getElementById("main");
//temp.style.backgroundColor = "blue";


// window.body.setTimeout(() => {
//     temp.style.backgroundColor = "brown";
// }, 1000);

const colorArray = ["blue","black","brown","orange","red","white","grey","pink","green"];

setInterval(function(){
    // for (let index = 0; index < colorArray.length; index++) {
    //     //const element = array[index];
    //      temp.style.backgroundColor = colorArray[index];
    // }
    temp.style.backgroundColor = colorArray[Math.floor(Math.random() * 10)];
}, 5000); 