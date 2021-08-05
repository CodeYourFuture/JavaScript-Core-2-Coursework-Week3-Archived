console.log("Testing JS file loaded!");

// Task 1
// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sectionEls = document.querySelectorAll("section");
sectionEls.forEach((item) => {
  item.style.backgroundColor = "white";
});

// function changeSectionColor(colour) {
//   let sectionEls = document.querySelectorAll("section");
//   sectionEls.forEach((item) => (item.style.backgroundColor = colour));
// }
// changeSectionColor("white");

// Task 2
// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
// Hint: look at the CSS to see if there are any classes already written which you can use.

const imageEls = document.querySelectorAll("img");
imagesEls.forEach((img) => {
  img.classList.add("content-title");
});

// Task 3
// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const dates = [
  `Born: 9 December 1906
Died: 1 January 1992`,
  `Born: 26 August 1918
Died: 24 February 2020`,
  `Born: 10 December 1815
Died: 27 November 1852`,
];

sectionsEls.forEach((section, index) => {
  const paragraphEl = document.createElement("p");
  paragraphEl.innerText = dates[index];
  section.appendChild(p);
});
