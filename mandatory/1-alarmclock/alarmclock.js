function setAlarm() {

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
  else {secSpan.innerHTML = inputField.value} //span renders input field value
  

  //setInterval reduces span's innerHTML value by 1 each second
  setInterval(function () {
     secSpan.innerHTML--;

    //ensures min and sec spans countdown and change accurately
    if (minSpan.innerHTML >= '01' && secSpan.innerHTML === '-1' ) {
     secSpan.innerHTML = "59";
     minSpan.innerHTML--;
    }

    //when span's innerHTML renders as '0', call playAlarm function
   else if ((minSpan.innerHTML === "00" && secSpan.innerHTML === "0") || (minSpan.innerHTML === "0" && secSpan.innerHTML === '0')) {
      playAlarm();
    }
  }, 1000);

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