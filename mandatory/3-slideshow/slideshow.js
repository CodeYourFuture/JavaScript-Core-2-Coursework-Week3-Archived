// Write your code here
//styling the body's background
let bodyElement = document.getElementById("main");
bodyElement.style.backgroundColor = "#1b282e";

//creating an array of image objects
let garden_images = [
  {
    image_link:
      "https://images.unsplash.com/photo-1571192776145-9f563c1df686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    alt: "hobbit house",
  },
  {
    image_link:
      "https://images.unsplash.com/photo-1610087966245-332d5a0ccedb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    alt: "rose garden in greenhouse",
  },
  {
    image_link:
      "https://images.unsplash.com/photo-1617472891287-6679e9115781?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    alt: "Constance Eiphelia resort in Seychelles.",
  },
  {
    image_link:
      "https://images.unsplash.com/photo-1601106099439-737248f58890?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    alt: "Holiday Picture in a blue island",
  },
  {
    image_link:
      "https://images.unsplash.com/photo-1554220497-009593c5f68a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
    alt: "indoor gardens in public places",
  },
];
// creating variables and elements
let imageSlider = document.getElementById("img-slider");
let image = document.createElement("img");
imageSlider.appendChild(image);

//let interval = 2000; //the interval between the images change

let imageCounter = 0; //this sets the counter to 0.
image.src = garden_images[imageCounter].image_link;
image.className = "image-styles";

let forwardBtn = document.getElementById("forward");
let backwardBtn = document.getElementById("backward");
let autoForwardBtn = document.getElementById("auto-forward");
let autoBackBtn = document.getElementById("auto-back");

function slidingForward() {
  imageCounter++;
  if (imageCounter > garden_images.length) imageCounter = 0;
  image.src = garden_images[imageCounter].image_link;
}
function slidingBackward() {
  imageCounter--;
  if (imageCounter < 0) imageCounter = garden_images.length - 1;
  image.src = garden_images[imageCounter].image_link;
}
//eventListeners for sliding images
forwardBtn.addEventListener("click", slidingForward);
backwardBtn.addEventListener("click", slidingBackward);
autoForwardBtn.addEventListener("click", function () {
  setInterval(slidingBackward, 4000);
});
autoBackBtn.addEventListener("click", function () {
  setInterval(slidingBackward, 4000);
});
