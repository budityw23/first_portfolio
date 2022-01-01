$(document).ready(function () {
    $(window).on('load', function () {
        $('.preloader').addClass('complete');
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyAdd");
        } else {
            $(".sticky").removeClass("stickyAdd");
        }
    })

    var typed = new Typed(".element", {
        strings: ["Bu Bejo", "a Software Developer", "a Businessman"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    // progress Bar
    var waypoint = new Waypoint({
        element: document.getElementById('experience'),
        handler: function (direction) {
            var progressBar = document.querySelectorAll('.progress-bar');
            progressBar[0].setAttribute("style", "width:95%; transition:1s all");
            progressBar[1].setAttribute("style", "width:95%; transition:1s all");
            progressBar[2].setAttribute("style", "width:95%; transition:1s all");
            progressBar[3].setAttribute("style", "width:95%; transition:1s all");
            progressBar[4].setAttribute("style", "width:95%; transition:1s all");
        },
        offset: '90%'
    });

    // owl carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        animateIn: "fadeInRight"
    });

    // work
    var filterized = $('.filter-container').filterizr({
        animationDuration: .5,

    })

    //fade animation
    var $child = $('.way-fade-up').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animate__animated animate__fadeInUp');
        }, {
            offset: '90%'
        });
    });

    var $child = $('.way-fade-left').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animate__animated animate__fadeInLeft');
        }, {
            offset: '90%'
        });
    });

    var $child = $('.way-fade-right').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animate__animated animate__fadeInRight');
        }, {
            offset: '90%'
        });
    });

    $('a').smoothScroll({
        speed: 1000,
    });
})