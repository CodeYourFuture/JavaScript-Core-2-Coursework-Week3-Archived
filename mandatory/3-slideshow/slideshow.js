// Write your code here
const pics = [
  "https://upload.wikimedia.org/wikipedia/commons/8/85/Aankomst_FC_Liverpool_op_Schiphol%2C_voorop_Jan_St._John_achter_hem_Yeats%2C_Bestanddeelnr_919-8533.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/66/Tommy_Smith_%281966%29.jpg",
  "https://source.unsplash.com/hqKPgEVEc-8",
  "https://source.unsplash.com/K-x7h4NXtAY",
  "https://upload.wikimedia.org/wikipedia/commons/f/f4/Goldie_2003_crop.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kenny_Dalglish_1980s_%28cropped%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c1/Jimi_Hendrix_Experience_IMA_Auditorium_Flint_1968_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a1/Saturn_and_Earth_%284078015533%29.jpg"
];
// a function to move to the next image in the array
function slideForward() {
  let currentImage = document.getElementById("image").src;
  if (pics.indexOf(currentImage) < pics.length-1) {
    currentImage = pics[pics.indexOf(currentImage) + 1];
    document.getElementById("image").src = currentImage;
  } else {
    document.getElementById("image").src = pics[0];
  }
}
//  a function to move to the previous image in the array
function slideBack() {
  let currentImage = document.getElementById("image").src;
  if (pics.indexOf(currentImage) < 1) {
    document.getElementById("image").src = pics[pics.length-1];
  } else {
    currentImage = pics[pics.indexOf(currentImage) - 1];
    document.getElementById("image").src = currentImage;
  }
}

let goForward = null;
let goBackward = null;
// function that moves forward through the array at a timed interval
function autoFwd() {
  clearInterval(goBackward);
  clearInterval(goForward);
  goForward = setInterval(slideForward, 1500);
  goBackward = null;
}
// function that moves backward through the array at a timed interval
function autoBack() {
  clearInterval(goForward);
  clearInterval(goBackward);
  goBackward = setInterval(slideBack, 1500);
  goForward = null;
}
// a function to stop the autoplay functions
function stopPlay() {
  clearInterval(goBackward);
  clearInterval(goForward);
}
// assignment of eventListener functions
const fwdBtn = document.getElementById("forward");
const backBtn = document.getElementById("back");
const autoFwdBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-back");
const stopBtn = document.getElementById("stop");
fwdBtn.addEventListener("click", slideForward, false);
backBtn.addEventListener("click", slideBack, false);
autoFwdBtn.addEventListener("click", autoFwd, false);
autoBackBtn.addEventListener("click", autoBack, false);
stopBtn.addEventListener("click", stopPlay, false);
