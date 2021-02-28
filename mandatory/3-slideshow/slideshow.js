// Write your code here

let images = [
  {
    imageName: "Books",
    imageLink:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    imageName: "Furniture classroom",
    imageLink:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHNjaG9vbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    imageName: "Lecture Hall",
    imageLink:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHNjaG9vbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    imageName: "Pencils",
    imageLink:
      "https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fHNjaG9vbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
];
console.log(images.length);

let myDivImg = document.querySelector(".imgDiv");
let myH1 = document.createElement("h1");
myH1.innerText = "My Image Carousel";
myDivImg.appendChild(myH1);
let defaultImg = document.createElement("img");
defaultImg.src = images[0]["imageLink"];
myDivImg.appendChild(defaultImg);
let imgNam = document.createElement("h4");
imgNam.innerText = images[0]["imageName"];
myDivImg.appendChild(imgNam);

let divBtn = document.querySelector(".btnDiv");
myDivImg.appendChild(divBtn);

let backBtn = document.createElement("button");
backBtn.innerText = "Back";
divBtn.appendChild(backBtn);

let autoBackBtn = document.createElement("button");
autoBackBtn.innerText = "Auto Back";
divBtn.appendChild(autoBackBtn);

let stopBtn = document.createElement("button");
stopBtn.innerText = "Stop";
divBtn.appendChild(stopBtn);

let forwardBtn = document.createElement("button");
forwardBtn.innerText = "Forward";
divBtn.appendChild(forwardBtn);

let autoForwardBtn = document.createElement("button");
autoForwardBtn.innerText = "Auto Forward";
divBtn.appendChild(autoForwardBtn);

let counter = 0;
let stopBtnInterval;

function forwardBtnFunc() {
  counter += 1;
  counter = counter % images.length;
  defaultImg.src = images[counter]["imageLink"];
  imgNam.innerText = images[counter]["imageName"];
  console.log(counter);
}

function backBtnFunc() {
  if (counter === 0) {
    counter = images.length - 1;
  } else {
    counter -= 1;
  }
  // counter = counter % images.length;
  defaultImg.src = images[counter]["imageLink"];
  imgNam.innerText = images[counter]["imageName"];
  console.log(counter);
}

function stopBtnFunc() {
  clearInterval(stopBtnInterval);
}

function autoForwardFunc() {
  stopBtnFunc();
  stopBtnInterval = setInterval(forwardBtnFunc, 1000);
}

function autoBackFunc() {
  stopBtnFunc();
  stopBtnInterval = setInterval(backBtnFunc, 1000);
}

forwardBtn.addEventListener("click", forwardBtnFunc);
backBtn.addEventListener("click", backBtnFunc);
stopBtn.addEventListener("click", stopBtnFunc);
autoForwardBtn.addEventListener("click", autoForwardFunc);
autoBackBtn.addEventListener("click", autoBackFunc);