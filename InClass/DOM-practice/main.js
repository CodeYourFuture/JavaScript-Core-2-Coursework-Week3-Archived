console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sections = document.querySelectorAll('section');

sections.forEach(section => {
	section.style.backgroundColor = 'white';
})

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

let images = document.querySelectorAll('img');

images.forEach(img => {
	img.style.display = 'block'
	img.style.margin = '0px auto'
})

// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.


sections.forEach(section => {
	let p = document.createElement('p')
	section.append(p)
	if (section.querySelector("h1").innerText === "Grace Hopper") {
    p.innerText = "December 9, 1906 - January 1, 1992 (aged 85)";
  } 
  if (section.querySelector("h1").innerText === "Katherine Johnson") {
    p.innerText = "August 26, 1918 - February 24, 2020 (aged 101)";
  }
  if (section.querySelector("h1").innerText === "Ada Lovelace") {
    p.innerText = "10 December 1815 - 27 November 1852 (aged 36)";
  }
})