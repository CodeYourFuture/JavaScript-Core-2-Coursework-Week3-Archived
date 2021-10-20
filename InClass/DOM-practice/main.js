console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const sections = document.getElementsByTagName("section");
for(section of sections){
    section.style.backgroundColor = "white";
}





// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

for(image of document.getElementsByTagName("img")){
    image.className = "content-title";
}




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
const people = [
  {
    name: "Grace Hopper",
    birth: "09/12/1906",
    death: "01/01/1992",
  },
  {
    name: "Katherine Johnson",
    birth: "26/08/1918",
    death: "24/02/2020",
  },
  {
    name: "Ada Lovelace",
    birth: "10/12/1815",
    death: "27/11/1852",
  },
];
for(let i = 0; i < sections.length; i++){
    const pEl = document.createElement("p");
    pEl.innerHTML = `Born: ${people[i].birth}<br /> Died: ${people[i].death}`;
    sections[i].appendChild(pEl);
}