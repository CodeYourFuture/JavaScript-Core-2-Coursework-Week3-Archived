// Write your code here
var content = document.getElementById("container");

var myImages = [
  "../example-screenshots/image2.jpg",
  "../example-screenshots/image1.jpg",
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

// autoback function
var autoBackFunction = function () {
  setInterval(() => {
    if (i < myImages.length + 1 && i > 1) {
      i--;
    } else {
      i = myImages.length;
    }
    content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
  }, 2000);
};
var autoNextFunction = function () {
  setInterval(() => {
    if (i < myImages.length) {
      i++;
    } else {
      i = 1;
    }
    content.innerHTML = "<img src =myImages/" + myImages[i - 1] + ">";
  }, 2000);
};
// all event listeners

next.addEventListener("click", nextFunction);
prev.addEventListener("click", prevFunction);
autoBack.addEventListener("click", autoBackFunction);
autoNext.addEventListener("click", autoNextFunction);

// stop button event listener

stop.addEventListener("click", () => {
  content.innerHTML = "<img src = example-screenshots/image2.jpg>";
});
