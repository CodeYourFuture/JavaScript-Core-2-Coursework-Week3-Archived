// Write your code here
var img_slider = document.querySelector("#img_slider");
var images = ["./img/1one.jpg", "./img/2two.jpg", "./img/3three.jpg", "./img/4four.jpg"];

var autoBack = document.querySelector("#auto_back");
var stopBtn = document.querySelector("#stop");
var autoForward = document.querySelector("#auto_forward");

img_slider.src = images[0];
var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  img_slider.src = images[i - 1];
  i--;
}

function next() {
  if (i >= images.length - 1) i = -1;
  img_slider.src = images[i + 1];
  i++
}

autoBack.onclick = function() {
  autoB = setInterval(prev, 2000);
}

autoForward.onclick = function() {
  autoF = setInterval(next, 2000);
}

stopBtn.onclick = function() {
  clearInterval(autoB);
  clearInterval(autoF);
}