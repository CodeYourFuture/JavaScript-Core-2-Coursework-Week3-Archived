// Write your code here
let images = [
    'https://images.unsplash.com/photo-1611095777904-271a798ed635?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    'https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80',
    'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=793&q=80'
]

let x = document.getElementById("slideImge")
let counter = 0; 
let counterContent = document.getElementById("counter")
 counterContent.textContent = `Slide index: ${counter}`
 x.src = images[counter];
document.getElementById("forward").addEventListener("click", function(){
        if (counter === images.length - 1) {
            counter = 0 
            counterContent.textContent = `Slide index: ${counter}`
            x.src = images[counter];
        }else {
        counter++
        counterContent.textContent = `Slide index: ${counter}`
        x.src = images[counter];
        }
})

document.getElementById("back").addEventListener("click", function(){
       if (counter === 0) {
         counter = images.length;
         counter--
         counterContent.textContent = `Slide index: ${counter}`
         x.src = images[counter];
        } else{
        counter--
        counterContent.textContent = `Slide index: ${counter}`
        x.src = images[counter];
        }
})

function goBack() {
    document.getElementById("auto-back").addEventListener("click", function(){
    let num = 0
    autoBack = setInterval(function(){
        if (num === 0) {
            num = images.length;
            num--
            document.getElementById("counter").textContent = `Slide index: ${num}`
            x.src = images[num];
        }else{
        num--
        document.getElementById("counter").textContent = `Slide index: ${num}`
        x.src = images[num];
        }
    }, 1000)
})
document.getElementById("stop").addEventListener("click", function(){
    clearInterval(autoBack)
})
}
goBack()

function goForward() {
    document.getElementById("auto-forward").addEventListener("click", function(){
      let num = counter
    autoForward = setInterval(function(){
        if (num === images.length - 1) {
            num = -1
            num++
            document.getElementById("counter").textContent = `Slide index: ${num}`
            x.src = images[num];
        }else{
        num++
        document.getElementById("counter").textContent = `Slide index: ${num}`
        x.src = images[num];
        }
    }, 1000)
})
document.getElementById("stop").addEventListener("click", function(){
    clearInterval(autoForward)
})
}
goForward()

