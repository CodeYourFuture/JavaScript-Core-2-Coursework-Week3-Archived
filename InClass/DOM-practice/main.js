console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sectionEl = document.getElementsByTagName("section");
// console.log(sectionEl);

Array.from(sectionEl).forEach((element) => {
  element.style.backgroundColor = "#fff";
});

// or
// for (let i = 0; i < sectionEl.length; i++) {
//   //   console.log(sectionEl[i]);
//   sectionEl.item(i).style.backgroundColor = "#fff";
// }

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
let imgEl = document.querySelectorAll("img");
// console.log(imgEl);
imgEl.forEach((img) => {
  img.classList.add("content-title");
});
// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3
let diedDateArr = [
  "Died: 1 January 1992, Arlington County, Virginia, United States",
  "February 24, 2020, Newport News, Virginia, U.S.",
  "November 27, 1852, Marylebone, London, England",
];
// Array.from(sectionEl).forEach((section) => {
//   console.log(sectionEl);
// });

for (let i = 0; i < sectionEl.length; i++) {
  let paraToAdd = document.createElement("p"); // Create a new element
  paraToAdd.innerText = diedDateArr[i]; // Change the text of the element
  //   sectionEl[i].lastElementChild.previousElementSibling.appendChild(paraToAdd);
  sectionEl[i].insertBefore(paraToAdd, sectionEl[i].lastElementChild);
}
// console.log(sectionEl[0].lastElementChild.previousElementSibling);

// console.log(sectionEl[0].lastElementChild.previousElementSibling);
// let paraToAdd = document.createElement("p"); // Create a new element

// paraToAdd.innerText = diedDateArr[0]; // Change the text of the element

// sectionEl[0].lastElementChild.previousElementSibling.appendChild(paraToAdd);

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
