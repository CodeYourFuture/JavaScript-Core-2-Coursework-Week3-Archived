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
// function changeBackgroundColor() {
//     setTimeout(() => document.querySelector('body').style.backgroundColor = 'red', 5000);
// }

function flashText() {
    let arrOfColors = ['red', 'yellow', 'black', 'white', 'green', 'brown', 'pink'];
    let color = Math.floor(Math.random() * arrOfColors.length);
    document.querySelector('#main').style.backgroundColor = arrOfColors[color];
}
function changeColor() {
    setInterval(flashText, 1000);
}

changeColor();
