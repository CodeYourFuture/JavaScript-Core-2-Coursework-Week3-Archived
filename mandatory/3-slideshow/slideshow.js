// Write your code here
const arrayOfImages = [
  {
    image:
      "https://images.unsplash.com/photo-1628088306729-824233fd87a3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "make-up items on a white table",
  },
  {
    image:
      "https://images.unsplash.com/photo-1628048429851-b801768f4c01?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "building with black glass cladding on it",
  },
  {
    image:
      "https://images.unsplash.com/photo-1628031376060-f8534abd0489?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    alt: "dog looking through a pink garden chair",
  },
];
let currentImageIndex = 2;
let interval;
function setImage(imageData) {
  const imageTag = document.querySelector("img");
  imageTag.src = imageData.image;
  imageTag.alt = imageData.alt;
}

function forwardImage() {
  let newImageIndex;
  if (currentImageIndex === arrayOfImages.length - 1) {
    newImageIndex = 0;
  } else {
    newImageIndex = currentImageIndex + 1;
  }
  currentImageIndex = newImageIndex;
  setImage(arrayOfImages[newImageIndex]);
}

function backImage() {
  let newImageIndex;
  if (currentImageIndex === 0) {
    newImageIndex = arrayOfImages.length - 1;
  } else {
    newImageIndex = currentImageIndex - 1;
  }
  currentImageIndex = newImageIndex;
  setImage(arrayOfImages[newImageIndex]);
}

function autoForwardImage() {
  stopAutoImageSlideShow();
  interval = setInterval(forwardImage, 2000);
}
function autoBackImage() {
  stopAutoImageSlideShow();
  interval = setInterval(backImage, 2000);
}

function stopAutoImageSlideShow() {
  clearInterval(interval);
  interval = null;
}

const forwardButton = document.getElementById("forward");
forwardButton.addEventListener("click", forwardImage);

const backButton = document.getElementById("back");
backButton.addEventListener("click", backImage);

const autoForwardButton = document.getElementById("auto-forward");
autoForwardButton.addEventListener("click", autoForwardImage);
const autoBackButton = document.getElementById("auto-back");
autoBackButton.addEventListener("click", autoBackImage);
const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopAutoImageSlideShow);
