console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let newBackground = document.querySelectorAll("section");

newBackground.style.backgroundColor = "white";

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let centeredImage = document.querySelectorAll("img");
for (i = 0; i < centeredImage.length; i++) {
  centeredImage.style.cssText =
    "display: block; margin-left: auto; margin-right: auto";
};

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let dateOfBirthAndDeath = [
    {name: "grace-hopper",
birthDate: "9 December 1906",
deathDate: "1 January 1992"},

{name: "Katherine-johnson",
birthDate:"26 August 1906",
deathDate: "24 February 2020",},

{name: "ada-lovelave",
birthDate: "10 December 1815",
deathDate: "27 November 1852"}
];

let newParagraph = document.createElement("p");
newParagraph.innerHTML = `was born ${dateOfBirthAndDeath.birthDate} and died on${dateOfBirthAndDeath.deathDate}`;

