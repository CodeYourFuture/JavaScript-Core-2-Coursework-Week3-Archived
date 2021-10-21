// Write your code here
let imagesDiv = document.getElementById("images");
let image = document.createElement("img");
image.setAttribute("id", "imageSlide");
image.style.width = "500px";
image.style.height = "600px";
imagesDiv.appendChild(image);

let imageLinks = [
  "https://images.unsplash.com/photo-1605392320697-45dc80e24bc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1614712549550-6a1c0f488f4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1633701394188-c11a1e6a4e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=426&q=80",
  "https://images.unsplash.com/photo-1633450750940-4eabe49f4722?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1629382880588-23253ef2a562?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80",
];
// Setting random links
function setLinks() {
  image.src = imageLinks[Math.floor(Math.random() * imageLinks.length)];
}

window.onload = setLinks;

//for forward button
let forwardButton = document.getElementById("forward");

function forward() {
  let currentImg = document.getElementById("imageSlide");
  let currentImgIndex = imageLinks.indexOf(currentImg.src);
  if (currentImgIndex == 4) {
    currentImg.src = imageLinks[0];
  } else {
    currentImg.src = imageLinks[currentImgIndex + 1];
  }
}

forwardButton.addEventListener("click", forward);

//for backward button
let backwardButton = document.getElementById("backward");

function backward() {
  let currentImg = document.getElementById("imageSlide");
  let currentImgIndex = imageLinks.indexOf(currentImg.src);
  if (currentImgIndex == 0) {
    currentImg.src == imageLinks[0];
  } else {
    currentImg.src = imageLinks[currentImgIndex - 1];
  }
}

backwardButton.addEventListener("click", backward);

//for Auto Forward button
let autoForwardButton = document.getElementById("autoForward");

function autoForward() {
  let currentImg = document.getElementById("imageSlide");
  let currentImgIndex = imageLinks.indexOf(currentImg.src);
  showImages();
  function showImages() {
    currentImgIndex++;
    if (currentImgIndex > imageLinks.length - 1) {
      currentImgIndex = 0;
    }
    currentImg.src = imageLinks[currentImgIndex];
    imgTimeOut = setTimeout(showImages, 1000);
  }
}

autoForwardButton.addEventListener("click", autoForward);

// for Auto Backward button
let autoBackwardButton = document.getElementById("autoBackward");

function autoBackward() {
  let currentImg = document.getElementById("imageSlide");
  let currentImgIndex = imageLinks.indexOf(currentImg.src);
  showImages();
  function showImages() {
    currentImgIndex--;
    if (currentImgIndex < 0) {
      currentImgIndex = imageLinks.length - 1;
    }
    currentImg.src = imageLinks[currentImgIndex];
    imgTimeOut = setTimeout(showImages, 1000);
  }
}

autoBackwardButton.addEventListener("click", autoBackward);

//Stop button
let stopButton = document.getElementById("stop");

function stopIt() {
  clearTimeout(imgTimeOut);
}

stopButton.addEventListener("click", stopIt);
