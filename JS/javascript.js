const carouselSlide=document.querySelector('.carousel-slide'); 
const carouselImages = document.querySelectorAll('.carousel-slide img'); 


//Buttons
const prevBtn = document.querySelector('#prevBtn'); 
const nextBtn = document.querySelector('#nextBtn'); 
const toggle = document.querySelector('#toggle'); 
const pause = document.querySelector('#pause'); 
const play = document.querySelector('#play')
//Counter 
let counter = 1; 
const size = carouselImages[0].clientWidth; 

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