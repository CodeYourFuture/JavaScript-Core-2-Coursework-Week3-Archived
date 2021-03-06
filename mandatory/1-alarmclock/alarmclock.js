function flashing(col) {
  var tmpColCheck = document.getElementsByTagName("body")[0].style.background;
  if (tmpColCheck === "silver") {
    document.getElementsByTagName("body")[0].style.background = col;
  } else {
    document.getElementsByTagName("body")[0].style.background = "silver";
  }
}
let flashingInterval;
let timeCount;
function setAlarm() {
  let timeRemainingInput = document.getElementById("timeRemaining");
  let inputElement = document.getElementById("alarmSet");
  let time = inputElement.value;
    if (time > 0) {
      let minutes = Math.floor(time / 60);
      let second = time % 60;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      second = second < 10 ? `0${second}` : second;
      inputElement.value--;
      timeRemainingInput.innerHTML = `Time Remaining ${minutes}:${second}`;
    } else if (inputElement.value === "0") {
      timeRemainingInput.innerHTML = `Time Remaining 00:00`;
      playAlarm();
       flashingInterval = setInterval(function () {
          flashing("purple");
          flashing("blue");
          flashing("red");
        }, 1);
   }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
   if(document.getElementById("alarmSet").value!="")
     timeCount = setInterval(setAlarm, 1000);
    else alert("Please enter the time!");
  });

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timeCount);
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

function pauseBtn() {
  clearInterval(timeCount);
  clearInterval(flashingInterval);
}

window.onload = setup;
