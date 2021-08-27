let images = [
  {
    file: "img/Ireland-1.jpg",
    description: "Winding road though Irish countryside",
  },
  {
    file: "img/Ireland-2.jpg",
    description: "Traditional Irish cottage surrounded by countryside.",
  },
  {
    file: "img/Ireland-3.jpg",
    description: "Derelict Irish cottages overlooking the coast.",
  },
  {
    file: "img/Ireland-4.jpg",
    description: "Irish keep tower on a hill overlooking a valley.",
  },
  {
    file: "img/Ireland-5.jpg",
    description: "Cliffs overlooking the Irish coastline.",
  },
];

let imageNumber = 0;
let intervalDelay = 5000;
let delayUserFeedback = `                in seconds`;
let autoSlideShowForward;
let autoSlideShowBack;

// Function to render page elements and add event listeners
renderPage = () => {
  let html = document.querySelector("html");
  html.classList.add("html");

  let body = document.querySelector("body");
  body.classList.add("body");

  let gallery = document.querySelector("#gallery-container");
  gallery.classList = "gallery";

  gallery.replaceChildren();

  let h1 = document.createElement("h1");
  gallery.appendChild(h1);
  h1.classList = "h1";
  h1.innerText = "Views of Ireland";

  let img = document.createElement("img");
  gallery.appendChild(img);
  img.classList = "img";
  img.src = images[imageNumber].file;

  let imgDescription = document.createElement("div");
  gallery.appendChild(imgDescription);
  imgDescription.innerText = `Pic ${imageNumber + 1} : ${
    images[imageNumber].description
  }`;

  let mediaControls = document.createElement("div");
  gallery.appendChild(mediaControls);

  let autoBackButton = document.createElement("button");
  mediaControls.appendChild(autoBackButton);
  autoBackButton.setAttribute("id", "auto-back-button");
  autoBackButton.classList = "button";
  autoBackButton.innerText = "Auto Back";

  autoBackButton.addEventListener("click", () => {
    enableAutoSlideShowBack();
  });

  let backButton = document.createElement("button");
  mediaControls.appendChild(backButton);
  backButton.setAttribute("id", "back-button");
  backButton.classList = "button";
  backButton.innerText = "Back";

  backButton.addEventListener("click", () => {
    slideShowBack();
  });

  let stopButton = document.createElement("button");
  mediaControls.appendChild(stopButton);
  stopButton.setAttribute("id", "stop-button");
  stopButton.classList = "button";
  stopButton.innerText = "Stop";

  stopButton.addEventListener("click", () => {
    stopAutoSlideShow();
  });

  let forwardButton = document.createElement("button");
  mediaControls.appendChild(forwardButton);
  forwardButton.setAttribute("id", "forward-button");
  forwardButton.classList = "button";
  forwardButton.innerText = "Forward";

  forwardButton.addEventListener("click", () => {
    slideShowforward();
  });

  let autoForwardButton = document.createElement("button");
  mediaControls.appendChild(autoForwardButton);
  autoForwardButton.setAttribute("id", "autoForwardButton");
  autoForwardButton.classList = "button";
  autoForwardButton.innerText = "Auto Forward";

  autoForwardButton.addEventListener("click", () => {
    enableAutoSlideShowForward();
  });

  let form = document.createElement("form");
  gallery.appendChild(form);
  form.classList = "form";

  let setDelayButton = document.createElement("button");
  form.appendChild(setDelayButton);
  setDelayButton.setAttribute("id", "delay-button");
  setDelayButton.classList = "button";
  setDelayButton.innerText = "Set Delay";

  setDelayButton.addEventListener("click", () => {
    setIntervalDelay();
  });

  let delayTimeInput = document.createElement("input");
  form.appendChild(delayTimeInput);
  delayTimeInput.setAttribute("id", "delay-input");
  delayTimeInput.setAttribute("type", "number");
  delayTimeInput.classList = "delay-input";
  delayTimeInput.placeholder = delayUserFeedback;
};

// Sets slide show delay between slides, accepts seconds then converts to milliseconds and sets the time setting in the input field
setIntervalDelay = () => {
  let delayInput = document.querySelector("#delay-input").value;
  intervalDelay = delayInput * 1000;
  delayUserFeedback = `  ${delayInput}  second delay set`;
  renderPage();
};

// Moves slide show forward by one
slideShowforward = () => {
  if (imageNumber >= 0 && imageNumber < images.length - 1) {
    imageNumber++;
    renderPage();
  } else {
    imageNumber = 0;
    renderPage();
  }
};

// Automatically moves slide show forward by 1, default delay 5 seconds
enableAutoSlideShowForward = () => {
  autoSlideShowForward = setInterval(() => {
    if (imageNumber >= 0 && imageNumber < images.length - 1) {
      imageNumber++;
      renderPage();
    } else {
      imageNumber = 0;
      renderPage();
    }
  }, intervalDelay);
};

// Stops slide show
stopAutoSlideShow = () => {
  clearInterval(autoSlideShowForward);
  clearInterval(autoSlideShowBack);
};

// Moves slide show back by one
slideShowBack = () => {
  if (imageNumber > 0 && imageNumber <= images.length - 1) {
    imageNumber--;
    renderPage();
  } else {
    imageNumber = 4;
    renderPage();
  }
};

// Automatically moves slide show backwards by 1, default delay 5 seconds
enableAutoSlideShowBack = () => {
  autoSlideShowBack = setInterval(() => {
    if (imageNumber > 0 && imageNumber <= images.length - 1) {
      imageNumber--;
      renderPage();
    } else {
      imageNumber = 4;
      renderPage();
    }
  }, intervalDelay);
};

renderPage();
