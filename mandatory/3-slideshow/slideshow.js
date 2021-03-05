//adding images to an array
let arrayImage = [
  "fatty-corgi-Zn5chZcnFRA-unsplash.jpg",
  "hannah-grace-fk4tiMlDFF0-unsplash.jpg",
  "joe-caione-KVeogBZzl4M-unsplash.jpg",
  "matthew-foulds-BN6uvogY5VM-unsplash.jpg",
];
// Getting buttons and inputs
const backButton = document.getElementById("back");
const forwardButton = document.getElementById("forward");
const autoForwardButton = document.getElementById("auto-forward");
const autoBackButton = document.getElementById("auto-back");
const stopButton = document.getElementById("stop");
const timeFrameInput = document.getElementById("time-frame");
const setTimeButton = document.getElementById("set-time");
const imagetoShow = document.getElementById("image-show");

let counter = 0;
let imageNumberToDisplay = counter;
//adding event listener to the forward button
forwardButton.addEventListener("click", () => {
  counter++;
  if (counter < arrayImage.length) {
    imagetoShow.src = `./${arrayImage[counter]}`;
  } else {
    counter = 0;
    imagetoShow.src = `./${arrayImage[counter]}`;
  }
});

//adding event listener to the back button
backButton.addEventListener("click", () => {
  counter--;
  if (counter >= 0) {
    imagetoShow.src = `./${arrayImage[counter]}`;
  } else {
    counter = arrayImage.length - 1;
    imagetoShow.src = `./${arrayImage[counter]}`;
  }
});
let isAuto = false;
let intervalTimeInMiliseconds = 3000;
//adding event listener to the auto forward button
autoForwardButton.addEventListener("click", () => {
  isAuto = true;
  // setting an interval to repeat changing image's src.
  let intervalForward = setInterval(() => {
    counter++;
    if (counter < arrayImage.length) {
      imagetoShow.src = `./${arrayImage[counter]}`;
    } else {
      counter = 0;
      imagetoShow.src = `./${arrayImage[counter]}`;
    }
    // clearing interval by clicking stop button
    stopButton.addEventListener("click", () => {
      isAuto = false;
      clearInterval(intervalForward);
    });
  }, intervalTimeInMiliseconds);
});

//adding event listener to the back forward button
autoBackButton.addEventListener("click", () => {
  isAuto = true;
  // setting an interval to repeat changing image's src.
  let intervalBack = setInterval(() => {
    counter--;
    if (counter >= 0) {
      imagetoShow.src = `./${arrayImage[counter]}`;
    } else {
      counter = arrayImage.length - 1;
      imagetoShow.src = `./${arrayImage[counter]}`;
    }
    // clearing interval by clicking stop button
    stopButton.addEventListener("click", () => {
      isAuto = false;
      clearInterval(intervalBack);
    });
  }, intervalTimeInMiliseconds);
});

let inputvalue;
// Adding event listener to the input field to get info from user in seconds
timeFrameInput.addEventListener("change", () => {
  inputvalue = timeFrameInput.value;
});
// Adding event listener to the set time button
setTimeButton.addEventListener("click", () => {
  if (isAuto) {
    alert("Please stop auto first then set time and click auto");
  }
  //converting user input in seconds to milliseconds
  intervalTimeInMiliseconds = inputvalue * 1000;
});
