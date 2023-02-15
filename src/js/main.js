var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var clientswiper = new Swiper(".clientSwiper", {
    navigation: {
        nextEl: ".say-next",
        prevEl: ".say-prev",
    },
    loop: true,
    autoplay: {
        delay: 2000
    },
    speed: 500
});



let btn = document.querySelector('.fast__info-btn')
let exp = document.querySelector('.explore')
let close = document.querySelector('.explore__popup-close')

btn.addEventListener( 'click',  () => {
    exp.style.display = 'flex'
})

close.addEventListener('click', () => {
    exp.style.display = 'none'
})

