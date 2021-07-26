//Getting Elements By Id
let quoteText = document.getElementById('qouteText');
let authorText = document.getElementById('authorText');
let qouteButton = document.getElementById('qouteButton');

//Generate Random Qoute On Load
window.addEventListener('DOMContentLoaded', (e) => {
    pickFromArray(quotes);
    console.log(quoteObject);
    quoteText.innerText = `${quoteObject.quote}`;
    authorText.innerText = `- ${quoteObject.author}`
});

qouteButton.addEventListener('click', (e) => {
    pickFromArray(quotes);
    console.log(quoteObject);
    quoteText.innerText = `${quoteObject.quote}`;
    authorText.innerText = `- ${quoteObject.author}`
});

