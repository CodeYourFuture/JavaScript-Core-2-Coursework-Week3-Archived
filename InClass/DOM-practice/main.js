console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

const dates = [
    {
        name : "Grace Hopper",
        birthDate : "9 December 1906",
        deathDate : "1 January 1992",
    },
    {
        name : "Katherine Johnson",
        birthDate : "26 August 1918",
        deathDate : "24 February 2020",
    },    
    {
        name : "Ada Lovelace",
        birthDate : "10 December 1815",
        deathDate : "27 November 1852",
    }
];


var section = document.getElementsByTagName("section");
console.log(section);

for (let index = 0; index < section.length; index++) {
    const element = section[index];
    element.style.backgroundColor = "white";
    
   let newElement = document.createElement("p");
   newElement.innerText = `Date of Birth : ${dates[index].birthDate} 
   Date of Death : ${dates[index].deathDate}`;
   element.appendChild(newElement);
 
}



// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

var img = document.getElementsByTagName("img");
console.log(img);

for (let index = 0; index < img.length; index++) {
    const element = img[index];
    element.classList.add("content-title")
    
}





// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.


for (let index = 0; index < img.length; index++) {
    const element = img[index];
    element.classList.add("content-title")
    
}



