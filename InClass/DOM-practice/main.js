console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
document.querySelectorAll('section').forEach(sec => sec.style.backgroundColor = "white");





// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

document.querySelectorAll("img").forEach(img => img.classList.add("content-title"));




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

document.querySelectorAll("section").forEach((sec, i) => {
    let newP = document.createElement('p');
    let dob = "";
    if (i === 0) dob = "December 9, 1906";
    if (i === 1) dob = "August 26, 1918";
    if (i === 2) dob = "December 10, 1815";
    newP.innerText = `DOB: ${dob}`;
    sec.appendChild(newP);
});
