console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

const changeSectionColor = (colour) => {
  let sectionTag = document.querySelectorAll("section");
  sectionTag.forEach((item) => (item.style.backgroundColor = colour));
};
changeSectionColor("white");

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
const centerImages = () => {
  let imgCenter = document.querySelectorAll("img");
  imgCenter.forEach((element) => {
    element.classList.add("content-title");
  });
};
centerImages();
// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const grace = document.getElementById("grace");
const katherine = document.getElementById("katherine");
const ada = document.getElementById("ada");
const pTag1 = document.createElement("p");
const pTag2 = document.createElement("p");
const pTag3 = document.createElement("p");
pTag1.innerText = 'DOB: 9 December 1906' + ', ' + 'Died: 1 January 1992';
grace.appendChild(pTag1);
pTag2.innerText = "DOB: 26 August 1918" + ", " + "Died: 24 February 2020";
katherine.appendChild(pTag2);
pTag3.innerText = "DOB: 10 December 1815" + ", " + "Died: 27 November 1852";
ada.appendChild(pTag3);