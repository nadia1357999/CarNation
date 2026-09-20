var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,

    autoplay: {
    delay: 2000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        } ,
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }}
);



