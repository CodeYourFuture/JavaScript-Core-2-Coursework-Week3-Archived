console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
let sectionElms = document.querySelectorAll("section");
for (let key of sectionElms) {
  key.style.backgroundColor = "white";
}

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
let imgElms = document.querySelectorAll("img");

// for (img in imgElms) {
//   imgElms[img].classList.add('content-title');
// }

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let personInfo = [
  {
    name: "Grace Hopper",
    birthDate: "December 9, 1906",
    deathDate: "January 1, 1992",
  },
  {
    name: "Katherine Johnson", //
    birthDate: "August 26, 1918",
    deathDate: "February 24, 2020",
  },
  {
    name: "Ada Lovelace",
    birthDate: "December 10, 1815",
    deathDate: "November 27, 1852",
  },
];

let i = 0; //index number
for (eachSect of sectionElms) {
  const newPara = document.createElement("p");
  eachSect.appendChild(newPara);
  newPara.innerHTML = `<strong> Great Lady : </strong>${personInfo[i].name},  <strong> Born : </strong>${personInfo[i].birthDate} & <strong> Died : </strong> ${personInfo[i].deathDate} `;
  i++;
}
