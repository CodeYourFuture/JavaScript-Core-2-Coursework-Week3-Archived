console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const sections = Array.from(document.getElementsByTagName("section"));
sections.forEach(section => {
  section.style.backgroundColor = "white";
});

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
const images = Array.from(document.querySelectorAll("img"));
images.forEach((image) => image.classList.add("content-title"));

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
const array = [
  "Born: December 9, 1906, New York City, United States Died: January 1, 1992 (aged 85) Arlington, Virginia , United States",

  "Born: August 26, 1918, White Sulphur Springs, West Virginia, United States Died: February 24, 2020 (aged 101), Newport News, United States",

  "Born: December 10, 1815, London, England Died: November 27, 1852 (aged 36), Marylebone, London, England"
]

 sections.forEach((section, index) => {
  const newPara = section.appendChild(document.createElement("p"));
  newPara.innerText = array[index];
})
 