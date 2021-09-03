console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const section = document.getElementsByTagName("section");
// console.log(section);

Array.from(section).forEach((el) => {
  el.style.backgroundColor = "#fff";
});

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.style.display = "block";
  img.style.marginLeft = "auto";
  img.style.marginRight = "auto";
});
// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
