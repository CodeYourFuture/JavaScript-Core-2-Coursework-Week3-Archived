// Write your code here
let img = document.getElementById("img");
let backBtn = document.getElementById("back");
let forwardBtn = document.getElementById("forward");
let stopBtn = document.getElementById("stop");
let autoBackBtn = document.getElementById("auto-back");
let autoForwardBtn = document.getElementById("auto-forward");

let imagesArr = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];

let i = 0;
img.src = imagesArr[i];

//Back Button
backBtn.addEventListener("click", function () {
    if (i === 0) {
    i = imagesArr.length - 1;
} else {
    i --;
}
img.src = imagesArr[i];
});

//forward Button
forwardBtn.addEventListener("click", function () {
    if (i < imagesArr.length-1) {
    i ++;
} else {
    i = 0;
}
img.src = imagesArr[i];
});

// Auto Forward Button
let stopAutoForward;
autoForwardBtn.addEventListener("click", function () {
stopAutoForward = setInterval(function () {
 if (i < imagesArr.length-1) {
    i ++;
} else {
    i = 0;
}
img.src = imagesArr[i];
}, 2000);
});

//Auto back Button
let stopAutoBack;
autoBackBtn.addEventListener("click", function () {
stopAutoBack = setInterval(function () {
  if (i === 0) {
    i = imagesArr.length - 1;
} else {
    i --;
}
img.src = imagesArr[i];
}, 2000);
})

//Stop Button
stopBtn.addEventListener("click", function () {
    clearInterval(stopAutoBack);
    clearInterval(stopAutoForward);
})




