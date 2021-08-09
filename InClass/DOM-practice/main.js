console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

const sectionTags = document.querySelectorAll("section");
sectionTags.forEach((sectionTag) => {
  sectionTag.style.backgroundColor = "white";
});

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

const allImages = document.querySelectorAll("img");
allImages.forEach((imgEl) => {
  imgEl.classList.add("content-title");
});

// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3

// Add Paragraph - Grace Hopper

const lastParagraphs = document.querySelectorAll("section p:last-of-type");

// Add Paragraph - Grace Hopper

const hopperPara = document.createElement("p");
hopperPara.innerText = `Grace Hopper was born on the 9th December 1906 and died on the 1st January 1992`;
lastParagraphs[0].appendChild(hopperPara);

// Add Paragraph - Katherine Johnson

const johnsonPara = document.createElement("p");
johnsonPara.innerText = `Katherine Johnson was born on the 26th August 1918 and died on the 24th February 2020`;
lastParagraphs[1].appendChild(johnsonPara);

// Add Paragraph - Ada Lovelace

const lovelacePara = document.createElement("p");
lovelacePara.innerText = `Ada Lovelace was born on the 10 December 1815 and died on the 27 November 1852`;
lastParagraphs[2].appendChild(lovelacePara);

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
