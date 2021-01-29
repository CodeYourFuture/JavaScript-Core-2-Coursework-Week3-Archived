console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let section = document.getElementsByTagName("section");

function changeColour() {
  for (let i = 0; i < section.length; i++) {
    section[i].style.backgroundColor = "white";
  }
}

changeColour();

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let img = document.getElementsByTagName("img");

function imagesCentered() {
  for (let i = 0; i < img.length; i++) {
    img[i].classList.add("content-title");
  }
}

imagesCentered();

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let dates = [
    {
        name: "grace-hopper",
        born: "9th December, 1906",
        died: "1st January, 1992"
},
    {
        name: "katherine-johnson",
        born: "26th August, 1918",
        died: "24th February, 2020"
    },
    {
        name: "ada-lovelace",
        born: "10th December, 1815",
        died: "27th November, 1852"
    },
];

for(let i of dates) {
  let names = document.getElementById(`${i.name}`).parentElement;
  let pDates = document.createElement("p");
  pDates.innerHTML = `born on: ${i.born} and died on: ${i.died}`;
  names.insertBefore(pDates, names.children[names.children.length - 1]);
}

