
let photoNum = 1; //this makes photo index 0 inside the playSlide function

//calling the function on start up
playSlide(photoNum);

//This should show the next photo on forward button click
let forwardBtn = document.getElementById("forward");
console.log(forwardBtn)
forwardBtn.addEventListener("click", forwardSlide);

//this should show the previous photo on back button click
let backBtn = document.getElementById("back");
backBtn.addEventListener("click", backSlide);


//this function displays the current photo when called
function playSlide(num){
let photos = document.getElementsByClassName("slide");
    if (num > photos.length){
        photoNum = 1;
    } 
    if (num < 1){
        photoNum = photos.length;
    }
    for (let i = 0; i < photos.length; i++){
        photos[i].style.display = "none";
    }
    photos[photoNum - 1].style.display = "block";
}

//function for forward button
function forwardSlide(){
   playSlide(photoNum += 1);
}

//function for back button
function backSlide(){
    playSlide(photoNum -= 1);
}

let interval; //variable name for setInterval
let stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", cancelAuto);

function cancelAuto(){
    clearInterval(interval);
}
//function for auto forward
function autoForward(){
    let photos = document.getElementsByClassName("slide");
    let count = photoNum; //this allows the autoplay continue from the current slide
    
   interval = setInterval(function (){     
   let prevCount; //this var helps previous slide vanish
     if (count > photos.length - 1){ //after the last slide, the 1st slide appears
        count = 0; 
        prevCount = photos.length - 1;
    } else {
        prevCount = count - 1;
    }
        photos[prevCount].style.display ="none";  
                 
        photos[count].style.display = "block";
        count++;
        
    }, 2000)
}

//function for auto forward
function autoBack(){
    let photos = document.getElementsByClassName("slide");
    let count = photoNum; 
   
    interval = setInterval(function (){     
    let prevCount; 
    if (count < 0){ //after 1st slide, it goes to the last slide
        count = photos.length - 1; 
        prevCount = 0; 
    } else {prevCount = count + 1};
        photos[prevCount].style.display ="none";  
        photos[count].style.display = "block";
        count--;
        
    }, 2000)
}

let autoForwardBtn = document.getElementById("auto-forward");
autoForwardBtn.addEventListener("click", autoForward);

let autoBackBtn = document.getElementById("auto-back");
autoBackBtn.addEventListener("click", autoBack);