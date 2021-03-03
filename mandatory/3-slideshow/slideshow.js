let images = [
  {
    imageName: "Design 1",
    imageLink:
      "https://images.unsplash.com/photo-1577083165350-16c9f88b4a25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80",
  },
  {
    imageName: "Design 2",
    imageLink:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHxkZXNpZ258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    imageName: "Design 3",
    imageLink:
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
  },
  {
    imageName: "Design 4",
    imageLink:
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];
console.log(images.length);

let divImg = document.querySelector(".imgDiv");
let headerOne = document.createElement("h1");
headerOne.innerText = "My Image Carousel";
divImg.appendChild(headerOne);
let defaultImg = document.createElement("img");
defaultImg.src = images[0]["imageLink"];
divImg.appendChild(defaultImg);
let imgNam = document.createElement("h4");
imgNam.innerText = images[0]["imageName"];
divImg.appendChild(imgNam);

let divBtn = document.querySelector(".btnDiv");
divImg.appendChild(divBtn);

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
