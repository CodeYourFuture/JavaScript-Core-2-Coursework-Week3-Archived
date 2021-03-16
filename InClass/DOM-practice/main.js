console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.


let sectionTags = document.querySelectorAll('section');
for (let i = 0; i < sectionTags.length; i++) {
    //sectionTags[i].style.border = '10px dashed red';
    sectionTags[i].style.backgroundColor = 'white';
}

//why is that getElementsByName and getElementsTagName does not work but querySelectorAll does???



// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let images = document.querySelectorAll('img');
for (let img = 0; img < images.length; img++) {
    images[img].style.display = 'block'
    images[img].style.marginLeft = 'auto'
    images[img].style.marginRight = 'auto'
    images[img].style.width = '50%'
}


// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
var lifeDates = {
    Grace: ['9 December 1906', '1 January 1992'],
    Katherine: ['26 August 1918', '24 February 2020'],
    Ada: ['birth date: 10 December 1815', 'death date: 27 November 1852']
}
 
//Grace
let para1 = document.createElement('p')
para1.innerText = `Grace Hopper was born on this day: ${lifeDates.Grace[0]} and she subsequently passed away on ${lifeDates.Grace[1]}.`;
sectionTags[0].appendChild(para1)

//Katherine
let para2 = document.createElement('p')
para2.innerText = `Katherine Johnson was born on this day: ${lifeDates.Katherine[0]} and she subsequently passed away on ${lifeDates.Katherine[1]}.`;
sectionTags[1].appendChild(para2)

//Ada
let para3 = document.createElement('p')
para3.innerText = `Ada Lovelace was born on this day: ${lifeDates.Ada[0]} and she subsequently passed away on ${lifeDates.Ada[1]}.`;
sectionTags[2].appendChild(para3)