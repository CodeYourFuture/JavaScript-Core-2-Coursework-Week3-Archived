// Write your code here
const images = [
  "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  "https://i.etsystatic.com/15568096/r/il/e1ced4/2010945485/il_794xN.2010945485_a6x4.jpg",
  "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
  "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
  "https://www.iams.com/images/default-source/article-image/article_stomach-issues-in-cats-why-cats-vomit-and-what-to-do_header.jpg",
];

const autoback = document.getElementById("autoback");
let backButton = document.getElementById("back");
const hold = document.getElementById("stop");
const forward = document.getElementById("forward");
const autoforward = document.getElementById("autoforward");

autoback.addEventListener("click", fautobackward);
backButton.addEventListener("click", fback);
hold.addEventListener("click", fhold);
forward.addEventListener("click", fforward);
autoforward.addEventListener("click", fautoforward);

let picNum = 0;

function fautoforward() {
  autoForwardInterval = setInterval(() => {
    let img = document.getElementById("firstpic");
    if (picNum === images.length - 1) {
      picNum = 0;
    } else {
      picNum++;
    }
    img.src = images[picNum];
  }, 2000);
}

function fautobackward() {
  autoBackwardInterval = setInterval(() => {
    let img = document.getElementById("firstpic");
    if (picNum === 0) {
      picNum = images.length - 1;
    } else {
      picNum--;
    }
    img.src = images[picNum];
  }, 2000);
}

function fhold() {
  let img = document.getElementById("firstpic");
  img.src = images[0];
  clearInterval(autoForwardInterval);
  clearInterval(autoBackwardInterval);
}

function fback() {
  let img = document.getElementById("firstpic");

  if (picNum === 0) {
    picNum = images.length - 1;
  } else {
    picNum--;
  }
  img.src = images[picNum];
}

function fforward() {
  let img = document.getElementById("firstpic");
  if (picNum === images.length - 1) {
    picNum = 0;
  } else {
    picNum++;
  }
  img.src = images[picNum];
}
