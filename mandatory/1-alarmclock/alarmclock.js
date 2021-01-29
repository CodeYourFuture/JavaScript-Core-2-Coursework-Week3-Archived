function setAlarm() {
  let timeRemaining = document.getElementById("timeRemaining");
  let inputField = document.getElementById("alarmSet");
  
  let hour = inputField.valueAsNumber
  console.log(inputField)
  console.log(hour)

  if (hour >= 10) {
     timeRemaining.innerText = "Time Remaining: 00:" + hour;
  } else{
       timeRemaining.innerText = "Time Remaining: 00:0" + hour;
  }

  let counter = hour;
  
  function startCounter(counter) {
    if (counter>0) { 
      counter--;
      setTimeout(function () {
       startCounter(counter)
        console.log(counter);
      }, 1000);
      timeRemaining.innerText = "Time Remaining: 00:" + (counter < 10 ? "0" + counter : counter )
    } else {
      playAlarm();
    }
  };
  startCounter(counter)
  

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
