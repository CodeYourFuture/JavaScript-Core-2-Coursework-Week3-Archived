// Write your code here
const galleryImg = document.querySelector(".image");
const forwardBtn = document.getElementById("forwardBtn");
let imageNumber = 1;

function forward() {
  if (imageNumber === 6) {
    imageNumber = 0;
  }
  imageNumber++;

  galleryImg.src = `./images/gallery-${imageNumber}.jpg`;
}
forwardBtn.addEventListener("click", forward);

//--------------------------------------------------------------------------------

const backBtn = document.getElementById("backBtn");
function back() {
  if (imageNumber === 1) {
    imageNumber = 7;
  }
  imageNumber--;

  galleryImg.src = `./images/gallery-${imageNumber}.jpg`;
}
backBtn.addEventListener("click", back);

//--------------------------------------------------------------------------------

const stopBtn = document.getElementById("stopBtn");
let clearImage;

function stop() {
  clearInterval(clearImage);
}
stopBtn.addEventListener("click", stop);

//--------------------------------------------------------------------------------

const autoForwardBtn = document.getElementById("auto-forwardBtn");
autoForwardBtn.addEventListener("click", () => {
  stop();
  clearImage = setInterval(forward, 3000);
});

//--------------------------------------------------------------------------------

const autoBackBtn = document.getElementById("auto-backBtn");
autoBackBtn.addEventListener("click", () => {
  stop();
  clearImage = setInterval(back, 3000);
});
