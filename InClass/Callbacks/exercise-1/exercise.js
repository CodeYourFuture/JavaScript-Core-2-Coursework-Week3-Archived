/*
================
EXERCISE 1
*/

/*
Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
*/

let bodyEl = document.getElementsByTagName("body")[0];

function changeBackground() {
  setTimeout(function () {
    bodyEl.style.backgroundColor = "blue";
  }, 5000);
}

//changeBackground();

/*
Task 2
Update your code to make the colour change every 5 seconds to something different. 
Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

function backgroundColorChanger() {
  let counter = 0;
  setInterval(function () {
    if (counter == colors.length) counter = 0;
    bodyEl.style.backgroundColor = colors[counter];
    counter++;
  }, 1000);
}

backgroundColorChanger();
