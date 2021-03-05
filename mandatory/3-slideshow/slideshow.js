let imageEl = document.querySelector("#myImg");
let imgName = document.querySelector(".flowerName");

const flowers = [
  {
    name: " 0 flower",
    src: "img/1.jpg",
  },

  {
    name: "1 flower",
    src: "img/2.jpg",
  },

  {
    name: " 2 flower",
    src: "img/3.jpg",
  },

  {
    name: "3 flower",
    src: "img/4.jpg",
  },

  {
    name: "4 flower",
    src: "img/5.jpg",
  },
];

imageEl.src = flowers[0].src;
imgName.innerText = flowers[0].name;
let currentSlide = 0;

function forward() {
  currentSlide++;

  if (currentSlide < flowers.length) {
    imageEl.src = flowers[currentSlide].src;
    imgName.innerText = flowers[currentSlide].name;
  } else {
    currentSlide = 0;
    imageEl.src = flowers[currentSlide].src;
    imgName.innerText = flowers[currentSlide].name;
  }
}

function backWard() {
  currentSlide--;

  if (currentSlide >= 0) {
    imageEl.src = flowers[currentSlide].src;
    imgName.innerText = flowers[currentSlide].name;
  } else {
    currentSlide = flowers.length - 1;
    imageEl.src = flowers[currentSlide].src;
    imgName.innerText = flowers[currentSlide].name;
  }
}

let start, startBack;

document.querySelector(".forward").addEventListener("click", forward);

document.querySelector(".backward").addEventListener("click", backWard);

document.querySelector(".autoForward").addEventListener("click", () => {
  if (startBack) {
    clearInterval(startBack);
  }
  start = setInterval(forward, 2000);
});

document.querySelector(".autoBackward").addEventListener("click", () => {
  if (start) {
    clearInterval(start);
  }
  startBack = setInterval(backWard, 2000);
});

document.querySelector(".stop").addEventListener("click", () => {
  if (start) {
    clearInterval(start);
  }
  if (startBack) {
    clearInterval(startBack);
  }
});
