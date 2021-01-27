function setAlarm() {
  let counterEl = document.getElementById("timeRemaining");
  let inputFieldEl = document.getElementById("alarmSet").value;
 
  
  let timeInMinutes = Math.floor(inputFieldEl / 60);
  let timeInSeconds = inputFieldEl % 60;

  let timeInterval = setInterval(() => {
    if (timeInMinutes > 0 && timeInSeconds === 0) {
      timeInMinutes--;
      timeInSeconds = 59;
    }
    if (timeInSeconds === 0) {
      clearInterval(timeInterval);
      audio.play();
      document.querySelector(".centre").style.backgroundColor = "red";
    }

    counterEl.textContent = `Time Remaining: ${timeInMinutes} : ${timeInSeconds}`;
    timeInSeconds--;
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