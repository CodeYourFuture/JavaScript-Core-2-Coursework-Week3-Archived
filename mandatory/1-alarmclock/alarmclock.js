/*
2. 
3. Work out how to update the `Time Remaining` title every second
4. When the remaining time left is 0, play the alarm sound */



function setAlarm( ring )
{
  const timeText = document.getElementById( "timeText" );
  //When the `Set Alarm` button is clicked, get the value of the input field
  const alarmSetValue = document.getElementById( "alarmSet" ).value;
  if ( isNaN( alarmSetValue ) )
  {
    alert( "invalid Time" );
    return;
  }
  
  //When you have the input field value, set the title to the correct value,
  const splitTime = alarmSetValue.split( ".", 2 );
  const min = splitTime[0];
  const sec = splitTime[1];
  const timeValue = new Date( 0, 0, 0, 0, min, sec, 0);
  timeText.innerHTML = `${ timeValue.getMinutes() }:${ timeValue.getSeconds() }`;
  const totalSecond = timeValue.getMinutes() * 60 + timeValue.getSeconds()
  const totalMilliseconds = totalSecond * 1000;
  
  setTimeout(playAlarm, totalMilliseconds);

};

function playAlarm()
{ 
  alarmSound.play
};

// DO NOT EDIT BELOW HERE

var audio = new Audio("./alarmsound.mp3");

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
