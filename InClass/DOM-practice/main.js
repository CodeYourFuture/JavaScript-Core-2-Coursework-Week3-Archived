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
const pElement = document.createElement('p')
pElement.innerText = 'Born: 9 December 1906, New York, New York, United States Died: 1 January 1992, Arlington County, Virginia, United States'
const graceH = document.getElementById('grace-hopper')
graceH.appendChild(pElement)



const pElement2 = document.createElement("p")
pElement2.innerText ='Born: 26 August 1918, White Sulphur Springs, West Virginia, United States Died: 24 February 2020, Newport News, Virginia, United States'
const kJ = document.getElementById("katherine-johnson")
kJ.appendChild(pElement2)


const pElement3 = document.createElement("p")
pElement3.innerText ='Born: 10 December 1815, London Died: 27 November 1852, Marylebone, London'
const aL = document.getElementById("ada-lovelace")
aL.appendChild(pElement3)

