//Declaring a boolean to check whether stop alarm button clicked
let isStopAlarm = false;
//creating a function to set alarm and display all info on page
function setAlarm() {
  //Adding eventlistener to stop alarm button by calling pauseAlarm function
  pauseAlarm();
  // getting input field(where user enter the time) and h1 element(where we display remaining time)
  const inputSetAlarm = document.getElementById("alarmSet");
  const h1ElementTimeRemaining = document.getElementById("timeRemaining");
  // getting value set by user
  const alarmInMinutes = inputSetAlarm.value;
  // calculating time in Ms to end alarm
  const alarmInMs = alarmInMinutes * 60 * 1000;
  const initialTime = new Date();
  const initialTimeInMs = initialTime.getTime();
  const endAlarmTimeInMs = initialTimeInMs + alarmInMs;
  // creating an interval to display minutes and seconds in every second
  const intervalCountDown = setInterval(() => {
    //calculating current time, time remaining and what to display
    const currentTime = new Date();
    const currentTimeInMs = currentTime.getTime();
    const timeRemainingInMs = endAlarmTimeInMs - currentTimeInMs;
    const timeRemainingInSc = timeRemainingInMs / 1000;
    let minToDisplay = Math.floor(timeRemainingInSc / 60);
    let secToDisplay = Math.floor(timeRemainingInSc - minToDisplay * 60);
    // displaying remaining time as minute and second
    h1ElementTimeRemaining.innerText =
      "Time Remaining: " + minToDisplay + ":" + secToDisplay;
    // Calling playAlarm function and setting an interval to change background color and clearing interval when minutes and seconds are equal to 0
    if (minToDisplay === 0 && secToDisplay === 0) {
      playAlarm();
      const intervalBackgroundColor = setInterval(() => {
        //adding colors to change background color randomly
        const colors = [
          "red",
          "yellow",
          "blue",
          "orange",
          "pink",
          "green",
          "brown",
        ];
        const randomNumber = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomNumber];
       // Adding a clearInterval to stop background changing. isStopAlarm  can be assigned as true by clicking stop alarm button.
        if (isStopAlarm) {
          clearInterval(intervalBackgroundColor);
        }
      }, 1000);

      clearInterval(intervalCountDown);
    }
  }, 1000);
}
function changeBackgroundColor() {}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  document.getElementById("stop").addEventListener("click", () => {
    audio.pause();
    isStopAlarm = true;
  });
}

window.onload = setup;
