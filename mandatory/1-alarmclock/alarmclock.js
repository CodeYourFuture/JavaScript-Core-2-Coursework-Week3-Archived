/*# Make an Alarm Clock

In this folder you will find the basic setup of an alarm clock.

You should only change code in the `alarmclock.js` file.

## How the clock should work

When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

Every one second the title should count down by one.

When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

You can stop the alarm sound by pressing the `Stop Alarm` button.*/
function setAlarm() {
  var clickAlarmBtn = document.getElementById("set");
  clickAlarmBtn.addEventListener("click", function() {
    var inputNumber = document.getElementById("alarmSet").type;
    
  })
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
