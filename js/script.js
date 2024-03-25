// Меню
btn = document.querySelector('.menu__btn')
menu = document.querySelector('.menu')

btn.addEventListener('click', function() {
    menu.classList.toggle('active')
})


// Баннер
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

const single_swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    direction: 'vertical',
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const single_swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: single_swiper,
    },
});