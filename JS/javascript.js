/*-------------------------------------------Image Carousel--------------------------------------------------*/

const carouselSlide=document.querySelector('.carousel-slide'); 
const carouselImages = document.querySelectorAll('.carousel-slide img'); 
const container = document.querySelector('.carousel-container')


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

/*-------------------------------------------welcome text--------------------------------------------------*/
const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement; 
    this.words = words; 
    this.txt = ''; 
    this.wordIndex = 0; 
    this.wait = parseInt(wait, 10); 
    this.type(); 
    this.isDeleting = false; 
}

//Type Method 
TypeWriter.prototype.type = function(){
    //Current index of word 
    const current = this.wordIndex % this.words.length; 
    //Get full text of current word 
    const fullTxt = this.words[current]; 

    //Check if deleting 
    if (this.isDeleting){
        //Remove character
        this.txt = fullTxt.substring(0, this.txt.length-1)
    }else{
        //Add character 
        this.txt = fullTxt.substring(0, this.txt.length+1)
    }

    //Insert txt into element 
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; 

    //Initial Type Speed 
    let typeSpeed = 260; 

    if(this.isDeleting){
        typeSpeed /=2; 
    }

    //If Word is complete 
    if (!this.isDeleting && this.txt === fullTxt){
        //make a pause at end
        typeSpeed = this.wait; 
        //set delete to true 
        this.isDeleting = true; 
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false; 
        //Move to next word 
        this.wordIndex++; 
        //Pause before start typing
        typeSpeed = 500; 
    }

    setTimeout(()=>this.type(), typeSpeed)
}

//Init on DOM Load 
document.addEventListener('DOMContentLoaded', init); 

//Init App 
function init(){
    const txtElement = document.querySelector('.text-type'); 
    const words = JSON.parse(txtElement.getAttribute('data-words')); 
    const wait = txtElement.getAttribute('data-wait'); 
    //Init Typewriter
    new TypeWriter(txtElement, words, wait); 
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

/*-------------------------------------------menu --------------------------------------------------*/

