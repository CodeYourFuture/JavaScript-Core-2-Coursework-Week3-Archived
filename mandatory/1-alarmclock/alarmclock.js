function setAlarm() {
  let alarm = document.getElementById("alarmSet");
  let remainingTime = document.getElementById("timeRemaining");

  let startTime = alarm.value;

  let time = startTime * 60;

  let timeRepeat = setInterval(countDown, 1000);

  function countDown() {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    remainingTime.innerText = `Time Remaining: 0${min}:${sec}`;
    if (time === 0) {
      remainingTime.innerText = `Time Remaining: 00:00`;
      clearInterval(timeRepeat);
      playAlarm();

      let colors = ["blue", "yellow", "green"];

      let index = 0;
      function showColors() {
        index = (index + 1) % colors.length;
        document.querySelector(".centre").style.backgroundColor = colors[index];

        setTimeout(showColors, 1000);
      }
      showColors();
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

//new Date(2 * 1000).toISOString().substr(14, 5);
