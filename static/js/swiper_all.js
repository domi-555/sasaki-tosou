// JavaScript Document
//Slider1
const swiper = new Swiper ('.swiper-container', {
    effect: 'slide',
    loop: false,
    pagination:{
        el:".swiper-pagination",
        type:"bullets",
        clickable:"true"
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//Slider2
const swiper2 = new Swiper ('.swiper-container2', {
    loop: false,
    pagination:{
        el:".swiper-pagination",
        type:"bullets",
        clickable:"true"
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


