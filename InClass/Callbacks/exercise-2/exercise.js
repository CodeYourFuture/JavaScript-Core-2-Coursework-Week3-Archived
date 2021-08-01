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
*/
// function showMovies(movies) {
//   const allMovies = document.querySelector('#all-movies');
//   movies.forEach(movie => {
//     const p = document.createElement('p');
//     p.innerText = `${movie.title}  by ${movie.director}`;
//     allMovies.appendChild(p);
//   });
//   const movieNumber = document.querySelector('#movies-number');
//   movieNumber.innerText = movies.length;
// }

/* 
Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?
*/
function addMovie(obj,callBack){
  console.log('waiting 2 secs FOR ADDING movies<<<<<')
  setTimeout(()=>{
    movies.push(obj);// add new film object >> to movie array 
    callBack(movies);// show new array
  },1000);
}


function showMovies(movies) {
  console.log('waiting 1 sec FOR SHOWING movies<<<<<')
  setTimeout(() =>{
    document.querySelectorAll("#all-movies p:not(.alert)").forEach(e => e.parentNode.removeChild(e));//choose all movie in the page and delete them  ****!!!! NOTE for MATT>>>> please look at END OF THE PAGE
    const allMovies = document.querySelector('#all-movies');
    movies.forEach(movie => {
      const p = document.createElement('p');
      let film = `${movie.title}  by ${movie.director}`;
      p.innerText = film;
      allMovies.appendChild(p);
    });
    
    const movieNumber = document.querySelector('#movies-number');
    movieNumber.innerText = movies.length;
  },500);
}


/* 
Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks
*/
/* 
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
const submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
  const newFilm ={
  title: document.getElementById('title').value,
  director : document.getElementById('director').value, 
  type : document.getElementById('type').value,
  haveWatched : document.getElementById('haveWatched').value
  };
  addMovie(newFilm,showMovies);
})


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


showMovies(movies);
// create a new movie object for your favorite movie
const newmovie ={
  title: "CYF",
  director: "Richard Stanley",
  type: "TEC",
  haveWatched: true,
}
addMovie(newmovie,showMovies);



/**
 * 
 * function isInHTML(film){
  const allP =Array.from(document.querySelectorAll("#all-movies p:not(.alert)"))
  console.log(allP);
  return allP.some(p =>{
    console.log(p.innerText,'<<<<<<<<<<<<<<<<PPPPP')
     return p.innerText === film;
  });
}

MATT in this function I tried to check HTML, if the film is already on the page, I don't need to add.. but i couldn't manage it. So I choose the easy way > when you call "showMovies" function, it will clear all old films and creating again.. 


my main goal was to make all the changes to the object. then it was just changing the relevant places on the web page. otherwise, every function will have to make changes on the web page and I will be more likely to make mistakes. or webpage will download all data again 
 */