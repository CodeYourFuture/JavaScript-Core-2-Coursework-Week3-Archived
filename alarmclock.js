let countdown;
let header;
let myVar;

function setAlarm() {
  header = document.getElementById("timeRemaining");
  //console.log(header.innerText);
  let time = document.getElementById("alarmSet");
  //console.log(time.value);
  countdown = time.value * 1000;
  myVar = setInterval(myTimer, 1000);
}

function convertSeconds(s){
  var min = floor(s/60);
  var sec = s % 60;
  return nf(min,2) + ":" + nf(sec, 2);

  var params = getURLParams();
  console.log(params);
  if (params.minute){
    var min = params.minute;
    timeleft = min * 60;
  }

}

function myTimer() {
  countdown = countdown - 1000;
  //console.log("timesLeft" + countdown);
  let secondsRemaining = countdown / 1000;
  let timeText = "";
  if (secondsRemaining < 10) {
    timeText = "0" + secondsRemaining;
  }
  else{
    timeText = secondsRemaining;
  }
  header.innerText = "Time Remaining " + timeText;
  if (countdown === 0) {
   // playAlarm();
   console.log("ALARM");
    clearInterval(myVar);
  }
}

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   var d = new Date();
//   var t = d.toLocaleTimeString();
//   document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
//   clearInterval(myVar);
// }

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

function addZero(time) {
  return time < 10 ? "0" + time : time;
}

