

function setAlarm() {
  var time = document.getElementById("alarmSet").value;
  setInterval(function(){
    const minutes = Math.floor(time/60);
    let sec = time%60;
    var timeRemaining = document.getElementById("timeRemaining");
    timeRemaining.innerHTML = `Time Remaining: ${minutes}: ${sec}`;
    if(time<=0){
      document.body.style.backgroundColor = "green";
      playAlarm();//i don't know why the sound is not playing.
    }else{
      time--;
    }
  }, 1000)
  return;
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
