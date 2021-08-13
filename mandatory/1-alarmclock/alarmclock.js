function setAlarm() {

  let counter = document.getElementById("timeRemaining");
  let timer = document.getElementById("alarmSet").value;
  // timer = timer.value - 1;
  function counterFunc() {
    //check if seconds has reached  zero to enable alarm sound
    if (timer < 0) {
      clearInterval(countDown); //stop the setInterval method
      playAlarm();
    } else {
      //convert the seconds to time and extract the relevant portion
      //.substr(11,8) to include hr
      const timerVal = new Date(timer * 1000).toISOString().substr(14, 5); 
      counter.innerText = `Time Remaining: ${timerVal}`;
      timer -= 1; //decrement the seconds counter by one
    }
  }
  const countDown = setInterval(counterFunc, 1000);
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
