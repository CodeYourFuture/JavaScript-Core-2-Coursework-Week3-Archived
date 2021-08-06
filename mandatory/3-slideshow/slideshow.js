// Write your code here
const cl=console.log;
const image1src = "https://images.unsplash.com/photo-1582243310179-c628e101c0e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const image2src = "https://www.rd.com/wp-content/uploads/2019/10/shutterstock_183601208-scaled.jpg";
const image3src = "https://images.unsplash.com/photo-1543428672-1f233e75eb5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
const image4src = "https://images.unsplash.com/photo-1584380029869-3f245809edae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
const image5src = "https://nationalinterest.org/sites/default/files/styles/desktop__1260_/public/main_images/6162628241_88b58af908_o.jpg?itok=SrjsHajc";


let tacticalAnimalObject = [
    {src:image1src},
    {src:image2src},
    {src:image3src},
    {src:image4src},
    {src:image5src},
];


//This pulls the input from timingsSelect and then sets this to the 
//global scope, so that it can then later be used by the button functions
const timingsSelect = document.getElementById("timingsSelect");
let timingValue = timingsSelect.value;
timingsSelect.addEventListener("click", function(){
    timingValue = timingsSelect.value;
    cl(timingValue)
})


const autoBackButton = document.getElementById("autoBackButton");
const backButton = document.getElementById("backButton");
const stopButton = document.getElementById("stopButton");
const forwardButton = document.getElementById("forwardButton");
const autoForwardButton = document.getElementById("autoForwardButton");
const displayCurrentImageIndex = document.getElementById("h2CurrentIndex");

// This boolean is very important as it is used to stop autoForward and 
//autoBack from running at the same time...

//SEE ATTACHED FILE 'alternativeSolution.js' FOR A MUCH EASIER AND 
//CLEANER SOLUTION THAN MY ONE !!!!!
let autoRunBoolean = false;

// These are the functions for the 'forward' and 'back' button on the 
// screen. They work by listening for a click, and then when the click 
// event happens they then pass their logic to the basicLogic function 
// (forward = +1 / back = -1 to the current image index).
backButton.addEventListener("click", function(){
    cl("backButton : output -1")
    basicLogic(-1);
    
})
forwardButton.addEventListener("click", function(){
    cl("forwardButton : output +1")
    basicLogic(1);
})


//The AutoForward and AutoBack buttons work by listening for a click,
//and then passing their logic to the autoRunFunction. It then changes
//the autoRunBoolean to true so that the autoRunFunction will know if 
//an autoRun is already going. 
//SEE ATTACHED FILE 'alternativeSolution.js' FOR A MUCH EASIER AND 
//CLEANER SOLUTION THAN MY ONE !!!!!
autoBackButton.addEventListener("click", function(){
    cl("autoBackButton")
    cl("autoBackButton Boolean Start value :" + autoRunBoolean)

    autoRunFunction(-1,timingValue);
    autoRunBoolean = true;
})
autoForwardButton.addEventListener("click", function(){
    cl("AutoForwardButton")
    autoRunFunction(1,timingValue);
    autoRunBoolean = true;

})

//This autoRunFunction takes the input from the above 2 functions, and 
//then uses the setInterval method to send the above functions logic 
//to the basicLogic function. This will trigger the photos to change 
//based on the timings set in the timings variable, and will be using
//the logic from whichever auto button was pressed.
function autoRunFunction(basicLogicInput,timings) {
   
    cl(window.event);
    
    var setIntervalVar = setInterval(function(){ basicLogic(basicLogicInput); }, timings)
    
    cl("afterSetIntervalBoolean : " + autoRunBoolean)

    // These event listeners will trigger when the autoRunFunction is 
    // already running, and will stop two setInterval methods from 
    // running at the same time.  
    autoBackButton.addEventListener("click", function(){
        cl("autoBackRunBoolean : " + autoRunBoolean)
        if (autoRunBoolean === true){
        clearInterval(setIntervalVar);
        autoRunBoolean = true;
        }
    });
    autoForwardButton.addEventListener("click", function(){
        cl("autoForwardRunBoolean : " + autoRunBoolean)
        if (autoRunBoolean === true){
        clearInterval(setIntervalVar);
        autoRunBoolean = true;
        }
    });

    // Below is the stop button which will stop an autoRun and change 
    //the autoRunBoolean accordingly
    stopButton.addEventListener("click", function(){
        cl("stopPressed ")
        clearInterval(setIntervalVar);
        autoRunBoolean = false;
    })
}  


// This function sets out the basic logic for the slideshow. It is based
// on the index number of the current image displaying on screen. It allows
// for the the last image to have it's index increased by 1, and then 
// become index 0 , and for the first image to have its index -1 and then
// become the last image. 
function basicLogic (changeToIndex) {
    const currentImage = document.getElementById("currentImage");
    var currentImageIndex = 0;

    for (let index = 0; index < tacticalAnimalObject.length; index++) {
        const currentArrayObject = tacticalAnimalObject[index];
        if (currentImage.src === currentArrayObject.src){
            //cl(currentArrayObject + " " + index);
            currentImageIndex = index;
        }
    }
    cl("current index : " + currentImageIndex);
    currentImageIndex += changeToIndex;
    if (currentImageIndex < 0){
        currentImageIndex = tacticalAnimalObject.length-1;
    } else if (currentImageIndex === tacticalAnimalObject.length){
        currentImageIndex = 0;
    }
    cl("final index : " + currentImageIndex);
    //cl("AutoRunBoolean : " + autoRunBoolean)
    displayCurrentImageIndex.innerText = currentImageIndex;

    currentImage.src = tacticalAnimalObject[currentImageIndex].src

}
