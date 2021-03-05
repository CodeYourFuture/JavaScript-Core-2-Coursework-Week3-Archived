// importing quotes data from data.js that I built
import data from "./data.js";
// Getting elements to manipulate
const paragraphQuote = document.getElementById("p-quote");
const paragraphAuthorName = document.getElementById("author-name");
const newQuoteButton = document.getElementById("quote");
const checkboxButton = document.getElementById("checkbox");
const generatorInfoSpan = document.getElementById("generator-info");
//calling displayQuote function to display first quote
displayQuote();
generatorInfoSpan.innerText = "Generator : OFF";
// adding event listener to the new quote button
newQuoteButton.addEventListener("click", () => {
  //checking generator on or off
  if (checkboxCounter === 1) {
    alert("Please stop generator first");
  } else {
    //if generator is off, calling displayQuote function
    displayQuote();
  }
});

let checkboxCounter = 0;
let checkboxInterval;
//adding event listener to the generator check box button
checkboxButton.addEventListener("click", () => {
  if (checkboxCounter === 0) {
    checkboxInterval = setInterval(displayQuote, 5000);
    generatorInfoSpan.innerText = "Generator : ON";
    generatorInfoSpan.style.color = "red";
    checkboxCounter = 1;
  } else if (checkboxCounter === 1) {
    clearInterval(checkboxInterval);
    generatorInfoSpan.innerText = "Generator : OFF";
    generatorInfoSpan.style.color = "black";

    checkboxCounter = 0;
  }
});
// creating function to display quotes
function displayQuote() {
  let newQuote = pickFromArray(data);
  let newAuthorName = newQuote.author;
  let newQuoteParagraph = newQuote.quote;
  paragraphQuote.innerText = newQuoteParagraph;
  paragraphAuthorName.innerText = newAuthorName;
}

// DO NOT EDIT BELOW HERE

// A function which will return one item, at
// random, from the given array.
//
// Parameters
// ----------
// choices: an array of items to pick from.
//
// Returns
// -------
// One item of the given array.
//
// Examples of use
// ---------------
// pickFromArray([1,2,3,4])     //maybe returns 2
// pickFromArray(coloursArray)  //maybe returns "#F38630"
//
// You DO NOT need to understand how this function works.
function pickFromArray(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

// A list of quotes you can use in your app.
// Feel free to edit them, and to add your own favourites.
