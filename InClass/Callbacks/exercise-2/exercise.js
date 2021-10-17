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

//Task 1 version
// function showMovies(movieArray){
//   const allMoviesDiv = document.getElementById("all-movies");
//   const moviesNumberEl = document.getElementById("movies-number");
//   for(let movie in movieArray){
//     //create the <p>
//     const pEl = document.createElement("p");
//     //add the text
//     pEl.innerHTML = `Title: ${movieArray[movie].title}<br />Director: ${movieArray[movie].director}`;
//     //append the <p> to the <div>
//     allMoviesDiv.appendChild(pEl);
//     //update the number
//     moviesNumberEl.innerHTML = `${movieArray.length}`
//   }
// }
// showMovies(movies);

//Task 2 version
function showMovies(movieArray){
  const allMoviesDiv = document.getElementById("all-movies");
  const moviesNumberEl = document.getElementById("movies-number");
  let count = 0;
  //clear movies from DOM
  for(let i = 0; i < allMoviesDiv.childNodes.length - 1; i++){
    //start at the end
    allMoviesDiv.lastChild.remove()
  }
  function writeMoviePerSecond(){
    if(count < movieArray.length){
      //create the <p>
      const pEl = document.createElement("p");
      //add the text
      pEl.innerHTML = `Title: ${movieArray[count].title}<br />Director: ${movieArray[count].director}`;
      //append the <p> to the <div>
      allMoviesDiv.appendChild(pEl);
      //update the number
      moviesNumberEl.innerHTML = `${movieArray.length}`;
      count++;
      setTimeout(writeMoviePerSecond, 1000);
    }
  }
  writeMoviePerSecond();
}
showMovies(movies);

// create a new movie object for your favorite movie
const newMovie = {
  title: "Snatch",
  director: "Guy Ritchie",
  type: "comedy",
  haveWatched: true,
};

// create addMovies function
function addMovies(movie){
  //add new movie after 2 seconds
  setTimeout(movies.push(movie), 2000)
}
addMovies(newMovie);

//I may come back and finish the form extra task but for now
//I'm going to leave it at that