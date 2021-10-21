// Write your code here
let userDefinedPace = 2;
//selecting the body element of the html doc
let body = document.querySelector("body");

//this will hold the slideshow bit
let imageSlideshowDiv = document.createElement("div");
//this will have the title of the slideshow => Main header
let header = document.createElement("h2");

//Appending children where body is the parent of imageSlideshowDiv (where the slideshow bit will go)
body.appendChild(imageSlideshowDiv);

//the slideshow header goes into the imageSlideshowDiv
imageSlideshowDiv.appendChild(header);

// Design Frenzy!
//Styling the body of the document:
//flex
body.style.display = "flex";
body.style.flexFlow = "row wrap";
body.style.justifyContent = "center";

//Styling the actual div where the slideshow will appear, all used and trusty CSS styling :D
imageSlideshowDiv.style.width = "50%";
imageSlideshowDiv.style.display = "flex";
imageSlideshowDiv.style.flexFlow = "row wrap";
imageSlideshowDiv.style.justifyContent = "center";
imageSlideshowDiv.style.backgroundColor = "rgba(100, 10, 100, 0.4)";
imageSlideshowDiv.style.margin = "100px 0 0 0";
imageSlideshowDiv.style.height = "700px";
imageSlideshowDiv.style.borderRadius = "50%";

// Same goes for the header => CSS styling
header.textContent = "Slide Show";
header.style.backgroundColor = "rgba(100, 10, 100, 0.1)";
header.style.color = "white";
header.style.fontWeight = "bolder";
header.style.fontSize = "60px";
header.style.margin = "30px 0 0 0";
header.style.height = "auto";
header.style.width = "75%";
header.style.textAlign = "center";
header.style.display = "flex";
header.style.flexFlow = "row wrap";
header.style.justifyContent = "center";

// defining a classname for the header, in case :/
header.className = "header";
console.log(header.className);

//creating an img element
let img = document.createElement("img");
//setting id for img Element, in case
img.setAttribute("id", "slideShow");
//appending child to header of the slideshowDiv
header.appendChild(img);
//adjusting the size of the img element just so it doesn't end up taking my entire screen later on
img.style.width = "60%";
img.style.height = "500px";

//and now buttons, they will be children of the header, but right at the end after the img element
// we create a button, each with a variable name referring to what the button does, to make it easier to keep track
let buttonsDiv = document.createElement("div");
//Append to header as discussed
header.appendChild(buttonsDiv);

//Autoback
let autoBackButton = document.createElement("button");
//adding to class list
autoBackButton.classList.add("button");
buttonsDiv.appendChild(autoBackButton);
autoBackButton.textContent = "Auto back";
autoBackButton.style.fontSize = "15px";

let backButton = document.createElement("button");
//notice that just by adding to class list, same styling applies to the button created => tip to avoid redesigning, again and again
//perks of using JS with CSS i guess?
backButton.classList.add("button");
buttonsDiv.appendChild(backButton);
backButton.textContent = "back";
backButton.style.fontSize = "15px";

let stopButton = document.createElement("button");
//same here
stopButton.classList.add("button");
buttonsDiv.appendChild(stopButton);
stopButton.textContent = "stop";
stopButton.style.fontSize = "15px";

let forwardButton = document.createElement("button");
//and here
forwardButton.classList.add("button");
buttonsDiv.appendChild(forwardButton);
forwardButton.textContent = "forward";
forwardButton.style.fontSize = "15px";

let autoForwardButton = document.createElement("button");
//you guessed right, here too
autoForwardButton.classList.add("button");
buttonsDiv.appendChild(autoForwardButton);
autoForwardButton.textContent = "Auto forward";
autoForwardButton.style.fontSize = "15px";

let userPaceDiv = document.createElement("div");
let userPace = document.createElement("input");
userPace.type = "number";
let setPaceBtn = document.createElement("button");
setPaceBtn.type = "button";
setPaceBtn.classList.add("button");
setPaceBtn.textContent = "Set Pace";

body.appendChild(userPaceDiv);
userPaceDiv.appendChild(userPace);
userPaceDiv.appendChild(setPaceBtn);

