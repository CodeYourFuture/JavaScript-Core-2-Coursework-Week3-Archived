//images array
let imagesArr = [
  "images/backbend.jpg",
  "images/Boat_pose.jpg",
  "images/Downward_dog.jpg",
  "images/Handstand.jpg",
  "images/headstand.jpg",
  "images/king_pigeon.jpg",
  "images/Low_lunge.jpg",
  "images/splits.jpg",
  "images/Tree_pose.jpg",
  "images/Warrior_III.jpg",
  "images/Wild_Thing.jpg"
];

//carousel 
const currentImage = document.querySelector(".currentImg");

//buttons
const autoBackBtn = document.getElementById("autoBack-btn");
const backBtn = document.getElementById("backBtn");
const stopBtn = document.getElementById("stopBtn");
const fwdBtn = document.getElementById("forwardBtn");
const autoFwdBtn = document.getElementById("autoFwd-btn");

let counter = 0;
let counterInterval;

//Start/reset
function startReset() {
  counter = 0;
  currentImage.setAttribute("src", imagesArr[counter]);
}

//End/reset
function endReset() {
  counter = imagesArr.length - 1;
  currentImage.setAttribute("src", imagesArr[counter]);
}

//auto back button
autoBackBtn.addEventListener("click", () => {
  counterInterval = setInterval(() => {
    if(counter >= 0 && counter < imagesArr.length) {
      counter -=1;
      currentImage.setAttribute("src", imagesArr[counter]);
      if(counter < 0) {
        endReset();
      }
    }
  }, 2000);
});

//back button
backBtn.addEventListener("click", () => {
  if(counter >=0 && counter < imagesArr.length) {
    counter -= 1;
    currentImage.setAttribute("src", imagesArr[counter]);
    if(counter < 0) {
      endReset();
    }
  }
});

//stop button
stopBtn.addEventListener("click", () => {
  clearInterval(counterInterval);
});

//forward button
fwdBtn.addEventListener("click", () => {
  if(counter >= 0 && counter < imagesArr.length) {
    counter += 1;
    currentImage.setAttribute("src", imagesArr[counter]);
    if(counter > 10) {
      startReset();
    }
  }
});

//auto forward button
autoFwdBtn.addEventListener("click", () => {
  counterInterval = setInterval(() => {
    if(counter >= 0 && counter < imagesArr.length) {
      counter += 1;
      currentImage.setAttribute("src", imagesArr[counter]);
      if(counter > 10) {
        startReset();
      }
    }
  }, 2000);
})
