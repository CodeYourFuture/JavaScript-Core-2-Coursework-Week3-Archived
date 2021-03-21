// Write your code here
let backButton = document.getElementById('back');
let forwardButton = document.getElementById('forward');
let images = document.getElementById('img');
let autoBack = document.getElementById('autoBack');
let autoForward = document.getElementById('autoForward');
let stopEl = document.getElementById('stop');


forwardButton.addEventListener('click', funcForward);
backButton.addEventListener('click', funcBack);

images.src = places[0];
let num = 0;

function funcForward() {
  if (num === places.length - 1) {
    num = -1;
  }

  images.src = places[num + 1];
  num++;
}

function funcBack() {
  if (num === 0) {
    num = places.length;
  }

  images.src = places[num - 1];
  num--;
}

let autoFor;
let autoBa;

autoForward.addEventListener('click',function () {
  autoFor = setInterval(funcForward, 3000)
  
});

autoBack.addEventListener('click',function () {
  autoBa = setInterval(funcBack, 3000)
  
});

stopEl.addEventListener('click',function () {
  clearInterval(autoForward);
  clearInterval(autoBack);
  
});

const places = [
'https://unsplash.com/photos/UwvwBsLzlWI',
'https://unsplash.com/photos/xff675DpDAQ',
'https://unsplash.com/photos/c9XeS3QGhJg',
'https://unsplash.com/photos/6QOG3xSo12g',
'https://unsplash.com/photos/V1ZBxnupqf0',
'https://unsplash.com/photos/c9XeS3QGhJg'

]