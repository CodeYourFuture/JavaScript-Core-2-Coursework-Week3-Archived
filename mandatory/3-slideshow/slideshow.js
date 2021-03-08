// Write your code here
// I had some help with some of the logic in this project
let images = [
  "images/kitten0.jpg",
  "images/kitten1.jpg",
  "images/kitten2.jpg",
  "images/kitten3.jpg",
  "images/kitten4.jpg",
  "images/kitten5.jpg",
  "images/kitten6.jpg",
  "images/kitten7.jpg",
  "images/kitten8.jpg",
  "images/kitten9.jpg",
  "images/kitten10.jpg",
  "images/kitten11.jpg",
  "images/kitten12.jpg",
  "images/kitten13.jpg",
  "images/kitten14.jpg",
  "images/kitten15.jpg",
  "images/kitten16.jpg",
  "images/kitten17.jpg",
];
let imageHolder = document.getElementsByClassName("image-holder")[0];
let backward = document.getElementById("backward");
let autoBack = document.getElementById("auto-back");
let stop = document.getElementById("stop");
let pause = document.getElementById("pause");
let autoFor = document.getElementById("auto-for");
let forward = document.getElementById("forward");
let intervalTimer = document.getElementById("interval-timer");
let kittenImage = 0;
let isAutoPlayOn = false;
let isPauseOn = false;
let interval;
let direction;
let timeInterval = 5000;

function moveForward() {
  imageHolder.src = images[kittenImage];
  kittenImage++;
  if (kittenImage >= images.length) {
    kittenImage = 0;
  }
}
forward.addEventListener("click", moveForward);

function moveBackward() {
  imageHolder.src = images[kittenImage];
  kittenImage--;
  if (kittenImage < 0) {
    kittenImage = 17;
  }
}
backward.addEventListener("click", moveBackward);

function autoForwardPlay() {
  direction = "forward";
  if (!isAutoPlayOn) {
    interval = setInterval(() => {
      imageHolder.src = images[kittenImage];
      kittenImage++;
      if (kittenImage >= images.length) {
        kittenImage = 0;
      }
    }, timeInterval);
    isAutoPlayOn = true;
  }
}
autoFor.addEventListener("click", autoForwardPlay);

function autoBackwardPlay() {
  direction = "backward";
  if (!isAutoPlayOn) {
    interval = setInterval(() => {
      imageHolder.src = images[kittenImage];
      kittenImage--;
      if (kittenImage < 0) {
        kittenImage = 17;
      }
    }, timeInterval);
    isAutoPlayOn = true;
  }
}
autoBack.addEventListener("click", autoBackwardPlay);

function stopMotion() {
  clearInterval(interval);
  isAutoPlayOn = false;
}
stop.addEventListener("click", stopMotion);

function pauseMotion() {
  if (!isPauseOn) {
    clearInterval(interval);
    pause.textContent = "Restart";
    isPauseOn = true;
    isAutoPlayOn = false;
  } else {
    if (direction === "forward") {
      pause.textContent = "Paws";
      autoForwardPlay();
      isPauseOn = false;
    } else {
      pause.textContent = "Paws";
      autoBackwardPlay();
      isPauseOn = false;
    }
  }
}
pause.addEventListener("click", pauseMotion);

function pickIntervalTimer() {
  timeInterval = document.querySelector("input").value * 1000;
}
intervalTimer.addEventListener("input", pickIntervalTimer);

window.onload = function emptyFields() {
  document.querySelector("input").value = "";
};
