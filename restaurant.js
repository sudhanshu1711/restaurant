let logo = document.getElementById('logo');
const displayLogo = function() {
    logo.style.opacity = 1;
};

setTimeout(displayLogo, 1700);

let images = ['food.jpg', 'naan.jpg', 'combo.jpg'];
let body = document.querySelector('.body'); 

let currentIndex = 0;
let changeBackground = function() {
    body.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
};
setInterval(changeBackground, 2500);
ScrollReveal().reveal('.menu',{
    delay: 1000,
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-in-out',
    interval: 200,
});
let now= new Date();
let day =now.getDay();
let dish=["Vegetable Korma","Chicken Tikka Masala","Kofta","Rogan Josh","Red Lentil Curry","Indian Shrimp Curry","Authentic Saag Panner"]
let maincourse= document.getElementById('maincourse')
maincourse.innerHTML=dish[day]
ScrollReveal().reveal('.special',{
    delay: 1200,
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-in-out',
    interval: 200,
});
ScrollReveal().reveal('.branches',{
    delay: 1200,
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-in-out',
    interval: 200,
});
ScrollReveal().reveal('.india',{
    delay: 1200,
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-in-out',
    interval: 200,
});
ScrollReveal().reveal('.world',{
    delay: 1200,
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-in-out',
    interval: 200,
});
ScrollReveal().reveal('.discount',{
    delay: 1200,
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-in-out',
    interval: 200,
});