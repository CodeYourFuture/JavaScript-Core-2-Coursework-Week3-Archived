// Write your code here
//1st challenge
const image = [
  "images/1.jpeg",
  "images/2.jpeg",
  "images/3.jpeg",
  "images/4.jpeg",
];

const img = document.querySelector(".image");
const back = document.getElementById("back");
const forward = document.getElementById("forward");
const autoforward = document.getElementById("autoforward");
const autobackward = document.getElementById("autoback");
const stop = document.getElementById("stop");
let f;
let b;

img.src = image[0];
forward.addEventListener("click", forwardSlide);
back.addEventListener("click", backwardSlide);
autoforward.addEventListener("click", function () {
  (f = setInterval(forwardSlide, 2000)), clearInterval(b);
});

autobackward.addEventListener("click", function () {
  (b = setInterval(backwardSlide, 2000)), clearInterval(f);
});

stop.addEventListener("click", function () {
  clearInterval(f);
  clearInterval(b);
});
function forwardSlide() {
  for (let i = 0; i < image.length - 1; i++) {
    if ("http://127.0.0.1:5500/mandatory/3-slideshow/" + image[i] === img.src) {
      img.src = image[++i];
    }
  }
}

function backwardSlide() {
  for (let i = 0; i < image.length; i++) {
    if (i > 0) {
      if (
        "http://127.0.0.1:5500/mandatory/3-slideshow/" + image[i] ===
        img.src
      ) {
        img.src = image[--i];
      }
    }
  }
}
