
const movies = [{
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
     {
        title: "The Unexpected Man and his pile",
        director: "Leigh Whannell",
        type: "horror",
        haveWatched: false,
    },
];

const favMovies = {
    title: "Rangers in the Sky",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
};

const showMovies = (movies) => {
  document.getElementById("movies-number").innerHTML = movies.length;
  movies.forEach((movie, index) => {
    let movieEl = document.getElementById("all-movies");
    let pEl = document.createElement("p");
    delete movies[index];
    setTimeout(() => {
      pEl.innerHTML = `<strong>Movie Tile:</strong> ${movie.title}, <strong>Movie Director:</strong> ${movie.director}`;
      movieEl.appendChild(pEl);
    }, 1000);
  });
};
showMovies(movies);

const addMovie = (movie) => {
    setTimeout(() => {
      movies.push(movie);
      showMovies(movies)
    }, 2000); 
};
addMovie(favMovies);

let saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let movieToAdd = {
		title: document.getElementById("film-title").value,
		director: document.getElementById("film-director").value,
		type: document.getElementById("film-type"),
		haveWatched: document.getElementById("film-watched").value
  }  
  addMovie(movieToAdd, movies);
  document.getElementById("form").reset();
});
