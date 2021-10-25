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

function showMovies() {
	let moviesDiv = document.querySelector('#all-movies');
	let numberOfMovies = document.querySelector("#movies-number");
	numberOfMovies.textContent = 0;
	let number = 0;
	
	movies.forEach((movie, index) => {
		//setTimeout(() => {
      let p = document.createElement("p");
      p.textContent = movie.title + " by " + movie.director;
      moviesDiv.append(p);
      number += 1;
      numberOfMovies.textContent = number;
    //}, 1000 * (index + 1));
	})
}

showMovies()
// create a new movie object for your favorite movie

let newMovie = {
  title: "Back to the future",
  director: "Robert Zemeckis",
  type: "fantastic",
  haveWatched: true,
};

// create addMovies function

function addMovie(newMovie){
	movies.push(newMovie)
	let moviesDiv = document.querySelector("#all-movies");
	let p = document.createElement("p");
	p.textContent = newMovie.title + " by " + newMovie.director;
	//setTimeout(() => {
		moviesDiv.append(p);
	//}, 2000);
}


let isWatched = false;

function addUserMovie (event) {
	event.preventDefault()

	let movieName = document.querySelector("#new-movie-name");
	let movieDirector = document.querySelector("#new-movie-director");
	let movieType = document.querySelector("#new-movie-type");
	let watchedOrNot = document.querySelectorAll('input[type="radio"]')

	movieName.style.borderColor = '';
	movieDirector.style.borderColor = '';
	movieType.style.borderColor = ''

	if (movieName.value.length === 0 || movieDirector.value.length === 0 || movieType.value.length === 0) {
		if (movieName.value.length === 0) {
		movieName.placeholder = "Enter something here";
		movieName.style.borderColor = "red";

		}	
		if (movieDirector.value.length === 0) {
			movieDirector.placeholder = "Enter something here";
			movieDirector.style.borderColor = "red";

	}	
	if (movieType.value.length === 0) {
			movieType.placeholder = "Enter something here";
			movieType.style.borderColor = "red";
			
	}	
	return
}
	for (let radio of watchedOrNot) {
		if (radio.checked)
		isWatched = radio.value;
	}

	let newMovie = {
		title: movieName.value,
		director: movieDirector.value,
		type: movieType.value,
		haveWatched: isWatched
	}

	addMovie(newMovie);

	movieName.value = '';
	movieDirector.value = '';
	movieType.value = '';

	movieName.placeholder = "Name of the movie";
	movieDirector.placeholder = "Director of the movie";
	movieType = "Type of the movie";

}

let sumbitBtn = document.querySelector("#add-movie-btn");
sumbitBtn.addEventListener('click', addUserMovie)