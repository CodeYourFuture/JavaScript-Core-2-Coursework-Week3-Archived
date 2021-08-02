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

// create showMovies function

// create a new movie object for your favorite movie

// create addMovies function
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
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
- On the form with id #add-movies, add a "submit" event listener
- When the button is clicked you need to:
    - Read all input field values and create a new movie object literal with title, director, type and haveWatched properties
    - Push the new object on the movies array 
    - Display the updated list of movies on your page

TIP: Use the functions you created on tasks 1-3
================
*/

const movies = [
    {
        title: "Color Out of Space",
        director: "Richard Stanley",
        type: "sci-fi",
        haveWatched: true
    }, {
        title: "A Twelve-Year Night",
        director: "Álvaro Brechner",
        type: "horror",
        haveWatched: false
    }, {
        title: "The Whistlers",
        director: "Corneliu Porumboiu",
        type: "comedy",
        haveWatched: true
    }, {
        title: "The Invisible Man",
        director: "Leigh Whannell",
        type: "horror",
        haveWatched: false
    },
];

// Task 1: create showMovies function
function showMovies() { // add code here
    const divEl = document.querySelector("#all-movies");
    const numberMovies = document.querySelector("#movies-number");
    numberMovies.innerText = `${
        movies.length
    }`;
    movies.forEach((movie) => {
        const movieInfo = document.createElement("p");
        movieInfo.innerText = `${
            movie.title
        } By ${
            movie.director
        }`;
        divEl.appendChild(movieInfo);
    });
}
const myFavMovie = {
    title: "Matilda",
    director: "Danny DeVito",
    type: "fantasy comedy",
    haveWatched: true
};

// Task 2: create a new movie object for your favorite movie

// Task 2-3: create addMovies function
function addMovie(movie, callback) {
    setTimeout(function () {
        movies.push(movie);
        callback();
    }, 2000);
}

// showMovies();
addMovie(myFavMovie, showMovies);

// // Task 4 - **Extra**
const submit = document.querySelector("#movie-submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const director = document.querySelector("#director");
    const title = document.querySelector("#title");
    const type = document.querySelector("#type");
    const havewatched = document.querySelector("#haveWatched");
    const obj = {
        title: title.value,
        director: director.value,
        type: type.value,
        haveWatched: havewatched.value
    };
    addMovie(obj, showMovies);
});
