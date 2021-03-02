// Write your code here
var content = document.getElementById("container");

var myImages = [
  "../example-screenshots/image9.jpg",
  "../example-screenshots/image10.jpg",
  "../example-screenshots/image15.jpg",
  "../example-screenshots/image1.jpg",
  "../example-screenshots/image12.jpg",
  "../example-screenshots/image14.jpg",
  "../example-screenshots/image13.jpg",
  "../example-screenshots/image11.jpg",
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
let intervalId;

let i = myImages.length;
console.log(i);
// all functions

// next function

var nextFunction = function () {
  if (i < myImages.length) {
    i++;
  } else {
    i = 1;
  }
  content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
};

// prev function

var prevFunction = function () {
  if (i < myImages.length + 1 && i > 1) {
    i--;
  } else {
    i = myImages.length;
  }
  content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
};

// autoBack function

var autoBackFunction = function () {
  intervalId = setInterval(() => {
    if (i < myImages.length + 1 && i > 1) {
      i--;
    } else {
      i = myImages.length;
    }
    content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
  }, 5000);
};
var autoNextFunction = function () {
  intervalId = setInterval(() => {
    if (i < myImages.length) {
      i++;
    } else {
      i = 1;
    }
    content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
  }, 5000);
};

// all event listeners

next.addEventListener("click", nextFunction);
prev.addEventListener("click", prevFunction);
autoBack.addEventListener("click", autoBackFunction);
autoNext.addEventListener("click", autoNextFunction);

// stop button event listener

stop.addEventListener("click", () => {
  content.innerHTML = "<img src = example-screenshots/image2.jpg>";
  clearInterval(intervalId); // will clear all setIntervals when stop btn is pressed
});
