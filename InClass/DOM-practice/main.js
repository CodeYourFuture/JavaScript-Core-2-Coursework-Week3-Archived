console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const sections =Array.from(document.querySelectorAll('section'));
sections.forEach(section =>{
  section.style.backgroundColor = 'white';
})





// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
// .content-title
const images = document.querySelectorAll('img');
// console.log( images,'<<<<<<');
images.forEach(img =>{
  img.classList.add('content-title');
});




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
const p1 = `Born: 9 December 1906
Died: 1 January 1992`;
const p2 = `Born: 26 August 1918
Died: 24 February 2020`;
const p3 = `Born: 10 December 1815
Died: 27 November 1852`;
const bornAndDiedDates= [p1,p2,p3];

sections.forEach((eachSection,index)=>{
  //for every section > create p, put dates orderly
  const p = document.createElement('p');
  p.innerText =bornAndDiedDates[index];
  eachSection.appendChild(p);
});