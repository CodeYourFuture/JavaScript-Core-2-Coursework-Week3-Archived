function setAlarm() {
  const bodyEl = document.getElementsByTagName("body");
  const startTime = document.getElementById("alarmSet").value;
  let time = startTime * 60;

  setInterval(countdown, 1000);

  function countdown() {
    const timeRemaining = document.getElementById("timeRemaining");
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? `0` + seconds : seconds;
    timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
    time--;

    if (timeRemaining === 0) {
      playAlarm();
      let colours = ["blue", "lilac", "pink", "purple", "orange"];
      let index = 0;
      function changeColour() {
        bodyEl.style.backgroundColor = colours[index];
        index = (index + 1) % colors.length;
      }
      setTimeout(changeColour, 100);
    }
  }
}

setAlarm(); //Timer is glitching out and I can't figure out why.

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
