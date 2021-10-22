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

//global elements 
const movieArea = document.querySelector("#all-movies"); //div
const moviesNum = document.querySelector("#movies-number"); //div

//function creating html elements & content 
function displayMov (movie) {
  let paraEls = document.createElement("p");
  movieArea.appendChild(paraEls);
  paraEls.innerText = `${movie.title} - ${movie.director}.`;
}

//function to display the movies with set time & updates movie counter 
function displayMovies() {
  moviesNum.textContent = movies.length; //update movie count
  movieArea.innerText = ""; //clear any previous values;
  movies.forEach((movie, index) => {
    setTimeout(() => {
      displayMov(movie);
    }, index * 1000); //display each movie after 1 second delay 
  });
}

//call original movies 
displayMovies();


/* Task 3

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

//THIS CAN BE REMOVED IF I DONT WANT TO ADD THIS MOVIE OBJECT 
const myFavMovie = {
  title: "The Lord of the Rings",
  director: "Peter Jackson",
  type: "Fantasy",
  haveWatched: true,
};

//function to push new movies into old array & update movie count
function addMovie(movie) {
  movies.push(movie); //push new mov into array
  setTimeout(() => { 
    displayMov(movie);
  }, 2000); //add new favorite movie after 2secs
  moviesNum.innerText = movies.length;//update movie count 
}

// timer function to edit time of last movie added. THIS CAN BE REMOVED IF I DONT WANT TO ADD MOVIE 
setTimeout(() => {
  addMovie(myFavMovie);
}, 1000 * movies.length); // adds new submitted movies after 1 sec


/*

Task 4 - **Extra**

Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.

When the button is clicked

- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3 */

const form = document.getElementsByTagName("form")[0];
const inputTitle = document.createElement("input");
inputTitle.setAttribute("placeholder", "Title");
inputTitle.type = "text";
form.appendChild(inputTitle);

const inputDirector = document.createElement("input");
inputDirector.setAttribute("placeholder", "Director");
inputDirector.type = "text";
form.appendChild(inputDirector);

const inputType = document.createElement("input");
inputType.setAttribute("placeholder", "Type");
inputType.type = "text";
form.appendChild(inputType);

const inputWatched = document.createElement("input");
const boxLabel = document.createElement("label");
boxLabel.innerText = "Watched?";
form.appendChild(boxLabel);
inputWatched.type = "checkbox";
form.appendChild(inputWatched);

const btn = document.createElement("button");
btn.innerText = "submit";
form.appendChild(btn);

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  const movie = {
    title:inputTitle.value,
    director: inputDirector.value,
    type: inputType.value,
    haveWatched: inputWatched.checked
  }
  addMovie(movie);
})


