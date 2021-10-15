/* BODY */
const bodyEl = document.querySelector("body"); //grab body
bodyEl.style.backgroundColor = "#F1E3F3"; //body colour

/* JUMBO */
const jumbo = document.createElement("div"); //create jumbo div
bodyEl.appendChild(jumbo); //append jumbo
jumbo.classList.add("jumbo"); //add class to jumbo

/* HEADER */
const header = document.createElement("h1"); //create header
header.classList.add("header"); //add class to header
jumbo.appendChild(header); //append header
header.textContent = "Image Carousel"; //add header text

/* IMG-WRAP */
const imgWrap = document.createElement("div"); //create image wrapper
imgWrap.classList.add("img-wrapper"); //create wrapper class
jumbo.appendChild(imgWrap); //append div to jumbo.

/* IMG */
let img = document.createElement("Img"); //create image element
img.classList.add("img"); //image class
imgWrap.appendChild(img); //append img

/* COUNTER-WRAP */
const counterWrap = document.createElement("div"); //create image wrapper
counterWrap.classList.add("counter-wrap"); //create wrapper class
jumbo.appendChild(counterWrap); //append div to jumbo.

/* COUNTER-PARA */
const para = document.createElement("p"); //create para for img index
counterWrap.appendChild(para); //append para
para.classList.add("para"); //para class
//para.textContent = "num"; //para value

/* BTNS -WRAP */
const btnWrapper = document.createElement("div"); //create image wrapper
btnWrapper.classList.add("btn-wrapper"); //create wrapper class
jumbo.appendChild(btnWrapper); //append div to jumbo.

/* BTN ARRAY */
const btnArray = [
  { title: "Auto Back", id: "auto-back" },
  { title: "Back", id: "back" },
  { title: "Stop", id: "stop" },
  { title: "Forward", id: "forward" },
  { title: "Auto Forward", id: "auto-forward" },
];

/* CREATING EACH BUTTON */
btnArray.forEach((element) => {
  //creating each button
  const btn = document.createElement("button");
  btn.setAttribute("id", element.id);
  btn.classList.add("btn");
  btn.textContent = `${element.title}`;
  btnWrapper.appendChild(btn);
});

/* IMGS ARRAY */
const imgs = [
  "https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_960_720.jpg",
  "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
  "https://images.freeimages.com/images/large-previews/5c6/sunset-jungle-1383333.jpg",
  "https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.freeimages.com/images/large-previews/4a1/on-the-road-5-1384802.jpg",
];



/* FORWARD FUNCTION */
function forward() {
  let currIndex = imgs.indexOf(img.src); //find arr index of current img
  img.src = imgs[currIndex + 1]; //add 1 to image index position
  para.textContent = currIndex; // set paragraph index value 
}

/* AUTO-FORWARD FUNCTION */
function autoForward() {
  setInterval(forward, 4000);
  para.textContent = currIndex;
}

/* BACK FUNCTION */
function back() {
  let currIndex = imgs.indexOf(img.src); //find arr index of current img
  img.src = imgs[currIndex - 1]; //add 1 to image index position
  para.textContent = currIndex; // set paragraph index value
}

/* AUTO-BACK FUNCTION*/
function autoBack() {
  setInterval(back, 4000); //call back function every 4sec
  para.textContent = currIndex; // set paragraph index value
}

/* FORWARD EVENT*/
const forwardBtn = document.getElementById("forward"); //grab forward btn
forwardBtn.addEventListener("click", forward); //add event listener

/* BACK EVENT */
const backBtn = document.getElementById("back");
backBtn.addEventListener("click", back);

/* AUTO-FORWARD EVENT */
const autoForwardBtn = document.getElementById("auto-forward");
autoForwardBtn.addEventListener("click", autoForward);

/* AUTO-BACK EVENT */
const autoBackBtn = document.getElementById("auto-back");
autoBackBtn.addEventListener("click", autoBack);

/* STOP EVENT*/
const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", stop);

/* INITIAL IMAGE ON PAGE LOAD*/
function setup() {
    img.src = imgs[Math.floor(Math.random() * imgs.length)];
    para.textContent = currIndex;
  }

/* LOAD INITIAL IMAGE */
window.onload = setup; //load first image on window load
