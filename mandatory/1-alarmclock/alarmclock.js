function setAlarm() {
    let counterTimeRemain = document.getElementById("timeRemaining");
    let inputTime = document.getElementById("alarmSet").value;

    let timeInMinutes = Math.floor(inputTime / 60);

    let timeInSeconds = inputTime % 60;

    let timeInterval = setInterval(() => {
        if (timeInMinutes > 0 && timeInSeconds === 0) {
            timeInMinutes--;
            timeInSeconds = 59;
        }
        if (timeInSeconds === 0) {
            clearInterval(timeInterval);
            audio.play();
            document.querySelector(".centre").style.backgroundColor = "red";
        }

        counterEl.textContent = `Time Remaining: ${timeInMinutes} : ${timeInSeconds}`;
        timeInSeconds--;
    }, 1000);

    audio.pause();
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