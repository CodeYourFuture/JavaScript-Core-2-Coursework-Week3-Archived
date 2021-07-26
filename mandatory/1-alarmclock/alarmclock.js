//Acesssing Elements In The DOM
let timeRemaining = document.getElementById('timeRemaining');
let alarmSet = document.getElementById('alarmSet');
let setButton = document.getElementById('set');
let stopButton = document.getElementById('stop');
let warningText = document.getElementById('warning');

//Set Alarm And Count Down Function
const setAlarm = () => {
  setButton.addEventListener('click', (e) => {
    e.preventDefault();
    let timeValue = alarmSet.value;

    //Checking if the input is below 1 min (60sec)
    if (timeValue < 60) {
      timeRemaining.innerText = `Time Remaining: 00m:${timeValue}s`;
      
      let countDown = setInterval(() => {
          if (timeValue > 0) {
            timeValue--
            timeRemaining.innerText = `Time Remaining: 00m:${timeValue}s`;
          }

          else if (timeValue === 0) {
            clearInterval(countDown);
            playAlarm(); 
          }
      }, 1000);
    }

    //Checking if input is above 60 sec and then calulating minuets
    else if (timeValue >= 60) {
      let minuets = Math.floor(timeValue / 60);
      let seconds = timeValue % 60;
      timeRemaining.innerText = `Time Remaining: ${minuets}m:${seconds}s`;

      let countDown = setInterval(() => {
        if (timeValue > 0) {
          timeValue--;
          let minuets = Math.floor(timeValue / 60);
          let seconds = timeValue % 60;

          if (timeValue >= 60) {
            timeRemaining.innerText = `Time Remaining: ${minuets}m:${seconds}s`;
          }

          if (timeValue < 60) {
            timeRemaining.innerText = `Time Remaining: ${minuets}m:${seconds}s`;
          }
        }

        else if (timeValue === 0) {
          clearInterval(countDown);
          playAlarm(); 
        }
    }, 1000);
    }
    
    else {
      warningText.innerText = `Hello`;
    }
  });
}

//Stop Alarm
stopButton.addEventListener('click', (e) => {
  e.preventDefault();
  pauseAlarm()
})

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
