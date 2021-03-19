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

const allMovies = document.getElementById("all-movies");
const moviesNumber = document.getElementById("movies-number");
// create showMovies function
function showMovies() {
  // - iterates through the "movies" array
  for (movie of movies) {
    // - for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
    const pElement = document.createElement("p");
    pElement.innerText = `Title: ${movie.title} \n Director: ${movie.director}`;
    // Amend your function above to only show movies after 1 second.
    setTimeout(function() {
      allMovies.appendChild(pElement);
    }, 1000);
    // - it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"
    moviesNumber.innerText = movies.length;
  }
};

// Create a new object for your favorite movie following using the "myMovies" objects as a guide 
const newMovie = {
    title: "Blended",
    director: "Frank Coraci",
    type: "Romantic Comedy",
    haveWatched: true,
};

// Create a new function called "addMovie"
function addMovie(newMovie, callback) {
  // - it adds the new movie to the list of movies after 2 seconds.
  setTimeout(function() {
    movies.push(newMovie);
    callback();
   }, 2000);
};
  // Call addMovie to add the new movie to the list and then showMovies to see the movies added on the screen.
addMovie(newMovie, showMovies);

// Create a form anywhere on your page.
// - 4 input text fields, one for each property of your movie object
const formElement = document.getElementById("add-movies");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const typeElement = document.getElementById("type");
const haveWatchedElement = document.getElementById("haveWatched");

// - The field values should be used to create a new movie object literal
  formElement.addEventListener("submit", (element) => {
    element.preventDefault();
    const addNewMovie = {
      title: titleElement.value,
      director: directorElement.value,
      type: typeElement.value,
      haveWatched: haveWatchedElement.checked,
    };
    // - The new movie is then added to the list of movies and gets displayed on your page
    addMovie(addNewMovie, showMovies);
});