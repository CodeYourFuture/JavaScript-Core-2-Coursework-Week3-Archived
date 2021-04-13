/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
*/
const targetDiv = document.getElementById('main');
console.log(targetDiv);

function changeColor() {
  
  setTimeout(() => {
    targetDiv.style.backgroundColor = 'red';
  }, 5000);
}

changeColor();
/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen
*/
let arrayOfColors = ['red', 'green', 'blue'];

function changeColor() {
  let i = 0;
  setInterval(() => {
    if (i === arrayOfColors.length) i = 0;
    targetDiv.style.backgroundColor = arrayOfColors[i];
    i++;
      console.log(i);
    
  }, 1000);
}
changeColor();
/*
Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/






const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];

// before running the code in your browser, discuss the expected order of each loop

// synchronous - loop through the array of greek gods and print the index numbers and values to the console, e.g. '1. Ares'

// asynchronous - same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout()

for (i = 0; i < greekGods.length; i++) {
    console.log(
        greekGods[greekGods.indexof[0] + i])
  greekGods.indexOf[0];
}
