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
const arrayOfPictures = [
    "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/6931284/pexels-photo-6931284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/3483966/pexels-photo-3483966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/6341413/pexels-photo-6341413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

];


setInterval(function() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector("#main").style.backgroundColor = `#${randomColor}`;
}, 5000);