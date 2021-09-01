console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.


const changeColor = Array.from(document.querySelectorAll("section"));
changeColor.forEach(element =>{
    element.style.backgroundColor = "white";
})



// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

const centerImage = document.querySelectorAll("img");

centerImage.forEach(element =>{
    element.classList.add('content-title')
})



// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const dateOfBirth1 = document.createElement("p");
dateOfBirth1.innerText = "09/11/1906 - 01/01/1992 ";
const dateOfBirth2 = document.createElement("p");
dateOfBirth2.innerText = "26/08/1918 - 24/02/2020 ";
const dateOfBirth3 = document.createElement("p");
dateOfBirth3.innerText = "10/12/1815 - 27/11/1852 ";

changeColor.forEach((element, index) => {
    if(index === 0){
        element.appendChild(dateOfBirth1)
    }else if(index === 1){
        element.appendChild(dateOfBirth2)
    }else if(index === 2){
        element.appendChild(dateOfBirth3)
    }

})