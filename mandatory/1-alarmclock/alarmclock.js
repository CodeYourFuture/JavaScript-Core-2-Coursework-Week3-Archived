let setAlarmBtn = document.getElementById("set");
let h1 = document.getElementById("timeRemaining");
let input = document.getElementById("alarmSet").value;

function setAlarm() {
  
  let stopBtn = document.getElementById("stop");
  let startingMinutes = 0;

   setAlarmBtn.addEventListener("click", function () {
    let min = input.value
    h1 = min * 60;
    console.log(min + "" + h1);
    var t = setInterval(updateTime, 1000);
    
    function updateTime() {
    let minutes2 = Math.floor(time / 60)
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    };
    if (min < 10) {
      minutes2 = "0" + minutes2;
    };
    h1.innerHTML = `minutes2 : seconds`;
    h1 --;
    if(h1 === 0) {
      clearInterval(t);
    }
    }
     
   
   
    // function timeEverySecond () {
    // }

  //   setInterval(timeEverySecond, 1000);
  //   h1.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
  //  })
})



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
