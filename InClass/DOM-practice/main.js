console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
let sections = document.getElementsByTagName("section");
  for (let i = 0 ; i < sections.length; i++) {
    sections[i].style.background ="white";
}






// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    images[i].className = "content-title";

}






// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let section = document.getElementsByTagName("section");
let birthDays = ["Born December 9 1906", "Born August  26 1918" , "Born 10 December 1815" ]
for (let i = 0 ; i < section.length; i++) {
    section[i].innerHTML += birthDays[i];
}

// section[1].innerHTML += "Born August  26 1918";

// section[2].innerHTML += "Born 10 December 1815";


//Grace Hopper December 9, 1906

//katherin jones Aug. 26, 1918

//Ada lovlace 10 December 1815

