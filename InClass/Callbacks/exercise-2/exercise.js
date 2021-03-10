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

// Selectors
const divElement = document.querySelector("#all-movies");
const movieNumbers = document.querySelector("#movies-number");
const title = document.querySelector("#title");
const director = document.querySelector("#director");
const type = document.querySelector("#type");
const haveWatched = document.querySelector("#haveWatched");
const movieSubmit = document.querySelector("#movie-submit");

// Functions
function showMovies() {
  divElement.innerHTML = "";
  movies.forEach(movie => {
    const para = document.createElement("p");
    para.innerText += `${movie.title} by ${movie.director}`;
    movieNumbers.innerText = movies.length;
    divElement.appendChild(para);
  })
}

function addMovie(movie, callback) {
  setTimeout(() => {
    movies.push(movie);
    callback();
  }, 2000)
}

movieSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const myFavMovie = {};
  myFavMovie.title = title.value;
  myFavMovie.director = director.value;
  myFavMovie.type = type.value;
  myFavMovie.haveWatched = haveWatched.checked ? true : false;
  addMovie(myFavMovie, showMovies);
  clearInputFields();
})

function clearInputFields() {
  title.value = "";
  director.value = "";
  type.value = "";
  haveWatched.checked = "";
}

window.onload = showMovies;