// Write your code here
//images array
const img = [
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1636557343665-dcf9adcead85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=486&q=80",
  "https://images.unsplash.com/photo-1636478910715-0c21e7647590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=463&q=80",
  "https://images.unsplash.com/photo-1636565214233-6d1019dfbc36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=487&q=80",
];

const div = document.createElement("div");
div.classList.add("slideshow");
document.body.appendChild(div);

//image element
const imgElement = document.createElement("img");
imgElement.src = img[0];
imgElement.className = "slideshow-img";
div.appendChild(imgElement);

//div for buttons
const divButtons = document.createElement("div");
divButtons.className = "slideshow-buttons";
document.body.appendChild(divButtons);

//previous button element
const preButton = document.createElement("button");
preButton.className = "slideshow-button";
preButton.innerHTML = "❮ Prev";
divButtons.appendChild(preButton);

//next button element
const nextButton = document.createElement("button");
nextButton.className = "slideshow-button";
nextButton.innerHTML = "Next ❯";
divButtons.appendChild(nextButton);

//auto backward button
const autoBackwardBtn = document.createElement("button");
autoBackwardBtn.className = "slideshow-button";
autoBackwardBtn.innerHTML = "❮❮ auto backward";
divButtons.appendChild(autoBackwardBtn);

//auto forward button
const autoForwardBtn = document.createElement("button");
autoForwardBtn.className = "slideshow-button";
autoForwardBtn.innerHTML = "auto forward ❯❯";
divButtons.appendChild(autoForwardBtn);

//counter
let counter = 0;

//next button click event
nextButton.addEventListener("click", function () {
  counter++;
  if (counter > img.length - 1) {
    counter = 0;
    imgElement.src = img[counter];
  } else {
    imgElement.src = img[counter];
  }
});

//previous button click event
preButton.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = img.length - 1;
    imgElement.src = img[counter];
  } else {
    imgElement.src = img[counter];
  }
});

//event listener for auto forward button
autoForwardBtn.addEventListener("click", function () {
  setInterval(function () {
    counter++;
    if (counter > img.length - 1) {
      counter = 0;
      imgElement.src = img[counter];
    } else {
      imgElement.src = img[counter];
    }
  }, 2000);
});

//event listener for auto backward button
autoBackwardBtn.addEventListener("click", function () {
  setInterval(function () {
    counter--;
    if (counter < 0) {
      counter = img.length - 1;
      imgElement.src = img[counter];
    } else {
      imgElement.src = img[counter];
    }
  }, 2000);
});
