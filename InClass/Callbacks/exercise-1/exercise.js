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
// //Task 1

let main = document.getElementById("main")

let changeBackGround = ()=>{
    main.style.backgroundColor = "red";
}

setTimeout(changeBackGround, 5000)

//Task 2

let colors = ["red","yellow","navy","black","orange"];// colors variables

let main = document.getElementById("main");// get main Id

let changeBackGround = () => {   // callback function change color

  let randomize = Math.floor(Math.random() * colors.length);//select a random number
  main.style.backgroundColor = colors[randomize];//get a color from array

}//arrow func closing

setInterval(changeBackGround, 5000)