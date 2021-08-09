console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

//Answer:
//Accession the section tag
let sections = document.getElementsByTagName("section");
let sectionsArray = Array.from(sections);

//Changing each section background to white(#ffffff)
sectionsArray.forEach(section => section.style.backgroundColor = "#ffffff")




// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
let images = document.getElementsByTagName("img");
let imagesArray = Array.from(images);
imagesArray.forEach(image => {
    image.style.marginLeft = "auto";
    image.style.marginRight = "auto";
    image.style.display = "block";
})






// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let sectionParagraphs = document.querySelectorAll("section p");
let sectionParagraphsArray = Array.from(sectionParagraphs);
let graceHopperDOB = "9 December 1906";
let graceHopperDOD = "1 January 1992";
let katJohnsonDOB = "26 August 1918";
let katJohnsonDOD = "24 February 2020";
let adaLovelaceDOB = "10 December 1815";
let adaLovelaceDOD = "27 November 1852";

sectionParagraphsArray[2].innerHTML += `<b>Date of Birth:</b> ${graceHopperDOB}\t<b>Date of Death:</b> ${graceHopperDOD}`;
sectionParagraphsArray[4].innerHTML += `<b>Date of Birth:</b> ${katJohnsonDOB}\t<b>Date of Death:</b> ${katJohnsonDOD}`;
sectionParagraphsArray[8].innerHTML += `<b>Date of Birth:</b> ${adaLovelaceDOB}\t<b>Date of Death:</b> ${adaLovelaceDOD}`;