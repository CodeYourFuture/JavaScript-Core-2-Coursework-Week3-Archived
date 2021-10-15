function setAlarm() {
  let startAlarm = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");
  let startTime = startAlarm.value;

  let time = startTime * 60;

  setInterval(countdown, 1000);

  function countdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? `0` + seconds : seconds;
    timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;

    if (time === 0) {
      timeRemaining.innerHTML = `Time Remaining: 00:00`;
      playAlarm();
      let colours = ["blue", "lilac", "pink", "purple", "orange"];
      let index = 0;
        function changeColour() {
          document.querySelector(".centre").style.backgroundColor =
            colours[index];
          index = (index + 1) % colours.length;
        setTimeout(changeColour, 100);
      }

      changeColour();

    } else if (time > 0) {
      time--;
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
