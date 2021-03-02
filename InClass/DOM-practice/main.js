console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.


let background = document.querySelectorAll("section").forEach(colour => 
    colour.style.backgroundColor = "white"
    );



// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.


let images = document.querySelectorAll("img").forEach(pic => 
    pic.style.cssText += "display: block; margin:auto"
    );



// Task 3

// Google the date of birth and death of each of the people on the page. 
//Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let info = [
	{
		name: "Grace Hopper",
		birthday: "9 December 1906",
		deathDate: "1 January 1992"
	},
	{
		name: "Katherine Johnson",
		birthday: "26 August 1918",
		deathDate: "24 February 2020"
	},
	{
		name: "Ada Lovelace",
		birthday: "10 December 1815",
		deathDate: "27 November 1852"
	}
]

for (let i = 0; i < info.length; i++) {
    const element = info[i];
    let paragraph = document.createElement("p");
	paragraph.innerHTML = `Born on ${i.birthday} and died on ${i.deathDate}`;
}

