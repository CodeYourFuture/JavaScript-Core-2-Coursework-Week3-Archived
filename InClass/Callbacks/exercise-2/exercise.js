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

// task-1 & 2  create showMovies function
const showMovies = function (movies) {
  let spanEl = document.getElementById("movies-number");
  let movieContainer = document.getElementById("all-movies");
  movies.forEach((movie, index) => {
    delete movies[index];
    let newParagraph = document.createElement("p");

    setTimeout(() => {
      newParagraph.innerHTML = `<strong>Movie Title : </strong>${movie.title}</br> <strong>Director : </strong> ${movie.director}`;
      movieContainer.appendChild(newParagraph);
    }, 1000);
    spanEl.innerText = movies.length;
  });
};
showMovies(movies);
// task 2 create a new movie object for your favorite movie

const newMovie = {
  title: "Star Trek: Nemesis",
  director: "Stuart Baird",
  type: "sci-fi",
  haveWatched: true,
};

function addMovies(movie, callback) {
  //movie is the new object
  setTimeout(() => {
    movies.push(movie); //add movie object in the existing movies array
    callback(movies); //call back showMovies
  }, 2000);
}

addMovies(newMovie, showMovies);

// task 4
const title = document.getElementById("title");
const director = document.getElementById("director");
const type = document.getElementById("type");
const haveWatched = document.getElementById("haveWatched");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
  //field values are being passed to create  a new movie object literal
  event.preventDefault();
  newMovie.title = title.value;
  newMovie.director = director.value;
  newMovie.type = type.value;
  newMovie.haveWatched = haveWatched.checked ? true : false;
  addMovies(newMovie, showMovies);
  updateInputFields();
});

function updateInputFields() {
  //clearing the input field
  title.value = "";
  director.value = "";
  type.value = "";
  haveWatched.checked = "";
}
