// carousel

const currentImg = document.querySelector(".current-img");

// image list

let imagesArray = [
  "./images/Mountainous-coast.jpg",
  "./images/Northern-Lights.jpg",
  "./images/Snowy-mountains.jpg",
  "./images/St-Mont-Michel.jpg",
];

// buttons

const autoBackBtn = document.querySelector("#auto-back-button");
const backBtn = document.querySelector("#back-button");
const stopBtn = document.querySelector("#stop-button");
const forwardBtn = document.querySelector("#forward-button");
const autoFwdBtn = document.querySelector("#auto-forward-button");

// counter

let counter = 0;
let countdownInterval;

// reset Start
function resetStart() {
  counter = 0;
  currentImg.setAttribute("src", imagesArray[counter]);
}
// reset End
function resetEnd() {
  counter = imagesArray.length - 1;
  currentImg.setAttribute("src", imagesArray[counter]);
}

//! auto back button

autoBackBtn.addEventListener("click", () => {
  countdownInterval = setInterval(() => {
    if (counter >= 0 && counter < imagesArray.length) {
      counter -= 1;
      currentImg.setAttribute("src", imagesArray[counter]);
      if (counter < 0) {
        resetEnd();
      }
      console.log(counter);
    }
  }, 1000);
});

//!back button

backBtn.addEventListener("click", () => {
  if (counter >= 0 && counter < imagesArray.length) {
    counter -= 1;
    currentImg.setAttribute("src", imagesArray[counter]);
    if (counter < 0) {
      resetEnd();
    }
    console.log(counter);
  }
});

//! stop button

stopBtn.addEventListener("click", () => {
  console.log("stop");
  clearInterval(countdownInterval);
});

//! forward button

forwardBtn.addEventListener("click", () => {
  if (counter >= 0 && counter < imagesArray.length) {
    counter += 1;
    currentImg.setAttribute("src", imagesArray[counter]);
    if (counter > 3) {
      resetStart();
    }
    console.log(counter);
  }
});

//! auto forward button

autoFwdBtn.addEventListener("click", () => {
  countdownInterval = setInterval(() => {
    if (counter >= 0 && counter < imagesArray.length) {
      counter += 1;
      currentImg.setAttribute("src", imagesArray[counter]);
      if (counter > 3) {
        resetStart();
      }
      console.log(counter);
    }
  }, 1000);
});
