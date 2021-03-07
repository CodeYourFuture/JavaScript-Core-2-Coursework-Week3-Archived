function setAlarm() {
  let setTime = document.querySelector("#alarmSet");

  let = timeRemainingValue = document.querySelector("#timeRemaining");
  timeRemainingValue.innerHTML = "Time Remaining: <span>00:00</span>";

  let time = document.querySelector("span");
  time.innerText = timeConvert(setTime.value);

  function timeConvert(value) {
    let number = +value;

    let minutes = Math.floor(number / 60);
    let seconds = number % 60;

    minutes = (minutes < 10 ? "0" : "") + minutes;                                  //We created the two conditions, so when setTime.value = 60 seconds or more,
    seconds = (seconds < 10 ? "0" : "") + seconds;                                   //we show the "time remaining" in 01: 00 format rather than 1: 00.                            

    return `${minutes}:${seconds}`;
  }

  let getSecondsRightDigit = +time.innerText.slice(-1);                             //as an example, this will give us the number inside this bracket 00:0[0]
  let getSecondsLeftDigit = +time.innerText.slice(-2, -1);                           //as an example, this will give us the number inside this bracket 00:[0]0
  let getMinutesRightDigit = +time.innerText.slice(1, -3);                          //as an example, this will give us the number inside this bracket 0[0]:00
  let getMinutesLeftDigit = +time.innerText.slice(0, -4);                           //as an example, this will give us the number inside this bracket [0]0:00

  let timer = setInterval(startCountDown, 1000);

  function startCountDown() {

    if (+time.innerText.slice(0, -3) < 99) {                                        //We created this condition, so for example when minutes is less than 99,

      if (getSecondsRightDigit > 0) {                                               //and we have a value of 08:00 inside the input, when the count down is on, we want to count down in this format 07:59 and not this format 7:59

        getSecondsRightDigit--
      }
      else if (getSecondsRightDigit === 0 && getSecondsLeftDigit > 0) {

        getSecondsLeftDigit--
        getSecondsRightDigit = 9;
      }
      else if (getSecondsRightDigit === 0 && getSecondsLeftDigit === 0 && getMinutesRightDigit > 0 && getMinutesLeftDigit === 0) {

        getMinutesRightDigit--
        getSecondsRightDigit = 9;
        getSecondsLeftDigit = 5;
      }
      else if (getSecondsRightDigit === 0 && getSecondsLeftDigit === 0 && getMinutesRightDigit === 0 && getMinutesLeftDigit > 0) {

        getMinutesLeftDigit--
        getMinutesRightDigit = 9;
        getSecondsRightDigit = 9;
        getSecondsLeftDigit = 5;
      }
      else if (getSecondsRightDigit === 0 && getSecondsLeftDigit === 0 && getMinutesRightDigit > 0 && getMinutesLeftDigit > 0) {

        getMinutesRightDigit--;
        getSecondsRightDigit = 9;
        getSecondsLeftDigit = 5;
      }
      else if (getSecondsRightDigit === 0 && getMinutesRightDigit === 0) {

        clearInterval(timer);
        playAlarm();
        let randomColour = setInterval(colour, 500);

        function colour() {
          let x = Math.floor(Math.random() * 256);
          let y = Math.floor(Math.random() * 256);
          let z = Math.floor(Math.random() * 256);

          document.querySelector("body").style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
        }

        document.getElementById("stop").addEventListener("click", () => {
          clearInterval(randomColour);
        });

      }

      time.innerText = `${getMinutesLeftDigit}${getMinutesRightDigit}:${getSecondsLeftDigit}${getSecondsRightDigit}`;

    } else {                                                                                 //This condition when it's in this format e.g 123:00

      let getMinutes = +time.innerText.slice(0, -3)

      if (getSecondsRightDigit > 0) {
        getSecondsRightDigit--
      }
      else if (getSecondsRightDigit === 0 && getSecondsLeftDigit > 0) {

        getSecondsLeftDigit--
        getSecondsRightDigit = 9;
      }
      else if (getSecondsRightDigit === 0 && getSecondsLeftDigit === 0 && getMinutes > 0) {

        getMinutes--
        getSecondsRightDigit = 9;
        getSecondsLeftDigit = 5;
      }
      else if (getSecondsRightDigit === 0 && getMinutesRightDigit === 0) {

        clearInterval(timer);
        playAlarm();
        let randomColour = setInterval(colour, 500);

        function colour() {
          let x = Math.floor(Math.random() * 256);
          let y = Math.floor(Math.random() * 256);
          let z = Math.floor(Math.random() * 256);

          document.querySelector("body").style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
        }

        document.getElementById("stop").addEventListener("click", () => {
          clearInterval(randomColour);
        });
      }

      time.innerText = `${getMinutes}:${getSecondsLeftDigit}${getSecondsRightDigit}`;

    }
  }

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
