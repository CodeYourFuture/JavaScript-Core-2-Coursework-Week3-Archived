/*
================
Exercise 2
----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

Prefer to work on a codepen? https://codepen.io/makanti/pen/MWwMgmW?editors
================
*/
const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function

// function showMovies(movies) {
// 	let i = 0;
// 	document.querySelector("#movies-number").innerText = movies.length;
// 	setInterval(function () {
// 		if (i < movies.length) {
// 			let paragraph = document.createElement("p");
// 			paragraph.innerHTML = `"${movies[i].title}" by ${movies[i].director}`
// 			document.querySelector("#all-movies").appendChild(paragraph); 
// 		}
// 		else return

// 		i++;
// 	}, 1000);
// }

function showMovies(movies) {
	document.querySelector("#movies-number").innerText = movies.length;
	document.querySelectorAll('.movie-item').forEach(e => e.remove());
	for (let i = 0; i < movies.length; i++) {
		setTimeout(function () {
			let paragraph = document.createElement("p");
			paragraph.className = "movie-item";
			paragraph.innerHTML = `"${movies[i].title}" by ${movies[i].director}`
			document.querySelector("#all-movies").appendChild(paragraph); 
		}, 1000 + (1000 * i));
	}
}

// create a new movie object for your favorite movie

let newMovie = {
	title: "The Lord of The Rings",
	director: "Peter Jackson",
	type: "fantasy",
	haveWatched: true,
}

// create addMovies function

function addMovie(movie, movies) {
	setTimeout(function () {
		movies.push(movie);
		showMovies(movies);
		//document.querySelector("#movies-number").innerText = movies.length;
	}, 2000);	
}

// update list of movies when form is POSTed
let saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", function (event) {
	event.preventDefault();
	let newMovie = {
		title: document.querySelector("#title").value,
		director: document.querySelector("#director").value,
		type: document.querySelector("#type"),
		haveWatched: document.querySelector("#watched").value
	}  
	
	addMovie(newMovie, movies);
});