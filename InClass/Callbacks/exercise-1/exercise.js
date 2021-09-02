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

const background = document.body;

setTimeout(() => {
   background.style.backgroundColor = "gray";
}, 5000);

/* 
        another way to perform in a more basic way

function changes(){
    background.style.backgroundColor = "brown";
}
setTimeout(changes, 2000);
*/

setInterval(() => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    background.style.backgroundColor = `#${randomColor}`;
}, 5000);