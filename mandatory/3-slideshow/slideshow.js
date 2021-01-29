// Write your code here
const images = [
  {
    src: "images/still-water-1.jpg",
    alt: "still-water-1",
  },
  {
    src: "images/still-water-2.jpg",
    alt: "still-water-2",
  },
  {
    src: "images/still-water-3.jpg",
    alt: "still-water-3",
  },
  {
    src: "images/still-water-4.jpg",
    alt: "still-water-4",
  },
];

let img, spanNum, spanTot, spanPrev, spanNext, buttonFwd, buttonBwd; // html element related
let lowerIndex, higherIndex; // carousel navigation related
let runAtIntervals; // related carousel auto navigation control

// initial setup
function setup() {
  // initialize variables
  img = document.getElementById("img-lake");
  spanNum = document.getElementById("img-number");
  spanTot = document.getElementById("total-images");
  spanPrev = document.getElementById("prev");
  spanNext = document.getElementById("next");

  buttonFwd = document.getElementById("btn-forward");
  buttonBwd = document.getElementById("btn-backward");

  // ...add 'onclick' event listeners as well as...
  spanPrev.addEventListener("click", showPrevious); // for manual navigation
  spanNext.addEventListener("click", showNext); // for manual navigation
  buttonFwd.addEventListener("click", controlSlideShow); // for automatic navigation
  buttonBwd.addEventListener("click", controlSlideShow); // for automatic navigation
  // ...'onmouseover' event listeners
  spanPrev.addEventListener("mouseover", onMouseHover);
  spanNext.addEventListener("mouseover", onMouseHover);

  display(0);
}

// window.onload = display(0);
window.onload = setup();

// This function displays the main contents of the html
function display(i) {
  // set html element properties and/or attributes
  img.src = images[i].src;
  img.alt = images[i].alt;
  spanNum.textContent = i + 1;
  spanTot.textContent = images.length;

  // update image number tracking variables' values
  lowerIndex = parseInt(spanNum.textContent) - 1;
  higherIndex = parseInt(spanNum.textContent);
}

/************** Manual carousel control using a navigation buttons ****************
 * The user has to manually click the control buttons at either side of the carousel
 * to see the previous or next image
 */

// define event handler functions

function showPrevious() {
  lowerIndex--;
  if (lowerIndex === -1) {
    // i = 0;
    display(3);
  } else {
    display(lowerIndex);
  }
}

function showNext() {
  if (higherIndex === images.length) {
    display(0);
  } else {
    display(higherIndex);
  }
}

function onMouseHover(e) {
  e.target.style.cursor = "pointer";
}

/************* Automatic carousel control using a control button ************
 * Users can use the button at the bottom of the image to see images as a slideshow
 * They can click the same button to stop the slideshow if they choose to
 */

// Main function to control the images slideshow when the control button is clicked
function controlSlideShow(e) {
  let activeBtn = e.target;
  let inactiveBtn;

  switch (activeBtn.textContent) {
    case "Auto Forward ->>":
      stopSlideShow();
      inactiveBtn = document.getElementById("btn-backward");
      inactiveBtn.textContent = "<<- Auto Backward";
      runAtIntervals = setInterval(startSlideShow, 3000, activeBtn.id);
      activeBtn.textContent = "Stop";
      break;
    case "<<- Auto Backward":
      stopSlideShow();
      inactiveBtn = document.getElementById("btn-forward");
      inactiveBtn.textContent = "Auto Forward ->>";
      runAtIntervals = setInterval(startSlideShow, 3000, activeBtn.id);
      activeBtn.textContent = "Stop";
      break;
    case "Stop":
      console.log(activeBtn.id);
      stopSlideShow();
      if (activeBtn.id === "btn-forward") {
        activeBtn.textContent = "Auto Forward ->>";
      } else {
        activeBtn.textContent = "<<- Auto Backward";
      }
      break;
  }
}

// Function to show image slides at the set interval
function startSlideShow(id) {
  if (id === "btn-forward") {
    showNext();
  } else {
    // if id === "btn-backward"
    showPrevious();
  }
}

// Function to stop the slideshow
function stopSlideShow() {
  clearInterval(runAtIntervals);
}