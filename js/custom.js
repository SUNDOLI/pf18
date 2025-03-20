$(function () {
    var swiper = new Swiper(".main_visual_slide", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".main_product_slide", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".arrows_right",
            prevEl: ".arrows_left",
        },
        breakpoints: {

            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },

    });
    var swiper = new Swiper(".main_content_slide", {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".arrows_next",
            prevEl: ".arrows_prev",
        },
        breakpoints: {

            768: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
})
$(function () {
    $('.lnb>ul>li').on('click', function () {
        $('')
    })
})

$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');
        $('.header .my_page').toggleClass('on');


    })
    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').slideUp();
            $(this).next().slideDown();
        }
    });

    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('on')
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul ul').removeAttr('style')
    })

    $('.header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })

})