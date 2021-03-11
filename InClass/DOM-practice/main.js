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
let pTag = document.createElement("p");
// sectionTag = document.querySelectorAll("section");
 sectionTag.appendChild(pTag);
const lifeAndDeath = (dob, dod) => {
  
  
  section.forEach(element => {
   
    pTag.innerHTML = `Date of birth: ${dob} - Date of death: ${dod}`;
  });
}
lifeAndDeath("9 December 1906", "1 January 1992");
lifeAndDeath("26 August 1918", "24 February 2020");
lifeAndDeath("10 December 1815", "27 November 1852");
