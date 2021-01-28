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



function getRandomColor () {
    return '#' + (
      '000000' + (Math.random() * 0x1000000).toString(16)
    ).slice(-6)
  }

function color (h1){
    h1.style.backgroundColor = getRandomColor();
}

setInterval(color, 5000, document.querySelector('h1'));


