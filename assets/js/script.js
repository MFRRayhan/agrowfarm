// move to top button show/hide
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('movetop').style.display = 'block';
    } else {
        document.getElementById('movetop').style.display = 'none';
    }
}

// move to top on button click
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// owl carousel for testimonials
$(document).ready(function () {
    // counter up
    $('.counter').countUp();

    // magnific popup
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
    });

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom',
    });

    // disable body scroll when navbar active
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('noscroll');
    });
});

// sticky navbar
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $('#site-header').addClass('nav-fixed');
    } else {
        $('#site-header').removeClass('nav-fixed');
    }
});

// navbar toggler active class
$('.navbar-toggler').on('click', function () {
    $('header').toggleClass('active');
});

$(document).on('ready', function () {
    if ($(window).width() > 991) {
        $('header').removeClass('active');
    }
    $(window).on('resize', function () {
        if ($(window).width() > 991) {
            $('header').removeClass('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1000: {
                slidesPerView: 1,
            },
        },
    });
});
