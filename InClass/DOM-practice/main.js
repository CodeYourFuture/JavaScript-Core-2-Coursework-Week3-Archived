console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sectionEl = document.querySelectorAll("section");
sectionEl.forEach(element => element.style.backgroundColor = "white");




// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let imgEl = document.querySelectorAll("img");
imgEl.forEach(element => {
    element.style.display = "block";
    element.style.margin = "auto"
});






// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let DateOfBirthAndDeathList = [
    "Birth Date: December 9, 1906. Death Date:  January 1, 1992", 
    "Birth Date: 26 August 1918. Death Date: February 24, 2020", 
    "Birth Date: 10 December 1815. Death Date: November 27, 1852",
]



sectionEl.forEach(element => {
    let newP = document.createElement("p");
    element.appendChild(newP);
    newP.className = "DOBandDeath";
})
let check = Array.from(document.querySelectorAll(".DOBandDeath"));

check[0].textContent = DateOfBirthAndDeathList[0];
check[1].textContent = DateOfBirthAndDeathList[1];
check[2].textContent = DateOfBirthAndDeathList[2];
