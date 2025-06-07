$(document).ready(function () {
    //находим блок с слайдами
    const owl = $('#clients-slider');
    //запускаем карусель
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

    //находим кастомные кнопки вперед / назад
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    //клик на кнопку назад - прокрутка карусели
    prev.click(function () {
        owl.trigger('prev.owl.carousel');
    });
    //клик на кнопку вперед - прокрутка карусели
    next.click(function () {
        owl.trigger('next.owl.carousel');
    });
});