//Write your code here
//create an array to store the image
var images=[
    "https://images.unsplash.com/photo-1568023636456-b8565e6e5211?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1519045944554-410ad39c1af8?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1444342679470-e4512355de5e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1454789591675-556c287e39e2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1615370183912-4e68cb0ac846?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1548346584-70fb79ba87e1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1600338071768-ad3aeb4da423?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1614522586497-1004752679ea?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1615439563007-f3ff629684d5?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
]
//access the DOM
let accessImage = document.getElementById('mainImage');
let accessForwardButton = document.querySelector('#forwardButton');
let accessBackwardButton= document.querySelector('#backwardButton');
let accessAutoForwardButton = document.querySelector('#auto-forwardButton');
let accessAutoBackwardButton = document.querySelector('#auto-backButton');
let accessTheStopButton = document.querySelector('#stopButton');

// set the image Counter to 0 (where it should start to slide)
let ImageCounter = 0;
//accessImage.src = images[ImageCounter];
let interval=4000; // the interval it must take for the slide to move automatically to another

function forwardButton() {
   if(ImageCounter === images.length-1){
    ImageCounter = 0;
    accessImage.src=images[ImageCounter]
   }
   else{
    ImageCounter++;
    accessImage.src=images[ImageCounter]
 
   }
    
}

function backwardButton() {
    if(ImageCounter <= 0){
        ImageCounter = images.length-1;
        accessImage.src=images[ImageCounter.length-1]
        
       }
       else{
        ImageCounter--;
        accessImage.src=images[ImageCounter]
       }
}
//Manipulate the DOM
accessForwardButton.addEventListener('click', forwardButton);
accessBackwardButton.addEventListener('click',backwardButton);

accessAutoForwardButton.addEventListener('click', function(){
    setInterval(() => {
        forwardButton();
     
    
    }, interval);
})
accessBackwardButton.addEventListener('click', function(){
    setInterval(() => {
        backwardButton();
    
    }, interval);
})
accessTheStopButton.addEventListener('click', () => {
    clearInterval(autoBackward)
    clearInterval(accessBackwardButton)
})