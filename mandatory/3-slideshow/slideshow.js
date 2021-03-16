// Write your code here
var imageSlide = document.querySelector("#image_slide")
var allImg = ["./images/1img.jpg", "./images/2img.jpg", "./images/3img.jpg", "./images/4img.jpg"];
var autoBack = document.querySelector("#auto_back");
var stopButton = document.querySelector("#stop");
var autoForward = document.querySelector("#auto_forward");

imageSlide.src = allImg[0];
var i = 0;

function prev() {
  if (i <= 0 ) i = allImg.length;
  imageSlide.src = allImg[i - 1];
  i--;
}

function next() {
  if (i >= allImg.length - 1) i = -1;
  imageSlide.src = allImg[i + 1];
  i++;
}

autoBack.onclick = function() {
  autoB = setInterval(prev, 1500);
}

autoForward.onclick = function() {
  autoF = setInterval(next, 1500);
}

stopButton.onclick = function(){
  clearInterval(autoB);
  clearInterval(autoF);
}

