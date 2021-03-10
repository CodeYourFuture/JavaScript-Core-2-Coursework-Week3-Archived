// Write your code here
const imageUrls = [
  "https://images.unsplash.com/photo-1615372021685-b2dc6f9c2819?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615351897596-d3a9fffb5797?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1612832022002-66ee448468a4?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615294406523-120f6e4f3ac1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615349597898-4e3d0fb6d854?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615385164509-79243b513da2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615217482071-3ca1bacfeaaa?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615369794017-f65e6f0c0393?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615360509352-92a352aa73f7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615316285075-434e8664329c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615339721301-18437e4d9f74?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615216865517-f2e0c2cd79a1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615238909568-b99e2c4c7a5b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNjB8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

let counter = 0;
let interval;

function loadImage(index, direction) {
  let position;
  if (index == imageUrls.length) position = counter = 0;
  else if (index < 0) position = counter = imageUrls.length - 1;
  else position = index;

  let imageEl = document.querySelector("#my-image");
  console.log(position);
  imageEl.src = imageUrls[position];
  photoNumber.innerHTML = counter + 1;
  if (direction === "forward") counter++;
  else counter--;
}

const photoNumber = document.getElementById("photo-number");

//adding event listeners
const forwardButton = document.getElementById("forward");
forwardButton.addEventListener("click", function () {
  loadImage(++counter, "forward");
});

const autoForwardButton = document.getElementById("auto-forward");
autoForwardButton.addEventListener("click", function () {
  const slideFreq = document.getElementById("input-field").value;
  if (slideFreq) {
    clearInterval(interval);
    interval = setInterval(() => {
      loadImage(counter, "forward");
    }, parseInt(slideFreq) * 1000);
  }
});

const autoBackButton = document.getElementById("auto-back");
autoBackButton.addEventListener("click", function () {
  const slideFreq = document.getElementById("input-field").value;
  if (slideFreq) {
    clearInterval(interval);
    interval = setInterval(() => {
      loadImage(counter, "back");
    }, parseInt(slideFreq) * 1000);
  }
});

const backButton = document.getElementById("back");
backButton.addEventListener("click", function () {
  loadImage(--counter, "back");
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => clearInterval(interval));
