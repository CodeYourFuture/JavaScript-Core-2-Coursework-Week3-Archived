// Write your code here
// Worked with Abadi on this task

let images = [
  {
    src: "img/a-man-wanders-through-red-arches-in-japan.jpg",
    alt: "image1",
  },
  {
    src: "img/chinese-lanterns-glow-on-storefront.jpg",
    alt: "chinese-lanterns-glow-on-storefront",
  },
  {
    src: "img/dancing-with-temples-in-the-orange-mist.jpg",
    alt: "image3",
  },
  {
    src: "img/footsteps-left-in-sand-dunes.jpg",
    alt: "footsteps left in sand-dunes",
  },
  {
    src: "img/hiker-looks-out-over-bay-surrounded-by-mountains.jpg",
    alt: "hiker-looks-out-over-bay-surrounded-by-mountains",
  },
  {
    src: "img/man-wearing-loose-clothing-walks-through-jungle.jpg",
    alt: "man-wearing-loose-clothing-walks-through-jungle",
  },
  {
    src: "img/woman-walks-up-a-historical-japanese-path.jpg",
    alt: "woman-walks-up-a-historical-japanese-path",
  },
];

//

const imageEl = document.querySelector("#images img");
const delayEl = document.getElementById("delay");
imageEl.src = images[0].src;
imageEl.alt = images[0].alt;
let index = 0;
let intervalId;
let intervalDelay = 1000;
// console.log(delayEl.value);
//function pickFromArray (image)
function forwardGenerator() {
  if (index < images.length - 1) {
    index = index + 1;
    imageEl.src = images[index].src;
    imageEl.alt = images[index].alt;
    console.log(index);
  } else {
    // alert("The end ;)");
    index = 0;
  }
}
function autoForwardGenerator() {
  delayCalac();
  intervalId = setInterval(function () {
    if (index < images.length - 1) {
      index = index + 1;
      imageEl.src = images[index].src;
      imageEl.alt = images[index].alt;
      // console.log(index);
    } else {
      // alert("The end ;)");
      index = 0;
      // clearInterval(intervalId);
    }
  }, intervalDelay);
}

function stopSlide() {
  clearInterval(intervalId);
}

function backGenerator() {
  if (index > 0) {
    index = index - 1;
    imageEl.src = images[index].src;
    imageEl.alt = images[index].alt;
    //console.log(index)
  } else {
    // alert("The start ;)");
    index = 0;
  }
}

function autoBackGenerator() {
  delayCalac();
  intervalId = setInterval(function () {
    if (index > 0) {
      index = index - 1;
      imageEl.src = images[index].src;
      imageEl.alt = images[index].alt;
      //console.log(index)
    } else {
      // alert("The start ;)");
      index = 0;
      clearInterval(intervalId);
    }
  }, intervalDelay);
}

// helper

function delayCalac() {
  if (delayEl.value) {
    intervalDelay = 0;
    intervalDelay = delayEl.value;
  } else {
    intervalDelay = 0;
    intervalDelay = 1000;
  }
}
