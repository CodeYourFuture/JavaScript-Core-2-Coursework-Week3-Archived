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

//Answer to task 1
// setTimeout(function(){
//     let colorBase = "#a2";
//     let randomIndex = Math.floor(Math.random() * 10);
//     document.body.style.backgroundColor = colorBase + randomIndex;
//     console.log(randomIndex);
// }, 5000);

//Answer to task 2
function changeColor(){
    let colorBase = "#a2";
    let randomIndex = Math.floor(Math.random() * 10);
    document.body.style.backgroundColor = colorBase + randomIndex;
    console.log(randomIndex);
}
setInterval(changeColor, 5000);