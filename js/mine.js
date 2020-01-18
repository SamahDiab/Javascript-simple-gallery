

var imgs =document.querySelectorAll(".img-item");
var lightboxContainer = document.getElementById("lightbox-container");
var lightboxItem = document.getElementById("lightbox-item");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var imgsArray = [];
var currentIndex = 0;


for(var i =0; i<imgs.length; i++){
    
    imgsArray.push(imgs[i]);
    
    imgs[i].addEventListener("click", function(e){
        
        currentIndex = imgsArray.indexOf(e.target);
        
        var imgSrc = e.target.src;
        lightboxContainer.style.display = "flex";
        lightboxItem.style.backgroundImage="url("+imgSrc+")"
        
    
    })
}

   close.addEventListener("click", function(){
         lightboxContainer.style.display = "none";
       })

  next.addEventListener("click", nextSlide)
  prev.addEventListener("click", prevSlide)

function nextSlide(){
    currentIndex++;
    if(currentIndex == imgs.length){
    currentIndex = 0;
}
  lightboxItem.style.backgroundImage="url("+imgsArray[currentIndex].src+")"
    
}

function prevSlide(){
    currentIndex--;
    if(currentIndex <0){
    currentIndex = imgs.length-1;
}
  lightboxItem.style.backgroundImage="url("+imgsArray[currentIndex].src+")"
    
}


document.addEventListener("keydown", function(e){
    
    if(e.keyCode == 39){
        nextSlide()
    }
    else if(e.keyCode == 37){
        prevSlide()
    }
    else if(e.keyCode ==27){
        lightboxContainer.style.display = "none";
    }

})
