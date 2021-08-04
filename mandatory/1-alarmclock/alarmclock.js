function setAlarm() {
  // When the `Set Alarm` button is clicked, get the value of the input field
  let alarmSet = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  const bodyEl = document.querySelector("body");

  // Update the `Time Remaining` title every second
  let timer = setInterval(displayTimer, 1000);

  function displayTimer() {
    // When the remaining time left is 0, play the alarm sound
    if (alarmSet < 0) {
      playAlarm();
      clearInterval(timer);
      // When the remaining time left is 0, change bgColor every second
      setInterval(function() {
        bodyEl.style.background = randomColour();
      }, 1000);
    } else {
      const numOfMinutes = Math.floor(alarmSet / 60);
      let numOfSeconds = alarmSet % 60;
      if (numOfSeconds < 10) {
        numOfSeconds = `0${numOfSeconds}`;
      }
      timeRemaining.innerHTML = `Time Remaining: 0${numOfMinutes}:${numOfSeconds}`;
      // Decrease the value of alarmSet by 1
      alarmSet--;
    }
  }
  // Function for random rgb values
  function randomColour() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
  }
};

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
