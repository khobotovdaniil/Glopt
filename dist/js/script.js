    //mobile menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu__item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
});

    //owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center:true,
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplaySpeed:1000,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
        }
    });
});