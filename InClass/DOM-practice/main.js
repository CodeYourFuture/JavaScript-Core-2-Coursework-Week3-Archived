console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let section = document.getElementsByTagName('section');
for (let i = 0; i < section.length; i++) {
    section[i].style.backgroundColor = 'white';
}





// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let img = document.getElementsByTagName('img');
for (let i = 0; i < img.length; i++) {
    img[i].style.display = 'block';
    img[i].style.width = '50%';
    img[i].style.margin = '0 auto';
    
}




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

var life = [
    {
        identifier: 'grace-hopper',
        name: 'Grace Hopper',
        born: '9 December 1906',
        died: '1 January 1962',
    },
    {
        identifier: 'katherine-johnson',
        name: 'Katherine Johnson',
        born: '26 August 1918',
        died: '24 February 2020',
    },
    {
        identifier: 'ada-lovelace',
        name: 'Ada Lovelace',
        born: '10 December 1815',
        died: '27 November 1852',
    },
]
function addDetails() { 
life.forEach(function (element) {
    let p = document.createElement('p');
    p.innerHTML = `${element.name} was born ${element.born} and died ${element.died}.`;
    let sect = document.getElementById(`${element.identifier}`).parentElement;
    sect.insertBefore(p, sect.children[sect.children.length - 1]);
})
} addDetails();