function setAlarm() {
  let body = document.getElementById('body')
  // timeKeep
  let timeKeep = document.getElementById('timeRemaining')
  // input
  let input = document.getElementById('alarmSet').value;
  // set
  let set = document.getElementById('set');
  // resume
  let resume = document.getElementById('resume')
  // stop
  let stop = document.getElementById('stop');

  let seconds = input % 60;
  let minutes = Math.floor(input / 60);

  if (/^\d$/.test(minutes)){
    minutes = "0" + minutes;
  };
  if (/^\d$/.test(seconds)){
    seconds = "0" + seconds;
  };

  timeKeep.innerText = `Time Remaining: ${minutes}:${seconds}`;

  let countDown = setInterval(function(){
    if (seconds > 0) {
      seconds--;
      if (/^\d$/.test(minutes)){
        minutes = "0" + minutes;
      };
    
      if (/^\d$/.test(seconds)){
        seconds = "0" + seconds;
      };
      timeKeep.innerText = `Time Remaining: ${minutes}:${seconds}`;
    }
    if (seconds == 00 && minutes > 0){
      minutes--;
      seconds = 59;
      timeKeep.innerText = `Time Remaining: ${minutes}:${seconds}`;
    }

    document.getElementById("pause").addEventListener("click", () => {
      clearInterval(countDown);
    });

    if (seconds == 00) {
      body.style.backgroundColor = 'red';
      playAlarm()
      clearInterval(countDown);
    } 
  }, 1000);

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

document.getElementById("resume").addEventListener("click", () => {
  let timeKeep = document.getElementById('timeRemaining');
  let secs = timeKeep.textContent.slice(timeKeep.textContent.length-2, timeKeep.textContent.length );
  console.log(secs);
  let mins = timeKeep.textContent.slice(timeKeep.textContent.length-5, timeKeep.textContent.length-3);

  if(secs > 0 ){
    console.log(secs);
  }
  
  let countContinue = setInterval(function(){
    if (secs > 0) {
      secs--;
      if (/^\d$/.test(mins)){
        mins = "0" + mins;
      };
    
      if (/^\d$/.test(secs)){
        secs = "0" + secs;
      };
      timeKeep.innerText = `Time Remaining: ${mins}:${secs}`;
    }
    if (secs == 00 && mins > 0){
      mins--;
      secs = 59;
      timeKeep.innerText = `Time Remaining: ${mins}:${secs}`;
    }

    document.getElementById("pause").addEventListener("click", () => {
      clearInterval(countDown);
    });

    if (secs == 00) {
      playAlarm()
      clearInterval(countContinue);
    } 
  }, 1000);
  
})

function playAlarm() {
  audio.play();
  let body = document.getElementById('body')
  let bgFlash = setInterval(function (){
    body.style.backgroundColor = 'white';
      setTimeout(function(){
        body.style.backgroundColor = 'red';
      }, 500)
    document.getElementById('stop').addEventListener('click',() => {
      body.style.backgroundColor = 'white';
      clearInterval(bgFlash);
    })
  }, 1000 )
  
}

function pauseAlarm() {
  audio.pause();
  
}

window.onload = setup;
