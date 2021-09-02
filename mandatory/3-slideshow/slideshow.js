// Write your code here

//slideshow img urls stored in array
let kittens = [
  "https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
  "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
];

//store img and button elements
let kittenImg = document.querySelector("img");
let fwdBtn = document.querySelector("#forward");
let backBtn = document.querySelector("#back");
let autoFwdBtn = document.querySelector("#autoFwd");
let autoBackBtn = document.querySelector("#autoBack");
let imgIndex = document.querySelector(".img-index");
//console.log(imgIndex);

let i = 0;
kittenImg.src = kittens[i]; //1st image from array rendered on load
imgIndex.innerHTML = i; //renders 0 onload


//FWD & BACK BTNS GLITCHY(pressing fwd at times moves slideshow back once & vice versa)

//increments current index value of kittens array by 1 on each click
fwdBtn.addEventListener("click", function () {
  //checks if current index value is equal to last kittens elem's index value
  if (i !== kittens.length - 1) {
    imgIndex.innerHTML = i; //renders corresponding index value
    return (kittenImg.src = kittens[i++]);
  } //changes img src url by incrementing array index at each click
  else {
    kittenImg.src = kittens[kittens.length - 1];
    imgIndex.innerHTML = i;
  }
});

//decrements current index value of kittens array by 1 on each click
backBtn.addEventListener("click", function () {
  if (i > 0) {
    imgIndex.innerHTML = i; //renders corresponding index value
    return (kittenImg.src = kittens[i--]);
  } else {
    imgIndex.innerHTML = i;
    kittenImg.src = kittens[0];
  }
});

//once clicked cycles from current img till last img
autoFwdBtn.addEventListener("click", function () {
  const fwdInterval = setInterval(function () {
    if (i < kittens.length - 1) {
      imgIndex.innerHTML = i;
      return (kittenImg.src = kittens[i++]);
    } else {
      imgIndex.innerHTML = i;
      clearInterval(fwdInterval);
      kittenImg.src = kittens[kittens.length - 1];
    }
  }, 1000);
});

//once clicked cycles backwards from current img till 1st img
autoBackBtn.addEventListener("click", function () {
  const backInterval = setInterval(function () {
    if (i > 0) {
      imgIndex.innerHTML = i;
      return (kittenImg.src = kittens[i--]);
    } else {
      imgIndex.innerHTML = i;
      clearInterval(backInterval);
      kittenImg.src = kittens[0];
    }
  }, 1000);
});
