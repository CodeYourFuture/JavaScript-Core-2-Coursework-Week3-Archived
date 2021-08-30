/* Exercise (1)
Before running the code in your browser, discuss the expected order of each loop

1. Synchronous - Write code that loops through the array of greek gods and print the index numbers and values to the console, e.g. '1. Ares'

2. Asynchronous - Same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout() */

const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];

// Synchronous
for(let i = 0; i < greekGods.length; i++) {
  console.log(`${i}. ${greekGods[i]}`);
};
​
// Asynchronous
for(let i = 0; i < greekGods.length; i++) {
  // if god is at 2nd position, wait 2 seconds before printing their name
  if (i === 2) {
    // 2000 milliseconds = 2 seconds
    setTimeout(function () {
      console.log(`${i}. ${greekGods[i]}`);
    }, 2000);
  } else {
    // otherwise print them in order
    console.log(`${i}. ${greekGods[i]}`);
  }
};
