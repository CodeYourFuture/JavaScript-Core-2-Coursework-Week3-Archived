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

/***************************************************************************************

Task 1

- create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with 
  the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element 
  to the total number of the movies in the array "movies" 
  
Task 2

- Amend your function above to only show movies after 1 second. 
- Remember to use setTimeout to achieve that DONE 

****************************************************************************************/

//GLOBAL ELEMENTS 
const movieArea = document.querySelector("#all-movies"); //div
const moviesNum = document.querySelector("#movies-number"); //div

//CREATE HTML ELEMENTS & CONTENT 
function displayMov (movie) {
  let paraEls = document.createElement("p");
  movieArea.appendChild(paraEls);
  paraEls.innerText = `${movie.title} - ${movie.director}.`;
}

//DISPLAY EACH MOVIE WITH TIME DELAY & UPDATE MOVIE COUNTER  
function displayMovies() {
  moviesNum.textContent = movies.length; //update movie count
  movieArea.innerText = ""; //clear any previous values;
  movies.forEach((movie, index) => { //display each movie after 1 second delay 
    setTimeout(() => {
      displayMov(movie);
    }, index * 1000); 
  });
}


//CALL MOVIE DISPLAY FUNCTION
displayMovies();

/******************************************************************************************
  
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
TIP: use callbacks  

*****************************************************************************************/

//REQUIRED TO PUSH NEW MOVIE OBJECTS INTO CURRENT ARRAY & UPDATE MOVIE COUNTER 
function addMovie(movie) {
  movies.push(movie); //push new mov into array
  setTimeout(() => { //add timer 
    displayMov(movie); //call displayMov function 
  }, 2000); //2sec delay to stop the original function and new function over lapping 
  moviesNum.innerText = movies.length;//update movie count 
}

//THESE CAN BE REMOVED IF I DONT WANT TO ADD myFavMovie OBJECT BEFORE INPUTTED OBJECTS BELOW

//CREAT NEW MOVIE OBJECT 
const myFavMovie = {
  title: "The Lord of the Rings",
  director: "Peter Jackson",
  type: "Fantasy",
  haveWatched: true,
};

//ADD myFavMovie WITH A TIME DELAY WITH addMovie CALLBACK  
setTimeout(() => {
  addMovie(myFavMovie);
}, 2000); // adds new submitted movies after 1 sec


/***************************************************************************************

Task 4 - **Extra**

Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.

When the button is clicked

- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3 

****************************************************************************************/

//FORM TITLE INPUT 
const form = document.getElementsByTagName("form")[0]; //grabbing form element (hard coded)
const inputTitle = document.createElement("input"); //creating movie title input element 
inputTitle.type = "text"; //input type text 
inputTitle.setAttribute("placeholder", "Title"); //set attribute for placeholder
form.appendChild(inputTitle); //append title input to form 

//FORM DIRECTOR INPUT 
const inputDirector = document.createElement("input"); //creating movie director input 
inputDirector.type = "text"; //setting text as input type 
inputDirector.setAttribute("placeholder", "Director");// creating attribute placeholder
form.appendChild(inputDirector); //append director input to form

//FORM TYPE (OF MOVIE) INPUT 
const inputType = document.createElement("input"); //create typeOfMovie input 
inputType.type = "text"; //input type text 
inputType.setAttribute("placeholder", "Type"); //attribute for placeholder 
form.appendChild(inputType); //append to form 

//FORM haveWatched INPUT  
const inputWatched = document.createElement("input"); //create haveWatched input area
inputWatched.type = "checkbox"; //input type checkbox 
const boxLabel = document.createElement("label"); //create label for checkbox
boxLabel.innerText = "Watched?"; //create label text 
form.appendChild(boxLabel); // append label to form 
form.appendChild(inputWatched); //append checkbox to form 

//FORM SUBMIT BUTTON
const btn = document.createElement("button"); //create button
btn.innerText = "submit"; //button text 
form.appendChild(btn); //append 

//BUTTON EVENT LISTENER 
btn.addEventListener("click", (event) => { //add event listener
  event.preventDefault(); //prevent page from reloading 
  console.log(event); //debugging check console 
  const movie = { //creating new object to be pushed 
    title:inputTitle.value, //grabbing values from input fields
    director: inputDirector.value,
    type: inputType.value,
    haveWatched: inputWatched.checked
  }
  addMovie(movie); //calling addMovie function to push new object to array on click 
})


