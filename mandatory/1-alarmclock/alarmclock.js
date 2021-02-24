function setAlarm() {
    let remaining = document.getElementById("timeRemaining");
    let setter = document.getElementById("alarmSet").value;

    let minutes = Math.floor(setter / 60);
    let seconds = setter % 60;

    let timeInterval = setInterval(() => {
        if (minutes > 0 && seconds === 0) {
            minutes--;
            seconds = 59;
        }

        if (seconds === 0) {
            clearInterval(timeInterval);
            audio.play();

            let div = document.querySelector(".centre");

            function changeColour() {
                if (div.style.backgroundColor === "green") {
                    div.style.backgroundColor = "yellow";
                } else {
                    div.style.backgroundColor = "blue";
                }
            }

            setInterval(changeColour, 500);
        }

        remaining.textContent = `Time Remaining: ${minutes} : ${seconds}`;
        seconds--;
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

function playAlarm() {
    audio.play();
}

function pauseAlarm() {
    audio.pause();
}

window.onload = setup;