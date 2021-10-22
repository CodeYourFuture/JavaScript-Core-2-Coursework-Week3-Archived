//declaring a global variable for color change, will use later to set timeout for when the alarm is 0
let color_change_timeout;

//declaring the function
function setAlarm() {
  event.preventDefault();

  //selecting the user input by id
  let setAlarm = document.querySelector("#alarmSet");

  //putting the value of the user entry into a time variable
  let time = setAlarm.value;

  //selecting the section displaying text for countdown
  let timeRemaining = document.querySelector("#timeRemaining");

  //setting the interval for the countdown, so I can update it with the user chosen time (in seconds) and have it count down until it reaches zero, that will trigger the alarm sound and color change
  const countdown = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    //don't forget to floor the outcome of the time division
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    //making sure the text display is showing properly, while accounting for instances where seconds chosen by user are less than 10
    //if this line was ommitted, on line 27, the code will still work, but any user input less than 10 will have a nasty display countdown
    seconds = seconds < 10 ? `0` + seconds : seconds;
    timeRemaining.textContent = `Time Remaining: ${minutes}: ${seconds}`;
    //so when time reaches zero, I want to do some actions
    if (time == 0) {
      //update the text content back to its original
      timeRemaining.textContent = `Time Remaining: 00:00`;
      //play the alarm sound (too loud :p)
      playAlarm();
      //and get a bit freaky with disco colors! PARTAYY!!
      //note this is similar to the exercise we did in class with codepen
      let colors = ["red", "green", "yellow", "purple", "pink"];
      let index = 0;

      //function definition, sorry for the bad choice in colors!
      function changeColor() {
        document.querySelector(".centre").style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
        color_change_timeout = setTimeout(changeColor, 100);
      }
      //ofcourse we need to call the function
      changeColor();
      //and ofcourse, we need to clear the interval
      clearInterval(countdown);
    } else if (time > 0) {
      //over here, I am saying that at any other incident where time > 0, keep decreasing it
      time--;
    }
  }
}

// let index = 0;

// changeColor();

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    console.log("test");
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  document.querySelector(".centre").style.backgroundColor = "white";
  clearTimeout(color_change_timeout);
}

window.onload = setup;
