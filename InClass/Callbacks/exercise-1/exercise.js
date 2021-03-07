/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/


//asynchronous
console.log("lets see");

setTimeout(function () {
  var heading = document.querySelector('h1');
  heading.style.backgroundColor = 'black'
}, 1000);
console.log("Did it work?");

//task two
console.log('will it work?') 
var colors = ['blue', 'black', 'pink', 'orange'];
let counter = 0
function changeBackground() {
    setInterval(function () {
        if(counter === colors.length) counter = 0;
   var heading = document.querySelector('h1');
   heading.style.backgroundColor = colors[counter];
   counter++;
}, 2000);
}
changeBackground();
console.log('did it work?')



// //-------------class ex------------

// before running the code in your browser, discuss the expected order of each loop

// synchronous - loop through the array of greek gods and print the index numbers and values to the console, e.g. '1. Ares'

// asynchronous - same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout()

const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];

//synchronous

for (let i = 0; i < greekGods.length; i++) {
    console.log(`${i}. ${greekGods[i]}`)
}

//asynchronous

for (let i = 0; i < greekGods.length; i++) {
    console.log(`${i}. ${greekGods[i]}`) 
    setTimeout(function () {
   console.log(`${1}. ${greekGods[1]}`)
}, 3000);
    }


// Exercise 2
// ----------
// You are given the following list of movies


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

console.log(movies)



// // Task 1: create showMovies function



// function showMovies() {
//     let div = document.getElementById('all-movies')
    
    
//     console.log('div with p', div)
//   for (i = 0; i < movies.length; i++) {
//       let pEl = document.createElement('p');
//       pEl.innerText = movies.title;
//     //pEl.innerText = `${movies.title} by ${movies.director}`
//       div.appendChild(pEl);
//     //console.log(pEl);
// }
// }
// console.log('what is happening?')

function showMovies() {
   let div = document.getElementById('all-movies');

   movies.forEach(function(movie) {
       let listItem = document.createElement('li');
       listItem.innerText = `${movie.title} directed by ${movie.director}`;
       div.appendChild(listItem);
   })

}
console.log('what is happening?')
showMovies();



// Task 2: create a new movie object for your favorite movie
// Create a new function called "addMovie"
// - it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
// - it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
// Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
// How many movies can you see on your page?
const myFavMovie = {

    title: "A Million Ways to Die in the West",
    director: "Seth MacFarlane",
    type: "Comedy",
    haveWatched: true
}
console.log(myFavMovie)
// Task 2-3: create addMovies function
function addMovie(movie, callback) {


    let div = document.getElementById('all-movies');
  setTimeout(function () {
  let listItem = document.createElement('li');
       listItem.innerText = `${myFavMovie.title} directed by ${myFavMovie.director}`;
       div.appendChild(listItem);
}, 2000);
}

addMovie(myFavMovie)

// Task 4 - **Extra**