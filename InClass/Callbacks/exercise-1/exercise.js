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
// function changeBackground(){
//     setTimeout(function(){
//         document.getElementById("main").style.background ="blue";
//     },5000);
// }
// changeBackground();

    setInterval(function() {
        let main =document.getElementById("main");
        if(main.style.backgroundColor ==="red"){
            main.style.backgroundColor = "yellow";
        }else{
            main.style.backgroundColor="red";
        }
    },5000);
    
