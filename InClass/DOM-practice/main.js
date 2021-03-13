console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

const sections = document.querySelectorAll("section");
sections.forEach(section => section.style.backgroundColor = "white");

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

const allImages = document.querySelectorAll("img");
console.log(allImages)
allImages.forEach(img => {
    img.style.display = "block";
    img.style.marginLeft = "auto";
    img.style.marginRight = "auto"
});

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let person = [
    {
        name: "Grace Hopper",
        dateOfBirth: "9 December 1906",
        dateOfDeath: "1 January 1992"
    },
    {
        name: "Katherine Johnson",
        dateOfBirth: "26 August 1918",
        dateOfDeath: "24 February 2020"
    },
    {
        name: "Ada Lovelace",
        dateOfBirth: "10 December 1815",
        dateOfDeath: "27 November 1852"
    }
];

// Solution - 1 with "for loop" method
let index = 0;
for (let i = 0; i < sections.length; i++) {
    const para = document.createElement("p");
    sections[i].appendChild(para);
    para.innerText = `${person[index].name}
        Date Of Birth: ${person[index].dateOfBirth}
        Date of Death: ${person[index].dateOfDeath}`;
    index++;
}

//Solution -2 with "for .. of" method
let indexNum = 0;
for (item of sections) {
    const para = document.createElement("p");
    item.appendChild(para);
    para.innerText = `${person[indexNum].name}
        Date Of Birth: ${person[indexNum].dateOfBirth}
        Date of Death: ${person[indexNum].dateOfDeath}`;
    indexNum++;
}

// Solution - 3 with "forEach" High Order Function
sections.forEach((item, index) => {
    const para = document.createElement("p");
    item.appendChild(para);
    para.innerText += `${person[index].name}
        Date Of Birth: ${person[index].dateOfBirth}
        Date of Death: ${person[index].dateOfDeath}`
    index++;
})