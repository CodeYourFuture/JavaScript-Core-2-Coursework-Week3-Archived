/* You can complete the exercises in this CodePen link: https://codepen.io/makanti/pen/abOreLg */

// Task 1 - Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds)

function changeBody() {
  let myMain = document.getElementById("main");
  let myBody = document.getElementsByTagName("body")[0];
  setTimeout(function () {
    myMain.style.backgroundColor = "yellow";
    myBody.style.backgroundColor = "purple";
  }, 5000);
}
// changeBody();

// Task 2 - Update your code to make the colour change every 5 seconds to something different;
// Hint: try searching for setInterval()

function changeBackground() {
  let theMain = document.getElementById("main");
  let theBody = document.getElementsByTagName("body")[0];
  let heading = document.getElementsByTagName("h1")[0];
  heading.style.textAlign = "center";
  setInterval(function () {
    theMain.style.background =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    theBody.style.background =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  }, 5000);
}
changeBackground();

/*
function stopInterval () {
  clearInterval(decreaseTimer);
}
stopInterval();
*/
