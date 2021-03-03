console.log("Testing JS file loaded!")

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
    image.className = "content-title";
});



/* Task 3

Use the date of birth and death of each of the people on the page. 
Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>. 
Think about what data structure you want to store your dates in.

// Google the date of birth and death of each of the people on the page. 
// Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

// Grace Hopper
// Date of birth: 9 December 1906
// Date of death: 1 January 1992

// Katherine Johnson
// Date of birth: 26 August 1918
// Date of death: 24 February 2020

// Ada Lovelace 
// Date of birth: 10 December 1815
// Date of death: 27 November 1852
*/

let persons = [
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
]

sections.forEach((section) =>{
    let pElement = document.createElement("p");
    persons.forEach((person) => {
    pElement.innerText = `Date of Birth: ${person.dateOfBirth} \n Date of Death: ${person.dateOfDeath}`;
    });
    section.appendChild(pElement);
})