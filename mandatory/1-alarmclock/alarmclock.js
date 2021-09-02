
function setAlarm() {
  let timerId = document.getElementById('timeRemaining');
  let counter = document.getElementById('alarmSet').value;
   
  let timer = function(){
    let seconds = (counter % 60).toString().padStart(2, "0");
    let mins = Math.floor(counter / 60).toString().padStart(2, "0");
    timerId.innerHTML = `Time Remaining: ${mins}:${seconds}`;
    counter-- ;
    if(counter < 0) {
      playAlarm();
      clearInterval(window.handle);
    };
  };
  window.handle = setInterval(timer, 1000);
};

function stopAlarm(){
  clearInterval(window.handle);
  let timerId = document.getElementById('timeRemaining');
  timerId.innerHTML = `Time Remaining: 00:00`;

};

document.getElementById("stop").addEventListener("click", () => {
  stopAlarm();
});


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
