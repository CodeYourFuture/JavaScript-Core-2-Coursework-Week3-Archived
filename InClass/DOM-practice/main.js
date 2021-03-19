console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sectionElements = document.querySelectorAll("section");
sectionElements.forEach((section) => {
    section.style.backgroundColor = "white";
});

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let imageElements = document.querySelectorAll("img");
imageElements.forEach((imageEl) => {
    imageEl.className = "content-title";
});

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const mothersOfComputing = [
    {
        name: "Grace Hopper",
        dateOfBirth: "9 December 1906",
        dateOfDeath: "1 January 1992"
    },
    {
        name: "Katherine Johnson",
        dateOfBirth: "26 August 1918",
        dateOfDeath: "24 February 2020"
    },
    {
        name: "Ada Lovelace",
        dateOfBirth: "10 December 1815",
        dateOfDeath: "27 November 1852"
    }
];

sectionElements.forEach((section) => {
    let paragraphElement = document.createElement("p");
    mothersOfComputing.forEach((person) => {
        paragraphElement.innerText = `D.O.B: ${person.dateOfBirth} \n D.O.D: ${person.dateOfDeath}`;
        section.appendChild(paragraphElement);
    });
});