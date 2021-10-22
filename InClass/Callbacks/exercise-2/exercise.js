function showMovies() { 
  // adding my code below:
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
}