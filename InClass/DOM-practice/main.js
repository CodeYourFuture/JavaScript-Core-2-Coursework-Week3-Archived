console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
let tags = document.querySelectorAll("section");
tags.forEach(tag => tag.style.backgroundColor = "white");
// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
let images = document.querySelectorAll("img");
console.log(images);
images.forEach((image)=>{
 image.style.display = "block"
 image.style.margin = "0 auto"})


// Hint: look at the CSS to see if there are any classes already written which you can use.






// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const Dates = ["Birth: 9 December  1906 Death: 1 January 1992","Birth: 26 August 1918  Death: 24 February 2020","Birth: 10 December 1815  Death: 27 November 1852"]

tags = document.querySelectorAll("section");
console.log(tags);
let i=0;
tags.forEach((section) =>{ 
 let lastP = section.children;
 lastP[lastP.length-2].innerText += `${Dates[i]}`;
 i++
 });
 

 //console.log(section); 