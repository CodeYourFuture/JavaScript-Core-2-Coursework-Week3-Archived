console.log("Testing JS file loaded!");
// Task 1
// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

function changeBackgroundColour() {
  let sectionNewColor = document.getElementsByTagName("section");
  for (let i = 0; i < sectionNewColor.length; i++) {
    sectionNewColor[i].style.backgroundColor = "lightblue";
  }
}
changeBackgroundColour();

// Task 2
// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

function imagePosition() {
let imageElement = document.getElementsByTagName("img");
  Array.from(imageElement).forEach((element) => {
      element.style.display = "block";
      element.style.margin = "auto";
  });
}
imagePosition();

// Task 3
// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
const femalePioneers = [
    {
        DOB: 1997,
        DOD: 2055,
    },
    {
        DOB: 1997,
        DOD: 2081,
    },
    {
        DOB: 1997,
        DOD: 2011,
    },
];

function heroines() {
 let sections = document.getElementsByTagName("section");
Array.from(sections).forEach((sections, index) => {
    let p = document.createElement("p")
    p.innerText = `Date of Birth: ${femalePioneers[index].DOB} Died in ${femalePioneers[index].DOD}`;
    sections.append(p);
})
   
};

heroines()