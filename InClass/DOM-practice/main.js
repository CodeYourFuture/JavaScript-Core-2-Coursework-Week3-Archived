console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
let sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.style.backgroundColor = "white";
});

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
let images = document.querySelectorAll("img");

images.forEach((image) => {
  image.classList.add("content-title");
});

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

sections.forEach((section, index) => {
  let p = document.createElement("p");
  if (index === 0) {
    section.appendChild(p).innerText =
      "Born: December 9, 1906, Died: January 1, 1992.";
  } else if (index === 1) {
    section.appendChild(p).innerText =
      "Born: August 26, 1918, Died: February 24, 2020.";
  } else {
    section.appendChild(p).innerText =
      "Born: December 10, 1815, Died: November 27, 1852.";
  }
});
