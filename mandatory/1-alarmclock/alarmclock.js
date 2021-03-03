/*
## How the clock should work

When you click the `Set Alarm` button the counter at the top of the screen
should change to the number you entered in the `input` field. 
For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

Every one second the title should count down by one.

When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

You can stop the alarm sound by pressing the `Stop Alarm` button.
*/


function setAlarm() {
  
  let timeRemaining = document.getElementById("timeRemaining");
  let input = document.getElementById("alarmSet").value;
   
  let myTimer = setInterval(countDown, 1000);

    function countDown() {
      if (input < 0) {
          playAlarm();
          document.body.style.backgroundColor = "#add8e6";
          clearInterval(myTimer);
          
        } else {
          let minutes = Math.floor(input / 60);
          let seconds = input % 60;
          timeRemaining.innerHTML = `Time Remaining: ${minutes}: ${seconds}`;
          input -= 1;
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
