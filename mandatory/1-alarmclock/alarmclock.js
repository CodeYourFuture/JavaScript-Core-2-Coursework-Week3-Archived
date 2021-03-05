function setAlarm() {
  // selecting our html Elements
  let inputSet = document.querySelector("#alarmSet").value;
  let timer = document.querySelector("#digit");
  let bg = document.querySelector(".centre");

  let minutes = Math.floor(inputSet / 60);
  let seconds = inputSet % 60;

  if (inputSet === "") {
    alert("Enter some number");
    return false;
  } else {
    startCounting = setInterval(countDown, 1000);
  }

  function countDown() {
    if (minutes > 0 && seconds === 0) {
      minutes--;
      seconds = 60;
    }

    if (seconds === 0) {
      clearInterval(startCounting);
      audio.play();
      bg.style.backgroundColor = "red";
    }
    timer.innerText = ` ${minutes < 10 ? "0" : ""}${minutes} : ${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    seconds--;
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
