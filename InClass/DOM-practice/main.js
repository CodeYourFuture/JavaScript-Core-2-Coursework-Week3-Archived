console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const allSection = document.querySelectorAll("section");
allSection.forEach((element) => {
    element.style.backgroundColor = "white";
});





// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

const all_image = document.querySelectorAll("img");
all_images.forEach((img) => {
    img.classList.add("content-title");
});




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
const dates = [
    {
        name: "Grace Hopper",
        dob: "9th December 1906",
        Died: "1st January 1992",
    },
    {
        name: "Katherine Johnson",
        dob: "26th August 1918",
        Died: "24th February 2020",
    },
    {
        name: "Ada Lovelace",
        dob: "10th December 1815",
        Died: "27th November 1852",
    },
];

Array.from(allSections).map((element, index) => {
    const paragraph = document.createElement("p");
    paragraph.innerText = `${dates[index].name} was born on ${dates[index].dob} and died on ${dates[index].Died}`;
    element.appendChild(paragraph);
});