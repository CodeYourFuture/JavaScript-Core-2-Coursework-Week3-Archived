console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sectionEl = document.getElementsByTagName("section");

for (let section of sectionEl) {
    section.style.backgroundColor = 'white';
}

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let imageCentered = document.getElementsByTagName('img');

for (let image of imageCentered) {
    image.className = 'content-title';
    
}

//Using forEach
// let imageCentered = document.querySelectorAll('img');
// imageCentered.forEach(image => {
//     image.className = 'content-title';
// });




// Task 3

// Google the date of birth and death of each of the people on the page. 
//Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let persons = [
  {
    name: "Grace Hopper",
    birth: "9 December 1906",
    death: "1 January 1992",
  },
  {
    name: "Katherine Johnson",
    birth: "26 August 1918",
    death: "24 February 2020",
  },
  {
    name: "Ada Lovelace",
    birth: "10 December 1815",
    death: "27 November 1852",
  },
];


let i = 0;
for (section of sectionEl) {
    
    let createParagraph = document.createElement('p');
    
    section.appendChild(createParagraph);
    
    createParagraph.innerText = `${persons[i].name} was born in ${persons[i].birth} died in ${persons[i].death}`;
i++;
  
}


