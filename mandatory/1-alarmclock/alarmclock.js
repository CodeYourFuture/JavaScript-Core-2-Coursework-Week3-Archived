function setAlarm() {
  // //stores input elem
  // let inputField = document.getElementById("alarmSet");

  // //stores h1 elem, adds span elem in h1 using .innerHTML
  // let timeDisplay = document.querySelector("#timeRemaining");
  // timeDisplay.innerHTML = "Time Remaining: 00:<span id = 'timeSpan'></span>";

  // //store span elem
  // let spanEl = document.querySelector("#timeSpan");
  // spanEl.innerHTML = inputField.value;  //span renders input field value

  // //setInterval reduces span's innerHTML value by 1 each second
  // setInterval(function() {
  //   spanEl.innerHTML--;
  //   //when span's innerHTML renders as '0', call playAlarm function
  //   if (spanEl.innerHTML === '0') {
  //     playAlarm();
  //   }
  // }, 1000);

  //--------------------------

  //stores input elem
  let inputField = document.getElementById("alarmSet");

  //stores h1 elem, adds span elem in h1 using .innerHTML
  let timeDisplay = document.querySelector("#timeRemaining");
  timeDisplay.innerHTML =
    "Time Remaining: <span id = 'min'>00</span>:<span id = 'sec'></span>";

  //store span elem
  let minSpan = document.querySelector("#min");
  let secSpan = document.querySelector("#sec");

  if (inputField.value >= 60) {
    minSpan.innerHTML = `0${Math.floor(inputField.value / 60)}`; //span renders input field value over 60
    secSpan.innerHTML = inputField.value % 60;
  }
  else {secSpan.innerHTML = inputField.value} //span renders input field value}
  

  //setInterval reduces span's innerHTML value by 1 each second
  setInterval(function () {
     secSpan.innerHTML--;

    //for min reverting to secs 
    if (minSpan.innerHTML !== '00' && secSpan.innerHTML === '-1' ) {
      minSpan.innerHTML --;
      secSpan.innerHTML = '59'; 
  }
    // else if(minSpan.innerHTML === '0' && secSpan.innerHTML === '1' ) {

    // }

    //when span's innerHTML renders as '0', call playAlarm function
   else if ((minSpan.innerHTML === "00" && secSpan.innerHTML === "0") || (minSpan.innerHTML === "0" && secSpan.innerHTML === '0')) {
      playAlarm();
    }
  }, 1000);

  // Turn values over 60 into mins

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