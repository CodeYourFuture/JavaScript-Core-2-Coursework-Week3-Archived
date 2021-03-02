console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
let sections = document.getElementsByTagName("section");
for (var i = 0; i < sections.length; i++) {
  sections[i].style.background = "white";
}

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
let images = document.getElementsByTagName("img");
for (var i = 0; i < sections.length; i++) {
  images[i].style.marginLeft = "500px";
}

// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
//9 December 1906 1 January 1992,grace hopper
//26 August 1918, 24 February 2020
// 10 December 1815  27 November 1852
let firstSection = document.getElementsByTagName("section")[0].children[4]; // this selects first section and the forth child of that section

paragraph = document.createElement("p");
paragraph.innerHTML = "Born 9 December 1906 - died 1 January 1992";
firstSection.appendChild(paragraph);

let secondSection = document.getElementsByTagName("section")[1].children[3]; // selects second section and the third child of that element

paragraph = document.createElement("p");
paragraph.innerHTML = "Born 26 August 1918 - died 24 February 2020";
secondSection.appendChild(paragraph);

let thirdSection = document.getElementsByTagName("section")[2].children[5]; // selects third section and the fifth element of that section

paragraph = document.createElement("p");
paragraph.innerHTML = "Born 10 December 1815 - died 27 November 1852";
thirdSection.appendChild(paragraph);
