// Write your code here
imgArry =[
  {
    link:'https://images.unsplash.com/photo-1627440265279-2e8dc70571e1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    alt :'brown sand dunes during day time'
  },
  {
    link:'https://images.unsplash.com/photo-1582675002716-5f953d174ecb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    alt:'white ice on blue water'
  },
  {
    link:'https://images.unsplash.com/photo-1627253399594-01caae486b0e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    alt:'brown bird on tree branch'
  },
  {
    link:'https://images.unsplash.com/photo-1626810040474-d93c7f74f75d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    alt:'white bird flying over the river'
  },
  {
    link:'https://images.unsplash.com/photo-1626800349607-773f9a7b105c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    alt:'forest near to sea'
  }
];
let index = 0;
function nextPic(){
  index = (index +1)%imgArry.length;
  return imgArry[index];
}
function backPic (){
  if(index === 0){
    index = imgArry.length -1;
  } else {
    index --;
  }
  return imgArry[index];
}
const img = document.getElementById('slide');//i declared global scope because every time i will call the img

//FORWARD BUTTON !!>>> i didn't use arrow func, because for aoto forward i will use the same function
document.getElementById('forward').addEventListener('click',forward);

function forward(){
  const newImage = nextPic();
  img.src = newImage.link;
  img.alt =newImage.alt;
}

//BACK BUTTON >>> again i didn't use arrow func for the same reason
document.getElementById('back').addEventListener('click',back);
function back(){
  const newImage = backPic();
  img.src = newImage.link;
  img.alt =newImage.alt;
}





let globalInterval;// for stop button, i declare global scope because i will use for every function

//AUTO FORWARD
document.getElementById('autoForward').addEventListener('click',()=>{
  let autoSlideInterval =document.getElementById('interval').value;//EXTRA
  stop();//if there is another auto forward or autoback, stop it
  globalInterval= setInterval(forward, autoSlideInterval);//i call the forward() funcktion
});


//AUTO BACK
document.getElementById('autoBack').addEventListener('click',()=>{
  let autoSlideInterval =document.getElementById('interval').value;//EXTRA
  stop();//if there is another auto forward or autoback,stop it
  globalInterval= setInterval(back, autoSlideInterval);//i call the back() funcktion
 });


 //STOP
 document.getElementById('stop').addEventListener('click',stop);

function stop (){
  clearInterval(globalInterval);//stop interval
}