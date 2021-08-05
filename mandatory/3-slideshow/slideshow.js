// Write your code here

// store the links of the images in an array 
// Follow these steps: 
// 1) Structure the HTML
//    a) create div content container, set its id and class, 
//    b) inside container create h1, another div for image container and below the nested div, create another div for buttons 
//    c) image container div should have img tag
//    d) buttons container div should have two buttons, one with value and id set to back, and another one is to forward 
//    e) add Auto Back, Stop and Auto Forward Buttons to the buttons container
// 2) Make the page dynamic with JS
//    a) Store images source url in an array 
//    b) get the img tag in html, store it in a var
//    c) Create back and forward functions, these functions should change the src attribute of img tag with the array elements at each index, forward function should increment the index number by one, when the index is array.length, it should become 0 
//    d) Back function should decrement the index number by one, when the index is 0, it should become array.length -1 
//    e) add event listener to the buttons
//    f) Create Auto Back and Auto Forward functions, they should have setInterval inside that each 2 seconds change the image in the according direction 
// 3) Style the page with CSS


const natureImages = [
  "https://images.unsplash.com/photo-1457264635001-828d0cbd483e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
  "https://images.unsplash.com/photo-1581279218235-c84944a0fed7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
  "https://images.unsplash.com/photo-1603979649806-5299879db16b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  "https://images.unsplash.com/photo-1558253775-db8cf6c4087c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  "https://images.unsplash.com/photo-1600791080058-ada091a95c14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
  "https://images.unsplash.com/photo-1603030580676-86501e25445c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
];

const image = document.getElementById("image");
const pIndex = document.getElementById("index");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const autoBackBtn = document.getElementById("autoBackBtn");
const autoForwardBtn = document.getElementById("autoForwardBtn");
const stopBtn = document.getElementById("stopBtn");
let intervalId;

(function getRandomImage () {
    const randomIndex = Math.floor(Math.random() * natureImages.length);
    image.src = natureImages[randomIndex];
}) ();

(function displayIndex() {
  // since I need to call getRandomImage initially in order to get the index of the random image, displayIndex function declared and called (at the same time) after getRandomImage function
  let index = natureImages.indexOf(image.src);
  pIndex.innerText = index;
})();

function forward () {
    let index = natureImages.indexOf(image.src);
    if(index < natureImages.length - 1) {
        index++;
    } else if (index === natureImages.length - 1) {
        index = 0;
    }
    image.src = natureImages[index];
    pIndex.innerText = index;
}

function back () {
    let index = natureImages.indexOf(image.src);
    if (index > 0) {
      index--;
    } else if (index === 0) {
      index = natureImages.length - 1;
    }
    image.src = natureImages[index];
    pIndex.innerText = index;
}

function autoForward () {
    if(intervalId) clearInterval(intervalId);
    intervalId = setInterval(forward, 2000);
}

function autoBack () {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(back, 2000);
}

function stop() {
  if (intervalId) clearInterval(intervalId);
}

backBtn.addEventListener("click", back);
forwardBtn.addEventListener("click", forward);
autoBackBtn.addEventListener("click", autoBack);
autoForwardBtn.addEventListener("click", autoForward);
stopBtn.addEventListener("click", stop);