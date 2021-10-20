// Write your code here
const imgs = [
  "/mandatory/3-slideshow/example-screenshots/pexels-bri-schneiter-346529.jpg",
  "/mandatory/3-slideshow/example-screenshots/pexels-creative-vix-9754.jpg",
  "/mandatory/3-slideshow/example-screenshots/pexels-eberhard-grossgasteiger-443446.jpg",
  "/mandatory/3-slideshow/example-screenshots/pexels-sagui-andrea-618833.jpg",
];

const newDiv = document.createElement("div");
newDiv.className = "newDiv";
let h5 = document.createElement("h5");
h5.innerText = "Mountains";
const forward = document.createElement("button");
forward.innerText = "Forward";
const back = document.createElement("button");
back.innerText = "Back";
const auto = document.createElement("button");
auto.innerText = "Auto";
const Stop = document.createElement("button");
Stop.innerText = "Stop";
const btnDiv = document.createElement("div");
const newImg = document.createElement("img");
document.body.appendChild(h5);
document.body.appendChild(newDiv);
newDiv.appendChild(btnDiv);
btnDiv.appendChild(auto);
btnDiv.appendChild(Stop);
btnDiv.appendChild(forward);
btnDiv.appendChild(back);
var i = 0;
function changeForward() {
  newImg.src = imgs[i];
  newDiv.appendChild(newImg);
  newImg.className = "newImg";
  if (i < imgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
function changeBack() {
  newImg.src = imgs[i];
  newDiv.appendChild(newImg);
  newImg.className = "newImg";
  if (i > 0) {
    i--;
  } else {
    i = imgs.length - 1;
  }
}


forward.addEventListener("click", changeForward);
back.addEventListener("click", changeBack);
auto.addEventListener("click",autoSlide);
Stop.addEventListener("click", stopSlide);

let interval;
function autoSlide(){
 interval = setInterval(changeBack, 500);
}

function stopSlide(){
 clearInterval(interval);
}





window.onload = changeForward;
