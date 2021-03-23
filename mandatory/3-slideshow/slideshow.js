// Write your code here
const statusDogs = {
    100: `"images/100.jpg"`,
    200: `"images/200.jpg"`,
    201: "images/201.jpg",
    202: "images/202.jpg",
    203: "images/203.jpg",
    204: "images/204.jpg",
    206: "images/206.jpg",
    207: "images/207.jpg",
    208: "images/208.jpg",
    226: "images/226.jpg",
    300: "images/300.jpg",
    301: "images/301.jpg",
    302: "images/302.jpg",
    303: "images/303.jpg",
    304: "images/304.jpg",
    305: "images/305.jpg",
    306: "images/306.jpg",
    307: "images/307.jpg",
    308: "images/308.jpg",
    400: "images/400.jpg",
    401: "images/401.jpg",
    402: "images/402.jpg",
    403: "images/403.jpg",
    404: "images/404.jpg",
    405: "images/405.jpg",
    406: "images/406.jpg",
    407: "images/407.jpg",
    408: "images/408.jpg",
    409: "images/409.jpg",
    410: "images/410.jpg",
    411: "images/411.jpg",
    412: "images/412.jpg",
    413: "images/413.jpg",
    414: "images/414.jpg",
    416: "images/416.jpg",
    417: "images/417.jpg",
    418: "images/418.jpg",
    420: "images/420.jpg",
    422: "images/422.jpg",
    423: "images/423.jpg",
    424: "images/424.jpg",
    425: "images/425.jpg",
    426: "images/426.jpg",
    429: "images/429.jpg",
    431: "images/431.jpg",
    444: "images/444.jpg",
    450: "images/450.jpg",
    451: "images/451.jpg",
    494: "images/494.jpg",
    500: "images/500.jpg",
    501: "images/501.jpg",
    502: "images/502.jpg",
    503: "images/503.jpg",
    504: "images/504.jpg",
    506: "images/506.jpg",
    507: "images/507.jpg",
    508: "images/508.jpg",
    509: "images/509.jpg",
    510: "images/510.jpg"
}

// Create selectors
const body = document.querySelector("body");
const dogImage = document.getElementsByTagName("img");
const backSlideBtn = document.getElementById("backSlideBtn");
const forwardSlideBtn = document.getElementById("forwardSlideBtn");

// Tracks status dog number
let statusDogCounter = 0;

let objectValuesLength = Object.values(statusDogs).length;

// Returns the image for the status Dog we are currently up to
function trackStatusNumber(statusDogs) {
  return Object.values(statusDogs)[statusDogCounter];
};

// When the back slide button is clicked, call the function slideBack
backSlideBtn.addEventListener("click", slideBack);

// Moves to previous image
function slideBack() {
    statusDogCounter --;
    if (statusDogCounter < 0) {
        statusDogCounter === (objectValuesLength-1);
    }
    dogImage.src= `${trackStatusNumber(statusDogs)}`;
}

// When the forward slide button is clicked, call the function slideForward
forwardSlideBtn.addEventListener("click", slideForward);

// Moves to next image
function slideForward() {
    statusDogCounter ++;
    if (statusDogCounter > (objectValuesLength-1)) {
        statusDogCounter === 0;
    }
    dogImage.src= `${trackStatusNumber(statusDogs)}`;
}