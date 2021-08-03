// Write your code here
let slider = document.querySelector(".slider-img");
let images = [
  "./images/a.jpg",
  "./images/b.jpg",
  "./images/c.jpg",
  "./images/d.jpg",
  "./images/e.jpg",
];

let fBtn = document.querySelector("#forward");
let bBtn = document.querySelector("#back");
let autoF = document.querySelector("#auto-F");
let autoB = document.querySelector("#auto-B");

let i = 0; //current img index

//Auto-Forward button
autoF.addEventListener("click", () => {
  let fastForward = setInterval(() => {
    if (i >= 0 && i < images.length - 1) {
      i++;
      slider.setAttribute("src", images[i]);
    }
    if (i === images.length - 1) {
      clearInterval(fastForward);
    }
  }, 1000);
});

//Back button
autoB.addEventListener("click", () => {
  let backForward = setInterval(() => {
    if (i >= 0 && i < images.length && i > 0) {
      i--;
      slider.setAttribute("src", images[i]);
    }
    if (i === 0) {
      clearInterval(backForward);
    }
  }, 1000);
});

//forward button
fBtn.addEventListener("click", () => {
  if (i >= 0 && i < images.length - 1) {
    i += 1;
    slider.setAttribute("src", images[i]);
  }
});

//back button
bBtn.addEventListener("click", () => {
  if (i >= 0 && i < images.length && i > 0) {
    i -= 1;
    slider.setAttribute("src", images[i]);
  }
});
