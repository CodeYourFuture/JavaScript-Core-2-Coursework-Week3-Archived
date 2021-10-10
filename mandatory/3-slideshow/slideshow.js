// Write your code here
let body = document.querySelector("body");
let imageSlideshowDiv = document.createElement("div");
let header = document.createElement("h2");

body.appendChild(imageSlideshowDiv);
imageSlideshowDiv.appendChild(header);
body.style.display = "flex";
body.style.justifyContent = "center";

imageSlideshowDiv.style.width = "50%";
imageSlideshowDiv.style.display = "flex";
imageSlideshowDiv.style.flexFlow = "row wrap";
imageSlideshowDiv.style.justifyContent = "center";
imageSlideshowDiv.style.backgroundColor = "rgba(100, 10, 100, 0.4)";
imageSlideshowDiv.style.margin = "100px 0 0 0";
imageSlideshowDiv.style.height = "700px";
imageSlideshowDiv.style.borderRadius = "50%";

header.textContent = "Slide Show";
header.style.backgroundColor = "rgba(100, 10, 100, 0.1)";
header.style.color = "white";
header.style.fontWeight = "bolder";
header.style.fontSize = "60px";
header.style.margin = "30px 0 0 0";
header.style.height = "auto";
header.style.width = "75%";
header.style.textAlign = "center";
header.style.display = "flex";
header.style.flexFlow = "row wrap";
header.style.justifyContent = "center";

header.className = "header";
console.log(header.className);

let img = document.createElement("img");
img.setAttribute("id", "slideShow");
header.appendChild(img);
img.style.width = "60%";
img.style.height = "500px";

let buttonsDiv = document.createElement("div");
header.appendChild(buttonsDiv);

let autoBackButton = document.createElement("button");
autoBackButton.classList.add("button");
buttonsDiv.appendChild(autoBackButton);
autoBackButton.textContent = "Auto back";
autoBackButton.style.fontSize = "15px";

let backButton = document.createElement("button");
backButton.classList.add("button");
buttonsDiv.appendChild(backButton);
backButton.textContent = "back";
backButton.style.fontSize = "15px";

let stopButton = document.createElement("button");
stopButton.classList.add("button");
buttonsDiv.appendChild(stopButton);
stopButton.textContent = "stop";
stopButton.style.fontSize = "15px";

let forwardButton = document.createElement("button");
forwardButton.classList.add("button");
buttonsDiv.appendChild(forwardButton);
forwardButton.textContent = "forward";
forwardButton.style.fontSize = "15px";

let autoForwardButton = document.createElement("button");
autoForwardButton.classList.add("button");
buttonsDiv.appendChild(autoForwardButton);
autoForwardButton.textContent = "Auto forward";
autoForwardButton.style.fontSize = "15px";

let buttonClasses = document.querySelectorAll(".button");
buttonClasses.forEach((button) => {
  button.style.width = "100px";
  button.style.height = "50px";
  button.style.color = "white";
  button.style.backgroundColor = "rgba(100, 10, 100, 0.6)";
  button.style.border = "none";
  button.style.borderRadius = "50%";
  button.style.margin = "0 0 0 10px";
});

let imgSources = [
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1888&q=80",
  "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1324&q=80",
  "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
  "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
];

function setup() {
  img.src = imgSources[Math.floor(Math.random() * imgSources.length)];
}

function forward() {
  let currSource = document.getElementById("slideShow");
  let currentIndex = imgSources.indexOf(currSource.src);
  console.log(currSource.src);
  console.log(currentIndex);
  if (currentIndex == 4) {
    currSource.src = imgSources[0];
  } else {
    currSource.src = imgSources[currentIndex + 1];
  }
}

function back() {
  let currSource = document.getElementById("slideShow");
  let currentIndex = imgSources.indexOf(currSource.src);

  if (currentIndex == 0) {
    currSource.src = imgSources[imgSources.length - 1];
  } else {
    currSource.src = imgSources[currentIndex - 1];
  }
}
let timeOut;

function autoForward() {
  let currSource = document.getElementById("slideShow");
  var slideIndex = imgSources.indexOf(currSource.src);
  showSlides();
  function showSlides() {
    slideIndex++;
    if (slideIndex > imgSources.length - 1) {
      slideIndex = 0;
    }
    currSource.src = imgSources[slideIndex];
    timeOut = setTimeout(showSlides, 2000);
  }
}

function autoBack() {
  let currSource = document.getElementById("slideShow");
  var slideIndex = imgSources.indexOf(currSource.src);
  showSlides();
  function showSlides() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = imgSources.length - 1;
    }
    currSource.src = imgSources[slideIndex];
    timeOut = setTimeout(showSlides, 2000);
  }
}

function stop() {
  clearTimeout(timeOut);
}

forwardButton.addEventListener("click", forward);
autoForwardButton.addEventListener("click", autoForward);
autoBackButton.addEventListener("click", autoBack);
backButton.addEventListener("click", back);
stopButton.addEventListener("click", stop);

window.onload = setup;
