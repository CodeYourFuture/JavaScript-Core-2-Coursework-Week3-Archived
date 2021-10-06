// how we store the images
const imageStorage = [
  {
    imageSource:
      "https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80",
    altText:
      "A lovely center framed road guiding your eye through the dangerous but peaceful desert  flanking the road on all fronts. In the distance is a foreboding mountain welcoming you to wonder closer.",
  },
  {
    imageSource:
      "https://images.unsplash.com/photo-1553474157-5f29a57c167f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    altText:
      "A blue ocean takes up most of the shot, it's so clear that you can see the sand underneath. A small canoe is taking the tranquil quest of crossing Davy Jones's deep blue seaway.",
  },
  {
    imageSource:
      "https://images.unsplash.com/photo-1553289038-6638b1a1802a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    altText:
      "A relentless ocean takes up the lower 40% of the shot. Above that is the sky, morning or just turning to night. Either way, it looks like a lovely place to be.",
  },
  {
    imageSource:
      "https://images.unsplash.com/photo-1551509134-2f9d4ec80a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    altText:
      "A picture taken at night of some distant colossal mountains which are overshadowed by the stars above.",
  },
  {
    imageSource:
      "https://images.unsplash.com/photo-1553070961-84862f0a79a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    altText:
      "A calming picture of two palm trees taken at an hour where the sun is bright and the clouds are as clear as can be.",
  },
];

// assume we start at index 0
let index = 0;

// user clicking the forward or backwards button
function manualControl(direction) {
  const image = document.querySelector("#image");

  if (direction === "forwards") {
    index++;
    // setting index to 0, the first element in the array
    if (index === imageStorage.length) index = 0;
  }
  if (direction === "backwards") {
    index--;
    // setting index to the length of the array -1, so the last element
    if (index < 0) index = imageStorage.length - 1;
  }

  image.src = `${imageStorage[index].imageSource}`;
  image.alt = `${imageStorage[index].altText}`;
}

function changeTimeBetweenText(value) {
  const getAppendedText = document.querySelector("#appendedText");
  getAppendedText.innerText = `${value}s`;
}

let autoTimer;
function automaticControl(direction) {
  let timeToWait = document.querySelector("#howLongToWait").value;
  autoTimer = setTimeout(() => {
    manualControl(direction);
    automaticControl(direction);
  }, timeToWait * 1000);
}

function timerLogic(direction) {
  if (typeof autoTimer === "undefined" || autoTimer === false) {
    automaticControl(direction);
  } else if (typeof autoTimer === "number") {
    clearInterval(autoTimer);
    console.log("timer stopped");
    autoTimer = false;
  }
}

function setup() {
  // auto backwards button
  document.querySelector("#autoBackButton").addEventListener("click", () => {
    timerLogic("backwards");
  });

  // backwards button
  document
    .querySelector("#BackwardsButton")
    .addEventListener("click", () => manualControl("backwards"));

  // stop button
  document
    .querySelector("#stopButton")
    .addEventListener("click", () => timerLogic());

  // auto forward button
  document.querySelector("#autoForwardButton").addEventListener("click", () => {
    timerLogic("forwards");
  });

  // forwards button
  document
    .querySelector("#forwardButton")
    .addEventListener("click", () => manualControl("forwards"));
}

setup();
