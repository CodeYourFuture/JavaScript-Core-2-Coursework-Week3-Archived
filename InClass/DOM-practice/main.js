console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sections = document.getElementsByTagName("section");
for (let section of sections) {
  section.style.backgroundColor = "white";
}

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
// Hint: look at the CSS to see if there are any classes already written which you can use.

let images = document.getElementsByTagName("img");
for (let image of images) {
  //   image.style.marginLeft = "180px"; THIS OPTION DOESN'T FULLY CENTER ALL IMAGES
  image.classList.add("content-title");
}

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let keyDates = [
  {
    name: "Grace Hopper",
    dob: "9 December 1906",
    dod: "1 January 1992",
  },
  {
    name: "Katherine Johnson",
    dob: "26 August 1918",
    dod: "24 February 2020",
  },
  {
    name: "Ada Lovelace",
    dob: "10 December 1815",
    dod: "27 November 1852",
  },
];

for (let i = 0; i < sections.length; i++) {
  let sentence = document.createElement("p");
  let section = sections[i];
  let keyDate = keyDates[i];
  sentence.textContent = `${keyDate.name} was born on ${keyDate.dob} and passed away on ${keyDate.dod}`;
  section.appendChild(sentence);
}
