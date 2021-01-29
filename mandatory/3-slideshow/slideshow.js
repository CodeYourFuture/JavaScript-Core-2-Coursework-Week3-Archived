// Write your code here
var content = document.getElementById("container");

var myImages = [
  "../example-screenshots/image1.jpg",
  "../example-screenshots/image2.jpg",
  "../example-screenshots/image3.jpg",
  "../example-screenshots/image4.jpg",
  "../example-screenshots/image5.jpg",
  "../example-screenshots/image6.jpg",
  "../example-screenshots/image7.jpg",
  "../example-screenshots/image8.jpg",
];

let next = document.getElementById("next");
let prev = document.getElementById("prev");
let autoBack = document.getElementById("auto-back");
let autoNext = document.getElementById("auto-next");
let stop = document.getElementById("stop");
let image = document.querySelector("img").src;
let i = myImages.length;
// event listener for next button
next.addEventListener("click", () => {
  if (i < myImages.length) {
    i++;
  } else {
    i = 1;
  }
  content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
});
// prev button event listener
prev.addEventListener("click", () => {
  if (i < myImages.length + 1 && i > 1) {
    i--;
  } else {
    i = myImages.length;
  }
  content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
});
// when the auto back button is pressed the function inside the setInterval will be executed every 5 seconds
autoBack.addEventListener("click", () => {
  setInterval(() => {
    if (i < myImages.length + 1 && i > 1) {
      i--;
    } else {
      i = myImages.length;
    }
    content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
  }, 5000);
});
//auto next button event listener. when button is pressed the set interval inside is triggered and the code inside the set interval is executed every 5 seconds

autoNext.addEventListener("click", () => {
  setInterval(() => {
    if (i < myImages.length) {
      i++;
    } else {
      i = 1;
    }
    content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
  }, 2000);
});
// stop button event listener
stop.addEventListener("click", () => {
  content.innerHTML = "<img src =myImages/" + image + ">";
});
