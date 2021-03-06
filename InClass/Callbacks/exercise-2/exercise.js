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

// Task 1: create showMovies function
const divElement = document.querySelector("#all-movies");
const movieNumbers = document.querySelector("#movies-number");

function showMovies() {
  divElement.innerHTML = "";
  movies.forEach(movie => {
    const para = document.createElement("p");
    para.innerText += `${movie.title} by ${movie.director}`;
    movieNumbers.innerText = movies.length;
    divElement.appendChild(para);
  })
}

// Task 2: create a new movie object for your favorite movie
const myFavMovie = {};

// Task 2-3: create addMovies function
function addMovie(movie, callback) {
  setTimeout(() => {
    movies.push(movie);
    callback();
  }, 2000)
}

// Task 4 - **Extra**
const title = document.querySelector("#title");
const director = document.querySelector("#director");
const type = document.querySelector("#type");
const haveWatched = document.querySelector("#haveWatched");
const movieSubmit = document.querySelector("#movie-submit");


movieSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  myFavMovie.title = title.value;
  myFavMovie.director = director.value;
  myFavMovie.type = type.value;
  myFavMovie.haveWatched = haveWatched.checked ? true : false;
  addMovie(myFavMovie, showMovies);
  clearInputFields();
})

function clearInputFields() {
  title.value = "";
  director.value = "";
  type.value = "";
  haveWatched.checked = "";
}

window.onload = showMovies;