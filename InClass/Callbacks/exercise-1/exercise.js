/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page 
after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds 
to something different. Hint: try searching for setInterval.
Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

// Task 1
let body = document.getElementById('main');

setTimeout(function () {
    body.style.backgroundColor = 'red';
}, 5000);

// Task 2
// random color generator
// https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

setInterval(function () {
    body.style.backgroundColor = generateRandomColor();
}, 5000);