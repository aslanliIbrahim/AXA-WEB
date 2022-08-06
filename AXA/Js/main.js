let hello = document.querySelector(".swiper-slide")
let imgsource = document.querySelector(".salam")
hello.addEventListener('mouseover', function() {
    imgsource.src = './Img/MainPhoto/Group (3).png';
});
hello.addEventListener('mouseout', function() {
    // console.log('hello')
    imgsource.src = './Img/MainPhoto/Group (1).png';
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});