function setAlarm() {
  //stores input elem
  let inputField = document.getElementById("alarmSet");

  //stores h1 elem, adds span elem in h1 using .innerHTML
  let timeDisplay = document.querySelector("#timeRemaining");
  timeDisplay.innerHTML = "Time Remaining: 00:<span id = 'timeSpan'></span>";

  //store span elem
  let spanEl = document.querySelector("#timeSpan");  
  spanEl.innerHTML = inputField.value;  //span renders input field value
  
  //setInterval reduces span's innerHTML value by 1 each second
  setInterval(function() {
    spanEl.innerHTML--; 
    //when span's innerHTML renders as '0', call playAlarm function
    if (spanEl.innerHTML === '0') {
      playAlarm();
    }
  }, 1000);

  //Tried adding 0 before numbers less than 10, but would render NAN as spanEl's innerHTML after timer goes into negative numbers: 
  // let startTimer = setInterval(function () {
  //   // spanEl.innerHTML--;
  //   if (spanEl.innerHTML < 11) {
  //     spanEl.innerHTML = `0${spanEl.innerHTML - 1}`;
  //   } else {
  //     spanEl.innerHTML--;
  //   }

  //   if (spanEl.innerHTML === "00") {
  //     playAlarm();
  //   }
  // }, 1000); //subtracts 1 from spanEl.innerHTML's value every second
}
  

 


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
// console.log(audio);

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

// playAlarm();