console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

 document.querySelectorAll("section").forEach(section =>
  section.style.backgroundColor = "white");
 

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

document.querySelectorAll("img").forEach(img =>
img.style.cssText += "display: block; margin-left: auto; margin-right: auto; width: 50%");


// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
var dateOfBirth = [
  "9.12.1906",
  "29.12.1918",
  "10.12.1815"];

  var dateOfDeath = [
    "1.1.92",
    "24.2.20",
    "27.11.1852"];

    document.querySelectorAll("section").forEach((section,index)=>{
    var p = document.createElement("p")
    var dob = document.createElement("span")
    var dod = document.createElement("span")
  dob.innerHTML=` Date of Birth : ${dateOfBirth[index]}    `;
  dod.innerHTML=` Date of Death: ${dateOfDeath[index]}     `;
  p.appendChild(dob);
  p.appendChild(dod);
  section.appendChild(p);

    });
