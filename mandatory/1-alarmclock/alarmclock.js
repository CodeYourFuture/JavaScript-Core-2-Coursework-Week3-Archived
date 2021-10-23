function setAlarm() {
  let startAlarm = document.getElementById("alarmSet"); //get value input field
  const timeRemaining = document.getElementById("timeRemaining"); //time remaining field
  let startTime = startAlarm.value; //start time = input value

  let time = Math.floor(startTime * 60); //converts given input number into seconds.

  // var for storage.
  let intervalId;

  //grab event ID
  intervalId = setInterval(countdown, 1000); //call the countdown function every one second.

  function countdown() {
    const minutes = Math.floor(time / 60); //minutes calc, rounded down to whole number
    let seconds = time % 60; //how does this work?? "modulo" time/60 > remainder
    seconds = seconds < 10 ? `0` + seconds : seconds; //if seconds less than ten add a "0" (formatting)
    timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`; //display time in time remaining field

    if (time === 0) {
      //if time is 0
      timeRemaining.innerHTML = `Time Remaining: 00:00`; //display TIME REMAINING
      playAlarm(); //play alarm
      clearInterval(intervalId); //ensures alarm runs once not every second.
      let colours = ["blue", "lilac", "pink", "purple", "orange"]; //colours array
      let index = 0; //starting index
      function changeColour() {
        //change colours function
        document.querySelector(".centre").style.backgroundColor = //grab element
          colours[index]; //array value
        index = (index + 1) % colours.length; //iterate remainder??
        setTimeout(changeColour, 1000); //set timeout callback //clear interval only clears interval functions
      }

      changeColour(); //call change colour
    } else if (time > 0) {
      time--; //decrease time.
    }
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
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
}

window.onload = setup;
