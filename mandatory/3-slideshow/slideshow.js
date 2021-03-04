let imageEl = document.querySelector("#myImg");
let fname = document.querySelector(".flowerName");

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
fname.innerText = flowers[0].name;
let i = 0;

function forward() {
  i++;

  if (i < flowers.length) {
    imageEl.src = flowers[i].src;
    fname.innerText = flowers[i].name;
  } else {
    i = 0;
    imageEl.src = flowers[i].src;
    fname.innerText = flowers[i].name;
  }
}

function backWard() {
  i--;

  if (i >= 0) {
    imageEl.src = flowers[i].src;
    fname.innerText = flowers[i].name;
  } else {
    i = flowers.length - 1;
    imageEl.src = flowers[i].src;
    fname.innerText = flowers[i].name;
  }
}

let start, startBack;

document.querySelector(".forward").addEventListener("click",  forward)
  
  

document.querySelector(".backward").addEventListener("click", backWard);

document.querySelector(".autoForward").addEventListener("click", () => {
  if (startBack) {
    clearInterval(startBack);
  }
  start = setInterval(forward, 5000);
});

document.querySelector(".autoBackward").addEventListener("click", () => {
  if (start) {
    clearInterval(start);
  }
  startBack = setInterval(backWard, 5000);
});

document.querySelector(".stop").addEventListener("click", () => {

  if(start){
    clearInterval(start);
  }else{
    clearInterval(startBack);
  }
  
});
