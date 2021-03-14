/*
-When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field.
*/

// get the Id
function setAlarm() {
  let getHeading = document.getElementById("timeRemaining");
  let getTheInput = document.getElementById("alarmSet").value;
 
  //Manipulate the DOM
  let minutes = Math.floor(getTheInput / 60);
  let seconds =getTheInput % 60;

  let timeInterval = setInterval(() => {
    if (minutes > 0 && seconds === 0) {
      minutes--;
      seconds = 59;
    }
    if (seconds === 0) {
      clearInterval(timeInterval);
      audio.play();
      
    }

    getHeading.textContent = `Time Remaining: ${minutes} : ${seconds}`;
    seconds--;
  }, 1000);

  audio.pause();
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
