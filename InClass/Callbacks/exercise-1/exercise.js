/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).*/

let body = document.body;
const colours = ['red', 'green', 'blue', 'black', 'yellow'];

    setTimeout( () => {

      body.style.backgroundColor = 'red';
}, 5000);

/*Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen*/

let i = 0;
    setInterval( () => {

    if (i === colours.length) i = 0;
    body.style.backgroundColor = colours[i];
    i++;
}, 5000) 


/*Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/
