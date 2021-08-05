// Write your code here
//1st challenge
const image = [
  "https://images.unsplash.com/photo-1616324862271-14431f1ca180?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8SnBnNktpZGwtSGt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1627991020697-9af24d1acff1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1627779297585-0ba2b85b0ba5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
 "https://images.unsplash.com/photo-1627893796692-800ae814be0a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
  (f = setInterval(forwardSlide, 4000)), clearInterval(b);
});

autobackward.addEventListener("click", function () {
  (b = setInterval(backwardSlide, 4000)), clearInterval(f);
});

stop.addEventListener("click", function () {
  clearInterval(f);
  clearInterval(b);
});
function forwardSlide() {
  let number = 0;
  for (let i = 0; i < image.length; i++) {
      if (image[i] === img.src) {
      number = i;
    }
  }
if(number===image.length-1)
      {number=-1 }
 (img.src = image[++number])
  }




function backwardSlide() {

  let number = 0;
  for (let i = 0; i < image.length; i++) {
    if (image[i] === img.src)
      number = i;
  }
  if (number === 0) {
    number=image.length

  }          img.src = image[--number];
   
   
 
}
