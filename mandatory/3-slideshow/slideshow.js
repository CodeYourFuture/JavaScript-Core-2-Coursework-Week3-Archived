// Write your code here
let slide = document.getElementById("container");
let images =[
        "example-screenshots/marina-glX-mw1ZlkU-unsplash.jpg",
        "example-screenshots/marina-hB5YYChCX18-unsplash.jpg",
         "example-screenshots/marina-WhLJc_z0eEI-unsplash.jpg",
         "example-screenshots/marina-YmQ0-nmWcV0-unsplash.jpg",
         "example-screenshots/tomas-malik-0LH8_S04sUY-unsplash.jpg"
];
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let autoForward = document.getElementById("auto-forward");
let autoBackward = document.getElementById("auto-backward");
let stopBtn = document.getElementById("stop");
let next;
let back;
//  let image = document.querySelector("img").src;
let intervalId;
let time = 1000;


let i = images.length;
var forwardFunction = function(){
    if(i < images.length){
        i++;
    }else{
        i = 1;
    }
    slide.innerHTML = "<img src ="+ images[i-1] + ">";
}
var backwardFunction = function(){
    if(i < images.length + 1 && i>1){
        i--;
    }else{
        i = images.length;
    }
    slide.innerHTML = "<img src ="+ images[i-1] + ">";
}

forward.addEventListener("click",forwardFunction);
backward.addEventListener("click",backwardFunction);

 autoForward.addEventListener("click",()=>{
      next = setInterval(forwardFunction,time);
    clearInterval(function(){
        next;
    },time)

 }) 

 autoBackward.addEventListener("click",()=>{
      back = setInterval(backwardFunction,time);
     clearInterval(function(){
         back;
     },time);
 })
 
 stopBtn.addEventListener("click",()=>{
     
     clearInterval(next);
     clearInterval(back); 
 })
    
    


