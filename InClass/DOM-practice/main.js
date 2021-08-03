console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

const section = document.querySelectorAll('section');
section.forEach(element => {
    element.style.backgroundColor = 'white';
});


// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
const images = document.querySelectorAll('img');
images.forEach(element => {
        element.classList.add('content-title');
    });
        

// Hint: look at the CSS to see if there are any classes already written which you can use.



// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const firstPara = `Birth: 09.12.1906
Death: 01.01.1992`;
const secondPara = `Birth: 26.08.1918
Death: 24.02.2020`;
const thirdPara = `Birth: 10.12.1815
Death: 27.11.1852`;
const birthDeathDate= [firstPara, secondPara, thirdPara];

section.forEach((element,index)=>{
  const paragraph = document.createElement('p');
  paragraph.innerText =birthDeathDate[index];
  element.appendChild(paragraph);
  paragraph.style.fontStyle = 'italic'
}); 
