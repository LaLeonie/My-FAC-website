/*-------------------------------------------Image Carousel--------------------------------------------------*/

const carouselSlide=document.querySelector('.carousel-slide'); 
const carouselImages = document.querySelectorAll('.carousel-slide img'); 
const container = document.querySelector('.carousel-container')

//Media query variables; 
const large = window.matchMedia("(max-width: 1450px)"); 
const medium = window.matchMedia("(max-width: 1023px)"); 
const small = window.matchMedia("(max-width: 767px)"); 
const tiny = window.matchMedia("(max-width: 480px)"); 


//Buttons
const prevBtn = document.querySelector('#prevBtn'); 
const nextBtn = document.querySelector('#nextBtn'); 
const pause = document.querySelector('#pause'); 
const play = document.querySelector('#play')


//Counter 
let counter = 1; 

var size = carouselImages[0].clientWidth; 
carouselSlide.style.transform = 'translateX('+ (-size*counter)+'px)'; 



//slide right function
function slideRight(){
    carouselSlide.style.transition = "transform 0.6s ease-in-out"; 
    counter ++; 
    carouselSlide.style.transform = 'translateX('+ (-size*counter)+'px)'; 
}

function slideLeft(){
    carouselSlide.style.transition = "transform 0.6s ease-in-out"; 
    counter --; 
    carouselSlide.style.transform = 'translateX('+ (-size*counter)+'px)'; 
}

//button listeners
nextBtn.addEventListener('click',()=>{
    if (counter >= carouselImages.length-1) return; 
    slideRight(); 
}); 

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return; 
    slideLeft(); 
}); 

//Reset image slide when browser window size is changed 
function getTranslateX() {
    var style = window.getComputedStyle(carouselSlide);
    var matrix = new WebKitCSSMatrix(style.webkitTransform);
    console.log(matrix.m41)
  }

  function resetImages(){

  }

  //Media query change 
//   window.addEventListener('resize', location.reload()); 



//loop through images
carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none"; 
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX('+ (-size*counter)+'px)';  
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none"; 
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX('+ (-size*counter)+'px)';  
    }
}); 

//toggle automatic loop slideshow 
var count = 0; 

play.addEventListener('click',() =>{
    document.getElementById("pause").style.display = "block";
    document.getElementById("play").style.display = "none";
    slideRight(); 
    var loop = setInterval(slideRight,2000);
    pause.addEventListener('click',function(){
        clearInterval(loop); 
        document.getElementById("pause").style.display = "none";
        document.getElementById("play").style.display = "block";
    })

}); 

//keyboard events 
//left key code = 37; right key code = 39
document.onkeydown = function(event){
    switch( event.keyCode){
        case 37: 
            slideLeft(); 
            break; 
        case 39: 
            slideRight(); 
            break; 
    }
}

/*-------------------------------------------ikigai questions--------------------------------------------------*/
const need=document.querySelector('#need'); 
const good=document.querySelector('#good'); 
const love=document.querySelector('#love'); 
const paid=document.querySelector('#paid'); 

love.addEventListener('click',() =>{
    document.getElementById("love_active").style.display = "block";
    document.getElementById("love_text").style.display = "block";

    document.getElementById("need").style.display = "block";
    document.getElementById("good").style.display = "block";
    document.getElementById("paid").style.display = "block";

    document.getElementById("paid_text").style.display = "none";
    document.getElementById("need_text").style.display = "none";
    document.getElementById("good_text").style.display = "none";

    document.getElementById("love").style.display = "none";
    document.getElementById("need_active").style.display = "none";
    document.getElementById("paid_active").style.display = "none";
    document.getElementById("good_active").style.display = "none"

})

good.addEventListener('click',() =>{
    document.getElementById("good_active").style.display = "block";
    document.getElementById("good_text").style.display = "block";

    document.getElementById("need").style.display = "block";
    document.getElementById("love").style.display = "block";
    document.getElementById("paid").style.display = "block";

    document.getElementById("paid_text").style.display = "none";
    document.getElementById("need_text").style.display = "none";
    document.getElementById("love_text").style.display = "none";

    document.getElementById("good").style.display = "none";
    document.getElementById("need_active").style.display = "none";
    document.getElementById("love_active").style.display = "none";
    document.getElementById("paid_active").style.display = "none";
})

paid.addEventListener('click',() =>{
    document.getElementById("paid_active").style.display = "block";
    document.getElementById("paid_text").style.display = "block";

    document.getElementById("need").style.display = "block";
    document.getElementById("love").style.display = "block";
    document.getElementById("good").style.display = "block";

    document.getElementById("good_text").style.display = "none";
    document.getElementById("need_text").style.display = "none";
    document.getElementById("love_text").style.display = "none";

    document.getElementById("paid").style.display = "none";
    document.getElementById("need_active").style.display = "none";
    document.getElementById("love_active").style.display = "none";
    document.getElementById("good_active").style.display = "none";
})

need.addEventListener('click',() =>{
    document.getElementById("need_active").style.display = "block";
    document.getElementById("need_text").style.display = "block";

    document.getElementById("paid").style.display = "block";
    document.getElementById("love").style.display = "block";
    document.getElementById("good").style.display = "block";

    document.getElementById("good_text").style.display = "none";
    document.getElementById("paid_text").style.display = "none";
    document.getElementById("love_text").style.display = "none";

    document.getElementById("need").style.display = "none";
    document.getElementById("paid_active").style.display = "none";
    document.getElementById("love_active").style.display = "none";
    document.getElementById("good_active").style.display = "none";
})

