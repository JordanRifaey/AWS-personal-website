jQuery(function ($) {

    // -------------------------------------------------------------
    // Animated scroll down on visit
    // -------------------------------------------------------------

    var scrolled = false;
    var opacity = 1.0;
    
    window.onscroll = function (e) {
        if (window.pageYOffset < 100) {
            opacity = 1 - window.pageYOffset / 115;
        } else {
            opacity = 0.156;
        }
        document.getElementById('jrtitle').style.opacity = opacity;
        document.getElementById('jrp').style.opacity = opacity;
        document.getElementById('iconbar').style.opacity = opacity;
        document.getElementById('m-icon').style.opacity = opacity;
        if (window.pageYOffset <= 50 && scrolled === false) {
            scrolled = true;
            $('html, body').animate({
                scrollTop: $("#resume").offset().top
            }, 2000);
            e.preventDefault();
        }

        if (window.pageYOffset >= 900) {
            document.getElementById("nav").style.background = "rgba(255, 255, 255, 0.7)"
        } else {
            document.getElementById("nav").style.background = ""
            document.getElementById("nav").style.transition = "background-color .5s ease";
        }};


    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('a[href*=#]').bind("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());

    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());
    
});





