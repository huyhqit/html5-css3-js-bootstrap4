$(document).ready(function(){
    /********** NAVIGATION ***********/
    // Closes responsive menu when a scroll trigger link is clicked
    $('.nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
    }); 

    // Activate scrollsp to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#navbar',
        offset: 75
    });

    // On scroll down .. if the offset is higher
    $(window).scroll(function() {
        if ($('#navbar').offset().top> 10) {
            $('#navbar').addClass('navbar-shrink');
        } else {
            ('#navbar').removeClass('navbar-shrink');
        }
    })

    /*************** MEMBERS Slider ******************/
    $('#members-slider').owlCarousel({
        margin: 25,
        smartSpeed: 1000,
        nav: false,
        dots: true,
        dotsEach: true,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    /************************ BLOG SLIDER  *******/

    $('#blog-slider').owlCarousel({
        margin: 10,
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        loop: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag:true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    /************************ */
});