//selecting all the queries with class button, saving in buttonClasses variable
let buttonClasses = document.querySelectorAll(".button");

// with forEach, elements are easier to reach (I will copyright that)
//basically I am applying CSS on the class .button that I have created and linked to my created buttons, using forEach()
//for each button in buttonClasses, I defined styling agents to be applied on it
buttonClasses.forEach((button) => {
  button.style.width = "100px";
  button.style.height = "50px";
  button.style.color = "white";
  button.style.backgroundColor = "rgba(100, 10, 100, 0.6)";
  button.style.border = "none";
  button.style.borderRadius = "50%";
  button.style.margin = "0 0 0 10px";
});

//Styling:

//////////////////////FUNCTIONS////////////////

//super cute images of dogs from unsplash to inhabit the slideshow
let imgSources = [
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1888&q=80",
  "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1324&q=80",
  "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
  "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
];

//this shall be executed on load
function setup() {
  img.src = imgSources[Math.floor(Math.random() * imgSources.length)];
}

//to move forward with the images
function forward() {
  //selecting the slideshow by id
  let currSource = document.getElementById("slideShow");
  //determining whats the index of the current image being displayed from the array imgSources, by saving it as currSource variable, for each time the forward button is clicked
  //That currSource will help us find the current Index, which is basically the image index in the array imgSources
  let currentIndex = imgSources.indexOf(currSource.src);
  console.log(currSource.src);
  console.log(currentIndex);
  //in case it reached the end of the array imgSource, I am resetting the index to 0:
  if (currentIndex == 4) {
    currSource.src = imgSources[0];
    //else, I keep adding 1 to the index, each time the forward button is pressed
  } else {
    currSource.src = imgSources[currentIndex + 1];
  }
}

//same logic here, except backwards
function back() {
  let currSource = document.getElementById("slideShow");
  let currentIndex = imgSources.indexOf(currSource.src);

  if (currentIndex == 0) {
    currSource.src = imgSources[imgSources.length - 1];
  } else {
    currSource.src = imgSources[currentIndex - 1];
  }
}

//declaring a global timeout variable to aid me in stopping the slideshow and keeping track o autoforward and autoback button clicks
let timeOut;

function autoForward() {
  let currSource = document.getElementById("slideShow");
  var slideIndex = imgSources.indexOf(currSource.src);
  //up till here same thinking process to get curr img from the arr
  showSlides();
  //showSlides will keep adding the index as long as the below if statement is true
  function showSlides() {
    slideIndex++;
    //if it reached the end of the array
    if (slideIndex > imgSources.length - 1) {
      //it will reset the index to zero
      slideIndex = 0;
    }
    //this will not stop it as the showSlides() carries on, until the user chooses stop button
    currSource.src = imgSources[slideIndex];
    //setting the timeout for the image to change every 2 seconds
    timeOut = setTimeout(showSlides, userDefinedPace * 1000);
  }
}

//same logic for autoback but backwards
function autoBack() {
  let currSource = document.getElementById("slideShow");
  var slideIndex = imgSources.indexOf(currSource.src);
  showSlides();
  function showSlides() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = imgSources.length - 1;
    }
    currSource.src = imgSources[slideIndex];
    timeOut = setTimeout(showSlides, userDefinedPace * 1000);
  }
}

//stop will clear timeout, which will inturn stop the iteration (forward/backward iteration)
function stop() {
  clearTimeout(timeOut);
}

function setSlideshowPace() {
  console.log(userPace.value);
  if (userPace.value > 0) {
    userDefinedPace = Number(userPace.value);
    console.log(userDefinedPace);
  }
}

// event listeners and linking them to the appropriate functions
// this is where naming the functions in useful names comes in handy
forwardButton.addEventListener("click", forward);
autoForwardButton.addEventListener("click", autoForward);
autoBackButton.addEventListener("click", autoBack);
backButton.addEventListener("click", back);
stopButton.addEventListener("click", stop);
setPaceBtn.addEventListener("click", setSlideshowPace);

//this is for the onload
window.onload = setup;
