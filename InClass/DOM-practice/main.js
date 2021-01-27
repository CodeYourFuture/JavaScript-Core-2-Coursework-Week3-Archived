console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const mySections = Array.from(document.querySelectorAll("section"));

mySections.forEach(section => section.style.backgroundColor = "#ffffff");





// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

const myImages = Array.from(document.querySelectorAll("img"));
myImages.forEach(image => image.className = "content-title");




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
const dates = [
  {
    // Grace Hopper
    DOB: "December 9, 1906",
    DOD: "January 1, 1992",
  },

  {
    // Katherine Johnson
    DOB: "August 26, 1918",
    DOD: "February 24, 2020",
  },

  {
    // Ada Lovelace
    DOB: "December 10, 1815",
    DOD: "November 27, 1852",
  },
];

mySections.forEach((mySection, index) => {
  let p = document.createElement("p");
  p.innerHTML = `Born: ${dates[index].DOB}&nbsp;&nbsp;&nbsp;&nbsp;Died: ${dates[index].DOD}`;
  mySection.append(p);
})