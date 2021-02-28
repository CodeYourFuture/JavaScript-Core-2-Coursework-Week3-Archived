/*
================
Exercise 2
----------
You are given the following list of movies */

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

/* Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"
*/

// create showMovies function
function showMovies() {
  movies.forEach(display);
}

function display(movie) {
  let allMovies = document.getElementById("all-movies");
  let p = document.createElement("p");
  p.innerHTML = `<strong>Movie Title:</strong> ${movie.title}&nbsp;&nbsp;&nbsp;&nbsp;<strong>Directed by:</strong> ${movie.director}`;
  allMovies.append(p);

  let numMovies = document.getElementById("movies-number");
  numMovies.textContent = movies.length;
  // give a feedback to interested calling code if a newly added movie is being displayed
  return allMovies.lastElementChild.innerHTML;
}
/*** Note: the following code is commented-out to avoid conflict with the modified version (see below) */
// showMovies();

/*Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?
*/

/*** Modified version of Task 1 solution ***/

// display all movies in movies array one second after the page is loaded(?)
setTimeout(function () {
  showMovies();
}, 1000);

/******* Solution for the rest of Task 2  *********/

// create a new movie object for your favorite movie
let myNewMovies = [
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

// from the new movies collection, add each movie to the original list (movies) after two seconds delay
let displayAtIntervals = setInterval(addMovies, 2000, myNewMovies);

let i = 0; // index
// create addMovies function
function addMovies(moviesArray) {
  let numMovies = moviesArray.length;
  if (i < numMovies) {
    movies.push(moviesArray[i]);
    // display(moviesArray[i]);
    if (displayAndVerify(display, moviesArray[i])) {
      i++;
    } else {
      clearInterval(displayAtIntervals);
      throw "Movie not added or added the wrong movie";
    }
  }
}

/*Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks
*/
function displayAndVerify(callback, arg) {
  return (
    `<strong>Movie Title:</strong> ${arg.title}&nbsp;&nbsp;&nbsp;&nbsp;<strong>Directed by:</strong> ${arg.director}` ==
    callback(arg)
  );
}

/*
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

// Task 4 Solution
