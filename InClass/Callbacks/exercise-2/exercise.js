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

// create a new movie object for your favorite movie
const favMovies = {
  title: "The Graduate",
  director: "Mike Nichols",
  type: "drama",
  HaveWatched: true,
};

// create showMovies function
function showMovies(index) {
  if (index < movies.length) {
    let movie = movies[index];
    let allMovieIdDiv = document.getElementById("all-movies");
    let moviesNumberSpan = document.getElementById("movies-number");
    let movieNumberSpan = (document.getElementById("movies-number").innerHTML =
      movies.length);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `<strong>Movie Tile:</strong>${movie.title} <strong>Movie Director:</strong> ${movie.director}`;

    setTimeout(function () {
      allMovieIdDiv.appendChild(paragraph);
      showMovies(index + 1);
    }, 1000);
  }
}
showMovies(0);

// create addMovies function

function addMovies(movieObject) {
  setTimeout(function () {
    movies.push(movieObject);
  }, 2000);
}

addMovies(favMovies);

// Task 4 - **Extra**
// Create a form anywhere on your page. The form should have
// - 4 input text fields, one for each property of your movie object
// - a "save" button.
// When the button is clicked
// - The field values should be used to create a new movie object literal
// - The new movie is then added to the list of movies and gets displayed on your page
// TIP: Use the functions you created on tasks 1-3

function createNewMovies() {
  let mainDiv = document.getElementById("main");
  let formElement = document.createElement("FORM");

  let movieTitleField = document.createElement("INPUT");
  movieTitleField.placeholder = "Type movie title here";

  let movieDirectorField = document.createElement("INPUT");
  movieDirectorField.placeholder = "Type movie director here";

  let typeOfMovieField = document.createElement("INPUT");
  typeOfMovieField.placeholder = "Type the type of movie here";
  // condition true or false

  let haveWatchedField = document.createElement("INPUT");
  let saveButton = document.createElement("BUTTON");

  formElement.appendChild(movieDirectorField);
  formElement.appendChild(movieTitleField);
  formElement.appendChild(typeOfMovieField);
  formElement.appendChild(haveWatchedField);
  formElement.appendChild(saveButton);

  mainDiv.appendChild(formElement);
  //body.appendChild(formElement);

  saveButton.innerHTML = "Save";
  saveButton.style.backgroundColor = "#D0FBF7";
  
  saveButton.addEventListener("click", function (input) {
    alert("Your film has been added to the database");
  });
  console.log(formElement);
}
createNewMovies();

// Task 4 - **Extra**
// Create a form anywhere on your page. The form should have
// - 4 input text fields, one for each property of your movie object
// - a "save" button.
// When the button is clicked
// - The field values should be used to create a new movie object literal
// - The new movie is then added to the list of movies and gets displayed on your page
// TIP: Use the functions you created on tasks 1-3