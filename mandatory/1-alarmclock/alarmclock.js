function setAlarm() {
  let newAlarm = document.getElementById("alarmSet");
  let countDown = document.getElementById("timeRemaining");

  // lets get the value of new alarm time
  let startTime = newAlarm.value;

  // Lets coverts these minutes to seconds so it's easy to manipulate
  let time = startTime * 60;

  setInterval(timeRemaining, 1000);
  ////=== Function to update the remaining time  ===///

  function timeRemaining() {
    // lets get the minutes by diving the seconds by 60
    // Math.floor is used to get the lowest number without decimal.
    let minutes = Math.floor(time / 60);

    // lets get the seconds
    let seconds = time % 60;

    // if seconds are < 10 then we want 0 + seconds else only seconds
    //seconds = seconds < 10 ? "0" + seconds : seconds;

    // Lets add the updating time to our countdown timer
    countDown.innerHTML = `Time Remaining: ${minutes}:${seconds}`;

    // Lets play a sound if time remaining is 0
    // We can make the sound happen by using `playAlarm()`.
    if (time === 0) {
      countDown.innerHTML = `Time Remaining: 00:00`;
      playAlarm();

      // Lets also add some flashing colors at this point :)
      let rainbowColors = [
        "red",
        "orange",
        "yellow",
        "green",
        "lightBlue",
        "violet",
      ];
      let colorIndex = 0;
      function displayColors() {
        // let clock = document.querySelector(".center");

        // clock.style.backgroundColor = rainbowColors[colorIndex];

        document.querySelector(".centre").style.padding = "20px";
        document.querySelector(".centre").style.borderRadius = "20px";
        document.querySelector(".centre").style.backgroundColor =
          rainbowColors[colorIndex];
        colorIndex = (colorIndex + 1) % rainbowColors.length;
        alarmTimeOut = setTimeout(displayColors, 1000);
      }
      displayColors();
    } else if (time > 0) {
      time--;
    }
  }
}
/////==unable to make the stop alarm button work==//

// function stopAlarm() {
// let stopButton = document.getElementById("stop");
// //   stopButton.addEventListener("click", () => {
// //     clearTimeout(alarmTimeOut);
// //   });
// // }
// stopButton.addEventListener("timeupdate", setAlarm, false);
// stopButton.removeEventListener("timeupdate", setAlarm);

///======////

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
