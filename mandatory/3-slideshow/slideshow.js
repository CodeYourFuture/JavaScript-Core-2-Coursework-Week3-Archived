let images = [
  "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80",
  "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80",
  "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

//functions for manual scrolling

function goForward() {
  let visibleImage = document.getElementById("image").src;
  let index = images.indexOf(visibleImage);
  if (index < images.length - 1) {
    visibleImage = images[index + 1];
    document.getElementById("image").src = visibleImage;
  } else {
    document.getElementById("image").src = images[0];
  }
}

function goBack() {
  let visibleImage = document.getElementById("image").src;
  let index = images.indexOf(visibleImage);
  if (index === 0) {
    visibleImage = images[images.length - 1];
    document.getElementById("image").src = visibleImage;
  } else {
    visibleImage = images[index - 1];
    document.getElementById("image").src = visibleImage;
  }
}

//functions for auto scrolling

let autoBackwardInterval = null;
let autoForwardInterval = null;

function autoForward() {
  clearInterval(autoForwardInterval);
  clearInterval(autoBackwardInterval);
  autoForwardInterval = setInterval(goForward, 3000);
  autoBackwardInterval = null;
}

function autoBack() {
  clearInterval(autoForwardInterval);
  clearInterval(autoBackwardInterval);
  autoBackwardInterval = setInterval(goBack, 3000);
  autoForwardInterval = null;
}

function stopAuto() {
  clearInterval(autoForwardInterval);
  clearInterval(autoBackwardInterval);
}

//button assingment

let forwardBtn = document.getElementById("forward");
let backwardBtn = document.getElementById("back");
let autoForwardBtn = document.getElementById("auto-forward");
let autoBackwardBtn = document.getElementById("auto-backward");
let stopBtn = document.getElementById("stop");

//eventlisteners

forwardBtn.addEventListener("click", goForward);
backwardBtn.addEventListener("click", goBack);
autoForwardBtn.addEventListener("click", autoForward);
autoBackwardBtn.addEventListener("click", autoBack);
stopBtn.addEventListener("click", stopAuto);
