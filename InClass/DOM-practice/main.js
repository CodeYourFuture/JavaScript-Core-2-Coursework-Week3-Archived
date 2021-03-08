console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const sectionEls = document.querySelectorAll("section");

sectionEls.forEach((section) => {
  section.style.backgroundColor = "white";
});

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
const imageEls = document.querySelectorAll("img");
for (let image of imageEls) {
  image.style.display = "block";
  image.style.margin = "0 auto";
}

// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const dates = {
  "Grace Hopper": "December 9, 1906 - January 1, 1992",
  "Katherine Johnson": "August 26, 1918 - February 24, 2020",
  "Ada Lovelace": "August 26, 1918 - February 24, 2020",
};

for (let section of sectionEls) {
  const name = section.querySelector("h1").innerText;
  const dateEl = document.createElement("p");
  dateEl.innerText = dates[name];
  dateEl.style.fontWeight = "bold";
  section.append(dateEl);
}
