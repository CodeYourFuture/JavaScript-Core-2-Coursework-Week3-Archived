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
imageEl.src = images[0].src;
imageEl.alt = images[0].alt;
let count = 0;
let intervalId;
//function pickFromArray (image)
function forwardGenerator() {
  if (count < images.length - 1) {
    count = count + 1;
    imageEl.src = images[count].src;
    imageEl.alt = images[count].alt;
    console.log(count);
  } else {
    alert("The end ;)");
  }
}
function autoForwardGenerator() {
  intervalId = setInterval(function () {
    if (count < images.length - 1) {
      count = count + 1;
      imageEl.src = images[count].src;
      imageEl.alt = images[count].alt;
      console.log(count);
    } else {
      alert("The end ;)");
      clearInterval(intervalId);
    }
  }, 1000);
}

function stopSlide() {
  clearInterval(intervalId);
}

function backGenerator() {
  if (count > 0) {
    count = count - 1;
    imageEl.src = images[count].src;
    imageEl.alt = images[count].alt;
    //console.log(count)
  } else {
    alert("The start ;)");
  }
}

function autoBackGenerator() {
  intervalId = setInterval(function () {
    if (count > 0) {
      count = count - 1;
      imageEl.src = images[count].src;
      imageEl.alt = images[count].alt;
      //console.log(count)
    } else {
      alert("The start ;)");
      clearInterval(intervalId);
    }
  }, 1000);
}
