console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

const section = document.getElementsByTagName("section");
const sectionList = Array.from(section);

sectionList.forEach((section) => section.classList.add("white"));

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

const images = document.getElementsByTagName("img");
const imagesList = Array.from(images);

imagesList.forEach((image) => image.classList.add("content-title"));

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
const array = [
  "Born: 9 December 1906, New York, New York, United States Died: 1 January 1992, Arlington County, Virginia, United States",

  "Born: 26 August 1918, White Sulphur Springs, West Virginia, United States Died: 24 February 2020, Newport News, Virginia, United States",

  "Born: 10 December 1815, London Died: 27 November 1852, Marylebone, London"
]


sectionList.forEach((section, index) => {
    const pElement = document.createElement("p")
    pElement.innerText = array[index]
    section.appendChild(pElement)
})



