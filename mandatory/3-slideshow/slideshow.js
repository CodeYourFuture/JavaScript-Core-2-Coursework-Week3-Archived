const images = [
    "https://images.unsplash.com/photo-1579591165250-987f23844669?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1529912626516-e58b23f44f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585768750637-ada36319a484?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
        
]

//const selectedImage = document.getElementById( "selectedImage" );
document.addEventListener( "DOMContentLoaded", () =>
{
    let galleryIndex = 0;
    const selectedImage = document.getElementById( "selectedImage" );
    selectedImage.src = images[galleryIndex]
    
    const forward = document.getElementById( "forwardButton" );
    forward.addEventListener( "click", () =>
    {
        console.log( galleryIndex );
        if ( galleryIndex <  (images.length - 1))
        {
            galleryIndex++ 
        } else
        {
            galleryIndex = 0;
        }
        
        selectedImage.src = images[galleryIndex]
    
    } );
} );

document.addEventListener( "DOMContentLoaded", () =>
{
    let galleryIndex = 0;
    const selectedImage = document.getElementById( "selectedImage" );
    selectedImage.src = images[galleryIndex]
    
    const back = document.getElementById( "backButton" );
    back.addEventListener( "click", () =>
    {
        console.log( galleryIndex );
        if ( galleryIndex <  (images.length + 1))
        {
            galleryIndex-- 
        } else
        {
            galleryIndex = 0;
        }
        
        selectedImage.src = images[galleryIndex]
    
    } );
} );


/*const forward = document.getElementById( "forward" );
forward.addEventListener( "click", () =>
{
    
} );*/