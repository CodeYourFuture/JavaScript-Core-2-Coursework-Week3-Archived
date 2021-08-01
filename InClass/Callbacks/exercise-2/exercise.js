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

// higher order function

const showMovies = function (data, callBack) {
  data.forEach((movie) => {
    if (typeof callBack === "function") {
      callBack(movie);
    }
  });
};

showMovies(movies, function (obj) {
  setTimeout(() => {
    const moviesNumber = document.querySelector("#movies-number");
    const allMovie = document.querySelector("#all-movies");
    const pElement = document.createElement("p");
    const totalMovie = movies.length;

    pElement.innerText = `${obj.title} by ${obj.director}`;
    moviesNumber.innerText = totalMovie;
    allMovie.appendChild(pElement);
  }, 1000);
});

// create a new movie object for your favorite movie

const myMovies = {
  title: "Space Jam",
  director: "Malcolm D.Lee",
  type: "Action/Animated",
  haveWatched: true,
};

// create addMovies function

function addMovie(myMovies) {
  movies.push(myMovies);

  setTimeout(() => {
    showMovies(movies, function (obj) {
      if (obj === myMovies) {
        const allMovie = document.querySelector("#all-movies");
        const pElement = document.createElement("p");

        pElement.innerText = `${obj.title} by ${obj.director}`;
        allMovie.appendChild(pElement);
      }
    });
  }, 2000);
}

addMovie(myMovies);
//<-----------------------------------------------------------------------------------------------------

//extra

//Create Form
//<-----------sample------------>
// let div = document.querySelector(".jumbotron");
// let form = document.createElement("form");
// let i1 = document.createElement("input");
// let i2 = document.createElement("input");
// let i3 = document.createElement("input");
// let i4 = document.createElement("input");
// let save = document.createElement("button");

// i1.setAttribute("id", "title");
// i1.setAttribute("type", "text");

// i2.setAttribute("id", "director");
// i2.setAttribute("type", "text");

// i3.setAttribute("id", "type");
// i3.setAttribute("type", "text");

// i4.setAttribute("id", "watched");
// i4.setAttribute("type", "text");

// form.append(i1, i2, i3, i4, save);
// div.appendChild(form);

const submitButton = document.querySelector("button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const titleValue = document.querySelector("#title").value;
  const directorValue = document.querySelector("#director").value;
  const typeValue = document.querySelector("#type").value;
  const watchedValue = document.querySelector("#watched").value;

  const newObj = {
    title: titleValue,
    director: directorValue,
    type: typeValue,
    haveWatched: watchedValue,
  };

  addMovie(newObj);
});
