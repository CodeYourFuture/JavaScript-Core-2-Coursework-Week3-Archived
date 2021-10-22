// Write your code here

let activeImageIndex=0;
let intervalId=null;
const imageElement=document.querySelector("img")
const backBtn=document.querySelector("#backward")
const forwardBtn=document.querySelector("#forward")
const counter=document.querySelector("#counter")
const autoForwardBtn= document.querySelector("#auto-forward")
const autoBackwardBtn=document.querySelector("#auto-backward")
const stopBtn=document.querySelector("#stop")

const images=[
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1587463272361-565200f82b33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
]

imageElement.setAttribute("src",images[activeImageIndex]);
// when page loads first picture doesnt have a back option,
// so it shuld be disabled.
backBtn.disabled= true
counter.innerText= activeImageIndex +1 

forwardBtn.addEventListener("click", ()=>{
    activeImageIndex++
    counter.innerText = activeImageIndex+1
    imageElement.setAttribute("src",images[activeImageIndex])
    if(activeImageIndex===images.length-1){
        forwardBtn.disabled = true;
    }
    // beacuse we ve already move to the next picture.
    // then make sense to enable the back button
    backBtn.disabled=false;
})

backBtn.addEventListener("click", ()=>{
    activeImageIndex--
    counter.innerText = activeImageIndex+1
    imageElement.setAttribute("src",images[activeImageIndex])
    if(activeImageIndex===0){
        backBtn.disabled = true;
    }
    forwardBtn.disabled=false;
})


autoForwardBtn.addEventListener("click",()=>{
    // 
        clearInterval(intervalId)
        intervalId= setInterval(()=>{
        activeImageIndex++
        counter.innerText= activeImageIndex +1 
        imageElement.setAttribute("src",images[activeImageIndex])
        if(activeImageIndex===images.length-1){
            forwardBtn.disabled = true
            autoForwardBtn.disabled = true;
            clearInterval(intervalId)
        }
        backBtn.disabled=false;
        autoBackwardBtn.disabled=false
    },1000)
})



autoBackwardBtn.addEventListener("click",()=>{
        clearInterval(intervalId)
        intervalId= setInterval(()=>{
        activeImageIndex--
        counter.innerText= activeImageIndex +1 
        imageElement.setAttribute("src",images[activeImageIndex])
        if(activeImageIndex===0){
            backBtn.disabled= true
            autoBackwardBtn.disabled = true
            clearInterval(intervalId)
        }
        forwardBtn.disabled=false;
        autoForwardBtn.disabled=false
    },1000)
})

stopBtn.addEventListener("click",()=>{
    clearInterval(intervalId)
})

