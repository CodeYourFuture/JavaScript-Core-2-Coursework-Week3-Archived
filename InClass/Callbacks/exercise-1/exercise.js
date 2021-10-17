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
function changeBGColour(){
    const colours = ["red", "blue", "green", "pink", "orange"]
    document.body.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)]
}
//task 1
//setTimeout(changeBGColour, 5000)

//task 2
//chooses a random colour every second
setInterval(changeBGColour, 1000);