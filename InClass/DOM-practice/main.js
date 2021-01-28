console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

 const sec = document.getElementsByTagName('section');
 for(let i = 0; i < sec.length; i++){
   sec[i].style.backgroundColor = "white";
 }

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

const images = document.getElementsByTagName('img');
console.log(images);
 for(let j = 0; j < images.length; j++){
   images[j].classList.add("content-title")
 }


// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const para1 = sec[0].getElementsByTagName("p");
para1[2].append(" She was born in 9th December, 1906.");

const para2 = sec[1].getElementsByTagName("p");
 para2[1].append(" She was born in 27th August, 1918");

 const para3 = sec[2].getElementsByTagName("p");
 console.log(para3);
 para3[3].append(" She was born in 27th November, 1852")

 