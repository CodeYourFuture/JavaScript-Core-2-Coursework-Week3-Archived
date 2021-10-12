let intervalId = null;
let backgroundChangingId = null;
let isPaused= false ;

function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;
  // setInterval has an id ,beacuse I want to clear the interval functionality. so I need to get access to that id
  intervalId = setInterval(() => {
    if(!isPaused){
      updateAlarm(inputValue);
      inputValue--;
      if (inputValue < 0) {
        clearInterval(intervalId);
        playAlarm();
        // setTimeout(pauseAlarm,2000)
        backgroundChangingId = setInterval(changeColor, 500);
      }
    }
  }, 1000);
}

let color = "plum";
function changeColor() {
  document.body.style.backgroundColor = color;
  color = color === "plum" ? "white" : "plum";
  // if(color=== "plum"){
  //   color="white"
  // }else  {
  //   color="plum"
  // }
}

function updateAlarm(value) {
  console.log(value);
  const title = document.getElementById("timeRemaining");
  let seconds = value % 60;
  let minutes = Math.floor(value / 60);
  let minZero = "";
  let secondZero = "";
  if (minutes < 10) {
    minZero = 0;
  }
  if (seconds < 10) {
    secondZero = 0;
  }
  title.innerText = `Time Remaining: ${minZero}${minutes}:${secondZero}${seconds}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pauseAlarm();

  });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  audio.pause();
  clearInterval(backgroundChangingId);
  document.body.style.backgroundColor = "plum";
}

// inorder to my count down stop and restart,I need to tell my interval function
// when to start.I can set a flag that if my flag is true ,count it down,else no action.
function pauseAlarm(){
  isPaused = !isPaused 
}

window.onload = setup;
