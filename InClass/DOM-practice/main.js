console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

const allSections = document.querySelectorAll("section");
allSections.forEach((section) => {
  section.style.backgroundColor = "white";
});




// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

const allImages = document.querySelectorAll("img");

allImages.forEach((image) => {
  image.className = "content-title";
});




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const lastParagraph = document.querySelectorAll("section p:last-of-type");

lastParagraph.forEach((paragraph, index) => {
  const message = document.createElement("span");

  if (index === 0) {
    message.innerText =
      "Grace Hopper is Born in 9th Dec 1918 and died on 1st Jan 1992";
  } else if (index === 1) {
    message.innerText =
      "Katherine Johnson is Born in 26th Aug 1918 and died on 24 Feb 2020";
  } else {
    message.innerText =
      "Ada Lovelace is Born in 10th Dec 1815 and died on 27th Nov 1852";
  }

  paragraph.appendChild(message);
});