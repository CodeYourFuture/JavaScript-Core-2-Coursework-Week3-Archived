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

/* 

Task 1

- create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with 
  the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element 
  to the total number of the movies in the array "movies" 
  
Task 2

- Amend your function above to only show movies after 1 second. 
- Remember to use setTimeout to achieve that DONE */

function displayMovies() {
  const movieArea = document.querySelector("#all-movies");
  const moviesNum = document.querySelector("#movies-number");
  moviesNum.textContent = movies.length;

  movies.forEach((movie, index) => {
    setTimeout(() => {
      let paraEls = document.createElement("p");
      movieArea.appendChild(paraEls);
      paraEls.innerText = `${movie.title} - ${movie.director}.`;
    }, index * 1000);
  });
}

//displayMovies();

/* 

  Task 3

- create a new movie object for your favorite movie 
- create a new function called "addMovie"
- it receives a movie object as an argument - 
  you can create a new object for your favorite movie 
  following using the "myMovies" objects as a guide 

- it adds the new movie to the list of movies after 2 seconds. 
  Remember to setTimeout to achieve that
  Call addMovies to add the new movie to the list and then 
  showMovies to see the movies added on the screen.
  How many movies can you see on your page?

- Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks  */

const myFavMovie = {
  title: "The Lord of the Rings",
  director: "Peter Jackson",
  type: "Fantasy",
  haveWatched: true,
};

function addMovie(movie) {
  displayMovies();
  setTimeout(() => {
    movies.push(myFavMovie);
  }, 2000); //Callback not working correctly, how to get the extra 2 
  // sec delay for the last item pushed to the array? 
}

addMovie(myFavMovie);

/*

Task 4 - **Extra**

Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3 */
