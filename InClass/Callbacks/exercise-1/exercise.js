/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Done in CodePen

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen - Done in CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/
// git
const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];

// before running the code in your browser, discuss the expected order of each loop
// console.log(greekGods[1]);

// synchronous - loop through the array of greek gods and print the index numbers and values to the console, e.g. '1. Ares'
// for (let god of greekGods){
//   console.log(greekGods.indexOf(god) + ". " + god);
// }

// asynchronous - same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout()
for (let god of greekGods){
  if (greekGods.indexOf(god) !== 1){
      console.log(greekGods.indexOf(god) + ". " + god);
  }else{
    setTimeout(function(){
      console.log(greekGods.indexOf(god) + ". " + god)
    },2000)
  }
}