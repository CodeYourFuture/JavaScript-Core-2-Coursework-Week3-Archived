// Write your code here
let img = document.getElementById("img");
let backBtn = document.getElementById("back");
let forwardBtn = document.getElementById("forward");
let stopBtn = document.getElementById("stop");
let autoBackBtn = document.getElementById("auto-back");
let autoForwardBtn = document.getElementById("auto-forward");

let imagesArr = ["img2.jpg", "img3.jpg", "img4.jpg"];
console.log(imagesArr)
var i = 0;

backBtn.addEventListener("click", function () {
    if (i <= 0) {
    i = imagesArr.length;
    i --;
    //return setImg();
}
});

forwardBtn.addEventListener("click", function () {
    if (i >= imagesArr.length-1) {
    i = -1;
    i ++;
    //return setImg;
}
});

// function setImg() {
//     return img.setAttribute("src", "img/" + imagesArr[i]);
// };