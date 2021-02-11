// Write your code here

let i = 0;
let images = [];
let time = 3000;

// let img0 = document.getElementById("");
let imgsrc0 =
  "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

// let img[1] = document.getElementById("dog");
let imgsrc1 =
  "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80";

// let img[2] = document.getElementById("horse");
let imgsrc2 =
  "https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

// let img[3] = document.getElementById("rabbit");
let imgsrc3 =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

images = [imgsrc0, imgsrc1, imgsrc2, imgsrc3];
// console.log(images);

let image = document.getElementById("img");

function nextImage() {
  // document.hasChildNodes.src = images[i];

  i++;
  if (i >= images.length) {
    i = 0;
  }
  image.src = images[i];
}

document.addEventListener("DOMContentLoaded", function onLoadImage() {
  let btn = document.getElementById("btnFwd");

  image.src = images[0];
  // console.log(image);
  btn.addEventListener("click", nextImage);
  // changeImg();
});

document.addEventListener("DOMContentLoaded", function onLoadImage() {
  let btn = document.getElementById("btnBwd");

  image.src = images[0];
  // console.log(image);
  btn.addEventListener("click", previousImage);
  // changeImg();
});

// function displayImage() {
// let image = document.getElementById("img");

function previousImage() {
  // document.hasChildNodes.src = images[i];

  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  image.src = images[i];
}
