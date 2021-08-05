console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

const section = document.getElementsByTagName("section");
let sectionsArray = Array.from(section); // created an array of the sections in the html.
const changeOfSectionsColor = sectionsArray.map((element) => {
  element.style.backgroundColor = "white";
});

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

const image = document.getElementsByTagName("img");
const centeredImages = Array.from(image).map((img) => {
  img.className = "content-title";
});

// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3

// console.log(sectionsArray);
let graceHopperSection = sectionsArray[0];
let lastElementOfGraceHopperSec = graceHopperSection.lastElementChild; //last child element.
let kathrineJohnsonSection = sectionsArray[1];
let lastChildOfKathSec = kathrineJohnsonSection.lastElementChild;
let adaLovelaceSection = sectionsArray[2];
let lastChildOfAdaLoveSec = adaLovelaceSection.lastElementChild;

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let p1 = document.createElement("p");
p1.innerText = "Born: December 9, 1906. \n Died: January 1, 1992. ";
graceHopperSection.insertBefore(p1, lastElementOfGraceHopperSec);

let p2 = document.createElement("p");
p2.innerText = "Born: August 26, 1918. \n Died: February 24, 2020.";
kathrineJohnsonSection.insertBefore(p2, lastChildOfKathSec);

let p3 = document.createElement("p");
p3.innerText = "Born: December 10, 1815.\n Died: November 27, 1852.";
adaLovelaceSection.insertBefore(p3, lastChildOfAdaLoveSec);
