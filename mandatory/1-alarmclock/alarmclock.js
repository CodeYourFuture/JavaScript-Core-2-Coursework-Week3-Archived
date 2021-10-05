let shouldPause = false;

function updateTime(totalTime) {
  const getTimeRemaining = document.querySelector("#timeRemaining");
  // pause the clock
  if (shouldPause) setTimeout(updateTime, 1000, totalTime);
  else {
    if (totalTime === 0) {
      // return if time is 0, closes the loop
      getTimeRemaining.innerText = "Time Remaining: 00:00";
      document.body.style.backgroundColor = "yellow";
      return playAlarm();
    }

    // converting the user input (seconds) to a usable time
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime - minutes * 60;

    // construct the time remaining number
    function str_pad_left(string, pad, length) {
      return (new Array(length + 1).join(pad) + string).slice(-length);
    }

    const finalTime =
      str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
    // updating the element to reflect the user input
    getTimeRemaining.innerText = `Time Remaining: ${finalTime}`;

    // run this function every second, using the function as a loop
    setTimeout(updateTime, 1000, (totalTime = totalTime - 1));
  }
}

function setAlarm() {
  // fixed a bug with stopping the alarm sound then starting a new alarm
  shouldPause = false;

  // get each of the elements we need to change
  const getInputField = document.querySelector("#alarmSet");
  let userInput = getInputField.value;

  // has to be a string, .value returns string
  const invalidInputs = ["", "0"];
  // validating the users input using the array also for any negative number
  if (invalidInputs.includes(userInput)) {
    return alert(
      `"${userInput}" is not a valid number! Please enter a valid number`
    );
    // negative numbers
  } else if (userInput < 0) {
    return alert(
      `"${userInput}" is not a valid number! Please enter a number greater than 0`
    );
    // any number greater than 5999 = 99:59
  } else if (userInput > 5999) {
    return alert(
      `"${userInput}" is not a valid number! Please enter a number less than 6000`
    );
  }

  // resetting the style on the text field
  getInputField.style = "initial";

  // convert the string into an int
  updateTime(parseInt(userInput), false);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  // adding a click event to the Set Alarm Button which calls the setAlarm() function
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });
  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  shouldPause = !shouldPause;
  document.body.style.backgroundColor = "initial";
}

window.onload = setup;
