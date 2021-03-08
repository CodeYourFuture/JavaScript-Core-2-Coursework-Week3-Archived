// Write your code here
const images = [
  "images/anna-dudkova-7Lf9qPaG2-s-unsplash.jpg",
  "images/bill-stephan-og0C_9Mz6RA-unsplash.jpg",
  "images/erin-minuskin-sWJiqcKdW8U-unsplash.jpg",
  "images/hanny-naibaho--Go4DH2pZbc-unsplash.jpg",
  "images/joe-caione-KVeogBZzl4M-unsplash.jpg",
  "images/kate-gu-B2GIlAjMdS8-unsplash.jpg",
  "images/magdalena-smolnicka-wfXIDJkq1TM-unsplash.jpg",
  "images/michael-kucharski-AZBMRWyfN6c-unsplash.jpg",
  "images/rhaul-v-alva-jCM48W7y6Y8-unsplash.jpg",
  "images/sophia-kunkel-cxlCuypQabs-unsplash.jpg",
];

const autoBackBtn = document.querySelector(".autoback");
autoBackBtn.addEventListener("click", () => autoBackClickHandler());
const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => backClickHandler());
const stopBtn = document.querySelector(".stop");
stopBtn.addEventListener("click", () => stopClickHandler());
const forwardBtn = document.querySelector(".forward");
forwardBtn.addEventListener("click", () => forwardClickHandler());
const autoForwardBtn = document.querySelector(".autoforward");
autoForwardBtn.addEventListener("click", () => autoForwardClickGHandler());

const imageEl = document.querySelector(".image");

let currentIndex = 0;
const render = () => {
  imageEl.src = images[currentIndex];
};

const forwardClickHandler = () => {
  currentIndex++;
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  }
  render();
};

const backClickHandler = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  render();
};

let interval = 0;
const autoForwardClickGHandler = () => {
  interval = setInterval(forwardClickHandler, 2000);
};

const autoBackClickHandler = () => {
  interval = setInterval(backClickHandler, 2000);
};

const stopClickHandler = () => {
  clearInterval(interval);
};

render();
