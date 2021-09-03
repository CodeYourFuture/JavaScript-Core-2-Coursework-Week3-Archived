// Write your code here
let imagesList = ["https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", "https://images.unsplash.com/photo-1568572933382-74d440642117?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", "https://images.unsplash.com/photo-1595729148514-bb2f497f8f54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"];
let imageDisplayed = document.querySelector("img");

var imageIndex = 1;
imageDisplayed.src = imagesList[imageIndex-1];

let nextButton = document.querySelector("#forward");
let backButton = document.querySelector("#back");
let stopButton = document.querySelector("#stop");
let autoForward = document.querySelector("#autoForward");
let autoBack = document.querySelector("#autoBack");



nextButton.addEventListener("click", function(){
    if(imageIndex >= imagesList.length){
        imageIndex = 1;
    }else{
        imageIndex++;
    }
    
    imageDisplayed.src = imagesList[imageIndex-1]
});

backButton.addEventListener("click", function(){
    if(imageIndex <= 1){
        imageIndex = imagesList.length;
    }else{
        imageIndex--;
    }
    imageDisplayed.src = imagesList[imageIndex-1]
});

let autoPlayBack;
let autoPlayForward;

autoBack.addEventListener("click",function(){
        autoPlayBack = setInterval(function(){
        if(imageIndex <= 1){
        imageIndex = imagesList.length;
        }else{
            imageIndex--;
        }
        imageDisplayed.src = imagesList[imageIndex-1]
        }, 1000);
})
stopButton.addEventListener("click", function(){
    clearInterval(autoPlayBack);
    clearInterval(autoPlayForward);
})

autoForward.addEventListener("click", function(){
    autoPlayForward = setInterval(function(){
        if(imageIndex >= imagesList.length){
        imageIndex = 1;
        }else{
            imageIndex++;
        }
        
        imageDisplayed.src = imagesList[imageIndex-1]
        }, 1000);
})



