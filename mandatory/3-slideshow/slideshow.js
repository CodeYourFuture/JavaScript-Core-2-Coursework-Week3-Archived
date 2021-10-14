// Write your code here
let imagesDiv = document.getElementById("images");
let img = document.createElement("img");
img.setAttribute("id", "imageSlide");
img.style.width = "600px";
img.style.height = "500px";
imagesDiv.appendChild(img);

let imgLinks = [
  "https://images.unsplash.com/photo-1633760737014-b71ea100de2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1926&q=80",
  "https://images.unsplash.com/photo-1634055633771-48a7a9d2464a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1633122117096-d7aa3f93a1c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1098&q=80",
  "https://images.unsplash.com/photo-1634095925899-247a9d209ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
];
// Setting random links to our img tag
function setLinks() {
  img.src = imgLinks[Math.floor(Math.random() * imgLinks.length)];
}
// This will set a random link to img tag every time when page is loaded
window.onload = setLinks;

////////======Selecting buttons and their functionality========//////////

// selecting forward button and adding Even Listener to it
let forwardButton = document.getElementById("forward");

function forward() {
  let currentImg = document.getElementById("imageSlide");
  let currentImgIndex = imgLinks.indexOf(currentImg.src);
  if (currentImgIndex == 3) {
    currentImg.src = imgLinks[0];
  } else {
    currentImg.src = imgLinks[currentImgIndex + 1];
  }
}

forwardButton.addEventListener("click", forward);

// selecting backward button and adding Even Listener to it
let backwardButton = document.getElementById("backward");

function backward() {
  let currentImg = document.getElementById("imageSlide");
  let currentImgIndex = imgLinks.indexOf(currentImg.src);
  if (currentImgIndex == 0) {
    currentImg.src == imgLinks[0];
  } else {
    currentImg.src = imgLinks[currentImgIndex - 1];
  }
}

backwardButton.addEventListener("click", backward);

// selecting Auto Forward button and adding Even Listener to it
let autoForwardButton = document.getElementById("autoForward");

function autoForward() {
  let currentImg = document.getElementById("imageSlide");
  let currentImgIndex = imgLinks.indexOf(currentImg.src);
  showImages();
  function showImages() {
    currentImgIndex++;
    if (currentImgIndex > imgLinks.length - 1) {
      currentImgIndex = 0;
    }
    currentImg.src = imgLinks[currentImgIndex];
    imgTimeOut = setTimeout(showImages, 1000);
  }
}

autoForwardButton.addEventListener("click", autoForward);

// selecting Auto Backward button and adding Even Listener to it
let autoBackwardButton = document.getElementById("autoBackward");

function autoBackward() {
  let currentImg = document.getElementById("imageSlide");
  let currentImgIndex = imgLinks.indexOf(currentImg.src);
  showImages();
  function showImages() {
    currentImgIndex--;
    if (currentImgIndex < 0) {
      currentImgIndex = imgLinks.length - 1;
    }
    currentImg.src = imgLinks[currentImgIndex];
    imgTimeOut = setTimeout(showImages, 1000);
  }
}

autoBackwardButton.addEventListener("click", autoBackward);

// selecting Stop button and adding Even Listener to it
let stopButton = document.getElementById("stop");

function stopIt() {
  clearTimeout(imgTimeOut);
}

stopButton.addEventListener("click", stopIt);
