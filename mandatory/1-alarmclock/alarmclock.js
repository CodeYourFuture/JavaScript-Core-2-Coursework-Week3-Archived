//const setAlarmButton = document.querySelector("#set");
//const stopAlarmButton = document.querySelector("#stop");
const timeDisplay = document.getElementById("timeRemaining"); //<---------h1 to change
const getValue = document.getElementById("alarmSet").value; //<---------- value
let timer = getValue;

function numToTime(timer) {
  let min = Math.floor(timer / 60);
  let sec = Math.floor(timer % 60);

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  timeDisplay.innerText = `Time Remaining:${min}:${sec}`;
}

function setAlarm() {
  const body = document.body;
  const timeDisplay = document.getElementById("timeRemaining"); //<---------h1 to change
  const getValue = document.getElementById("alarmSet").value; //<---------- value
  let timer = getValue;
  numToTime(timer);

  setInterval(() => {
    timer--;
    numToTime(timer);
    if (timer < 1) {
      timeDisplay.innerText = "Game Over!";
      body.style.backgroundColor =
        body.style.backgroundColor === "white" ? "red" : "white";
      playAlarm();
    }
  }, 1000);
}
//<----------------------------------------------------extra-------------------------------------->
// const pauseButton = document.querySelector(".centre div:last-of-type");
// const button = document.createElement("button");
// button.setAttribute("id","pause");
// button.setAttribute("type","button");
// button.innerText = "Pause Alarm";
// pauseButton.appendChild(button);

// const pauseTheAlarm = document.querySelector("#pause");

// pauseTheAlarm.addEventListener("click",()=>{
//   clearInterval();
// })
//<-------------------------------------------------------------------------------------------------->
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
