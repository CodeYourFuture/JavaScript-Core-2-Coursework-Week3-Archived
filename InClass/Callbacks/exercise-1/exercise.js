// /*
// ================
// EXERCISE 1

// Task 1
// Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).


let body = document.querySelector("body");
setTimeout(()=>{
    body.style.backgroundColor = "#C0E7FB";
}, 5000)


// Task 2
// Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

// Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
// ================
// */

let colors = ["red", "orange", "yellow", "violet", "pink"];
let index = 0;

function change() {
  body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

setInterval(change, 5000);
