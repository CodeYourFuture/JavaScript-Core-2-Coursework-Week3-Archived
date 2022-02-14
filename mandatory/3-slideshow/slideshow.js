// Write your code here

let imagesShow = ["https://cyf-image-carousel.netlify.app/sample-images/kitten1.jpg" ,"https://cyf-image-carousel.netlify.app/sample-images/kitten3.jpg" , "https://cyf-image-carousel.netlify.app/sample-images/kitten2.jpg" ];

const display = document.getElementById ("main");
const creatImage = document.createElement("img");

 let customimage = creatImage.src;
 let imageIndex = 0; 
 let index;

 display.appendChild(creatImage);
  customimage = imagesShow[0];

function slides( arr){

 const getButton = document.querySelector("button");
 getButton.addEventListener("click",(e)=>{
     if(e.target.value === "back"){
        index = imageIndex -1;
        if(index  < 0){
            index =1;
        }
     }else if(e.target.value === "forward"){
        index = imageIndex +1;
        if(index > imagesShow.length){
            index = imagesShow.length-1;
        }
     }else if (e.target.value === "autoForward") {
          index++;
           if (index > imagesShow.length) {
             index = imagesShow.length - 1;
           }
     } else (e.target.value === "autoBack") {
          index--;
           if (index < 0) {
             index = imagesShow.length - 1;
           }
     }
    

    });
    
    

}

 

 
 

 