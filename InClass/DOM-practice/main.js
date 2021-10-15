console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const sections = document.querySelectorAll("section");
sections.forEach(section =>[
    section.style.background = "white"
]);
    

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
let images = document.querySelectorAll("img");

images.forEach((image) => {
  image.classList.add("content-title");
});

// Hint: look at the CSS to see if there are any classes already written which you can use.


// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
sections.forEach((section, index) => {
  let date = document.createElement("p");
  if (index == 0){
    date.innerHTML = "Date of Birth: 9.12.1906. Date of death: 1.01.1992";
    section.appendChild(date);
  }else if(index === 1){
     date.innerHTML = "Date of Birth: 26.08.1918. Date of death: 24.02.2020";
     section.appendChild(date);
  }else{
     date.innerHTML = "Date of Birth: 10.12.1815. Date of death: 27.11.1852";
     section.appendChild(date);
  }
})

