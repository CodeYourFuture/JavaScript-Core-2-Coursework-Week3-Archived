console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

function changeColor(){
    let sections = document.getElementsByTagName("section");
    for(let i=0; i< sections.length;i++){
        sections[i].style.backgroundColor = "white";
    }
}
changeColor();



// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
let img = new Image();
let ulId = document.getElementsByTagName("menu")[0];
ulId.appendChild(img);
let imageHeight = img;





// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
