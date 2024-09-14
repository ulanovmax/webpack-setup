// import Swiper from 'swiper';
// import { Autoplay, Pagination } from 'swiper/modules';

/**
 * Function for disabling Swiper autoscroll when Swiper is not in viewport
 */
export const swiperObserver = (swiperInstance) => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.85,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                swiperInstance.autoplay.start();
            } else {
                swiperInstance.autoplay.stop();
            }
        });
    }, observerOptions);

    observer.observe(swiperInstance.el);
};

// const slider = document.querySelector('.slider');
// if (slider) {
//     const swiper = new Swiper(slider, {
//         modules: [Autoplay],
//         slidesPerView: 'auto',
//         grabCursor: true,
//         slideToClickedSlide: true,
//
//         // Autoplay
//         autoplay: {
//             delay: 3500,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//         },
//     });
//
//     swiperObserver(swiper);
// }
