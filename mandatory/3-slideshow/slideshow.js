/***********************Global Variables**************************************/


// array containing the img src for the slide show
var images = [
  "images/italy_1.jpeg",
  "images/italy_2.jpeg",
  "images/italy_3.jpeg",
  "images/italy_4.jpeg",
  "images/italy_5.jpeg",
  "images/italy_6.jpeg",
  "images/italy_7.jpeg",
  "images/italy_8.jpeg",
  "images/italy_9.jpeg",
  "images/italy_10.jpeg",
];

// starting point of slide show is images[0],
// this variable keeps track of the number of image being displayed from the array
var num=0;

// flags to identify the present state of slid show
let isSlideShowRunning = false;
let slideShowDirection = "forward";


/***********************Function Definitions**********************************/


// function to update the image and display the next image from array images
function next() {
  var slider = document.getElementById('slider-img');
  num++;
  if(num >= images.length)
    {
      num=0;
    }
  slider.src = images[num];
}

// function to update the image and display the previous image from array images
function previous() {
  var slider = document.getElementById('slider-img');
  num--;
  if(num < 0)
    {
      num = images.length-1;
    }
  slider.src = images[num];
}

// updates the image forward based on the slide show state flags
function updateImageForward(intervalId) {
  if(isSlideShowRunning && slideShowDirection === "forward") {
    next();
  }
  else {
    clearInterval(intervalId);
  }
}

// updates the image backward based on the slide show state flags
function updateImageBackward(intervalId) {
  if(isSlideShowRunning && slideShowDirection === "back") {
    previous();
  }
  else {
    clearInterval(intervalId);
  }
}

// function that controls the slide show including all the event listeners
function slideShow () {
  let forwardBtn = document.getElementById("forward-slide-show");
  let backBtn = document.getElementById("back-slide-show");
  let stopBtn = document.getElementById("stop-slide-show");

  // set the event listener for "Stop" button
  stopBtn.addEventListener("click", function() {
    isSlideShowRunning = false;
  })

  // set the event listener for the "Forward" button
  forwardBtn.addEventListener("click", function() {
    isSlideShowRunning = true;
    slideShowDirection = "forward";
    let intervalId = setInterval(function() {
      updateImageForward(intervalId)
    }, 1000);
  });

  // set the event listener for the "back" button
  backBtn.addEventListener("click", function() {
    isSlideShowRunning = true;
    slideShowDirection = "back";
    let intervalId = setInterval(function() {
      updateImageBackward(intervalId)
    }, 1000);
  });
}


/***********************Function Calls*****************************************/


// call the function slideShow()
slideShow();
