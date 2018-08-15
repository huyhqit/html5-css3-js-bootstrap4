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
});