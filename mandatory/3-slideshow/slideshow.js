// declare global variables
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

// *Extra feature- declare and initalise variable
let interval = document.getElementById("time-interval").value;

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
      runAtIntervals = setInterval(
        startSlideShow,
        interval * 1000,
        activeBtn.id
      );
      activeBtn.textContent = "Stop";
      break;
    case "<<- Auto Backward":
      stopSlideShow();
      inactiveBtn = document.getElementById("btn-forward");
      inactiveBtn.textContent = "Auto Forward ->>";
      runAtIntervals = setInterval(
        startSlideShow,
        interval * 1000,
        activeBtn.id
      );
      activeBtn.textContent = "Stop";
      break;
    case "Stop":
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

/******************** Extra Feature ****************/
// enable or disable the "Set" button depending on the value entered in the input box
document
  .getElementById("time-interval")
  .addEventListener("input", controlSetButton);

function controlSetButton(e) {
  const btn = document.getElementById("set-interval");
  if (!e.target.value || e.target.value <= 0) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

// add click-event listener to the "Set" button to update the slideshow interval "automatically"
document
  .getElementById("set-interval")
  .addEventListener("click", updateInterval);

function updateInterval() {
  // get the newly set slideshow interval
  interval = document.getElementById("time-interval").value;
  // get the auto-slideshow control buttons, i.e. buttonFwd and buttonBwd
  let buttons = [buttonFwd, buttonBwd];

  // first verify if auto-slideshow has been started by either button. If so,...
  let myButton = buttons.find((button) => button.textContent === "Stop");
  if (myButton !== undefined) {
    // ...identify the button
    const index = buttons.indexOf(myButton);
    if (index === 0) {
      myButton = buttonFwd;
    } else {
      myButton = buttonBwd;
    }
    // create and simulate click event for myButton
    let myEvent = new MouseEvent("click");
    myButton.dispatchEvent(myEvent); // stops the slideshow momentarily
    myButton.dispatchEvent(myEvent); // restarts the slideshow with updated interval
  }
}
