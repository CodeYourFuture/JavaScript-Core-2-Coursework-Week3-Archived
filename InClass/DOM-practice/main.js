console.log("Testing JS file loaded!")

// Task 1

/* Without changing any of the HTML or CSS, update the <section> 
tags so that they have white backgrounds.*/

let sections = document.querySelectorAll('section');

for (let section of sections) {
    section.style.backgroundColor = 'white';
}

// Task 2

/* Without changing any of the HTML or CSS, 
update the images on the page so that they are all centered.*/

/* Hint: look at the CSS to see if there are any classes already
written which you can use.*/

let centreImages = document.querySelectorAll('img');

for (let centreImage of centreImages) {
    centreImage.style.cssText +=
    `display: block;
    margin-left: auto;
    margin-right: auto;`
}

// Task 3
/* Google the date of birth and death of each of the people on
the page. Without changing any of the HTML or CSS, add this in a 
paragraph to the end of their <section>. */

let lifeDates = [
    {
        name: 'Grace Hopper',
        born: '9 December 1906',
        died: '1 January 1992',
    },
    {
        name: 'Katherine Johnson',
        born: '26 August 1918',
        died: '24 February 2020',
    },
    {
        name: 'Ada Lovelace',
        born: '10 December 1815',
        died: '27 November 1852',
    },
]

sections.forEach((section, index) => {
    let paragraph = document.createElement('p');
    let referenceNode = document.querySelector('a');

    paragraph.textContent = `${lifeDates[index].name} born on ${lifeDates[index].born} and died on ${lifeDates[index].died}`;
    section.appendChild(paragraph);
});