console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const targetSection = document.querySelectorAll('section');
console.log(targetSection);

for (let section = 0; section < targetSection.length; section++) {
    targetSection[section].style.backgroundColor = 'white';    
}





// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
const targetImage = document.querySelectorAll('img');
console.log(targetImage);
for (let image = 0; image < targetImage.length; image++) {
    targetImage[image].className = 'content-title';
}




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let addParagraph = [
    {
        'name': 'Grace Hopper',
        'dateOfBirth': '9 December 1906',
        'dateOfDeath': '1 January 1992',
    },
    {
        'name': 'Katherine Johnson',
        'dateOfBirth': '26 August 1918',
        'dateOfDeath': '24 February 2020',
    },
    {
        'name': 'Ada Lovelace',
        'dateOfBirth': '10 December 1815',
        'dateOfDeath': '27 November 1852',
    },
];


addParagraph.forEach(element => {
    console.log('element', element);
        let task3Paragraph = document.createElement('p');
        task3Paragraph.innerHTML = `${element.name} was born on ${element.dateOfBirth} and died on ${element.dateOfDeath}`;
        console.log('task3', task3Paragraph);
        
    targetSection.appendChild(task3Paragraph);
});