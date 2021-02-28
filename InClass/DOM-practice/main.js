console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
const sectionEl = document.getElementsByTagName("section");
for(i = 0; i < sectionEl.length; i++){
    sectionEl[i].style.backgroundColor = "white"
};

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
const imgEl = document.getElementsByTagName("img");
for(i = 0; i < imgEl.length; i++){
    imgEl[i].style.cssText = "display: block; margin-left: auto; margin-right: auto";
};

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const dates = [
    {
        name: "grace-hopper",
		born: "9th December, 1906",
		died: "1st January, 1992"
},
	{
		name: "katherine-johnson",
		born: "26th August, 1918",
		died: "24th February, 2020"
	},
	{
		name: "ada-lovelace",
		born: "10th December, 1815",
		died: "27th November, 1852"
    }
];

for (key of dates){
    let sectionEl = document.getElementById(`${key.name}`).parentElement
	let paraEl = document.createElement("p");
	paraEl.innerHTML = `Was born on ${key.born} and died on ${key.died}`;
	sectionEl.insertBefore(paraEl, sectionEl.children[sectionEl.children.length - 1]);
}