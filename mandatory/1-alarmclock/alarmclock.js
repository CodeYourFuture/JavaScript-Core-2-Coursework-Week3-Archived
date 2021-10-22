function setAlarm() {
  let input = document.querySelector("#alarmSet").value;
  let timeRemaining = document.querySelector("#timeRemaining");

  
  
  function setTimer() {
    if(input > 0){
      input --;
      let minutes = Math.floor(input/60);
      let seconds = input % 60;
      timeRemaining.innerText = `Time Remaining: 0${minutes} : 0${seconds}`;

      if (input === 0){
        playAlarm();
      }
    }

  }
  setInterval(setTimer, 1000);
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
