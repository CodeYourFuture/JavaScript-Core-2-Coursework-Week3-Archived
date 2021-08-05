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

setTimeout(()=>{
  document.body.style.backgroundColor = 'purple'
},2000);


const myColor=['red','yellow','green','orange'];
let colorIndex = 0;
 setInterval(()=>{
   colorIndex = (colorIndex + 1) % myColor.length;// colorindex will be next color  but always will be between 0 - myColor length
   document.body.style.backgroundColor = myColor[colorIndex];
 },5000)