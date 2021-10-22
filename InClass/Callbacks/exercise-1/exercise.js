// //task1 +task2
// function changeColor() {
//  // setting random color 
//   let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     const change = document.querySelector("#main");
//     change.style.background = `#${randomColor}`;
//   }
//   setInterval(changeColor, 5000);


//task 1

function changeBgColor() {
    document.body.style.backgroundColor = "lightpink";
  }
  setTimeout(changeBgColor, 5000);
  //task 2
  
  const bgColor = document.getElementById("main");
  
  const allColors = [
    "green",
    "orange",
    "pink",
    "lightblue",
    "red",
    "yellow",
    "purple",
  ];
  
  function changeBgColors() {
    let randomColor = Math.floor(Math.random() * allColors.length); //choose a random color from allColors Array
    bgColor.style.backgroundColor = allColors[randomColor];
  }
  setInterval(changeBgColors, 5000);
