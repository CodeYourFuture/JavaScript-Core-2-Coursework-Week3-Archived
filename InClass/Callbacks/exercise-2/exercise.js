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

let allMovies = document.getElementById("all-movies");
let movieNumbers = document.getElementById("movies-number");

//Answer to Task 1
function showMovies(array){

  //Iterating through the given array to create a p tag and it's content for each object in the array:
  array.forEach(movie => {
    let details = document.createElement("p");
    details.innerHTML = `<h2>${movie.title}</h2>\n<h3>${movie.director}</h3>\n&nbsp`;
    allMovies.append(details);
  })

  //Displaying the number of the movies
  movieNumbers.innerText = array.length;
}

//Answer to Task 2
function addMovie(object){
  setTimeout(movies.push(object), 2000);
}

//Answer to Task 3
// let newMovie = {
//   title: "Beautiful Day in the Neighborhood",
//   director: "Marielle Heller",
//   type: "drama",
//   haveWatched : true
// }
// addMovie(newMovie);


//Answer to Task 4
function createObject(){

  //Creating and asigning variables to form values:
  let newTitle, movieDirector, movieType, watchedOrNot, watchedOrNotArray, checked;
  newTitle = document.getElementById("title").value;
  movieDirector = document.getElementById("director").value;
  movieType = document.getElementById("type").value;
  watchedOrNot = document.getElementsByName("hasWatched");
  watchedOrNotArray = Array.from(watchedOrNot);
  checked = watchedOrNotArray.find(option =>  option.checked);
  
  //Creating the new movie object
  let newMovie = {
    title: newTitle,
    director: movieDirector,
    type: movieType,
    hasWatched: Boolean(checked.value)
  }

  //Adding the new movie object to the list of arrays called "movies" using the addMovie helper function:
  addMovie(newMovie)
}

//form add movie button
let addBtn = document.getElementById("addBtn");

//Listening for when the button is clicked
addBtn.addEventListener("click", createObject);

setTimeout(showMovies(movies), 5000);