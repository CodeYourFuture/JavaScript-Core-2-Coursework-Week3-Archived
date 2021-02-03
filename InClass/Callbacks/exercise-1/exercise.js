let div = document.getElementById("main");

function changeColour() {
  div.style.backgroundColor = "yellow";
}

setTimeout(changeColour, 5000);


// task 2

let i = 0;
let colours = ["pink", "red", "green"  "#efefef", "#0ae071"];

function changeColourFiveSeconds() {
  div.style.backgroundColor = colours[i];
  i++;

  if (i > colours.length) {
    i = 0;
  };
};
setInterval(changeColourFiveSeconds, 5000);