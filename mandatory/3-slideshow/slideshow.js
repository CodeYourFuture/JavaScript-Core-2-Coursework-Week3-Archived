// Write your code here
let slides = document.querySelector("#slides")
let images = ["./images/1img.jpg", "./images/2img.jpg", "./images/3img.jpg", "./images/4img.jpg"];
slides = images[0];
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");


function prev() {
  for(i=0; i<images.length; i--){
    slides.src = images[i - 1];
  }
}

function next() {
  for(i=0; i<images.length; i++){
    slides.src = images[i + 1];
  }
}

btn1.onclick = function() {
  set1 = setInterval(prev, 1500);
}

btn3.onclick = function() {
  set2 = setInterval(next, 1500);
}

btn2.onclick = function(){
  clearInterval(set2);
  clearInterval(set1);
}
