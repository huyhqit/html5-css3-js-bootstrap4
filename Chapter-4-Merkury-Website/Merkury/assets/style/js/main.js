$(document).ready(function() {
/****************NAVIGATION ****************/

// Close responsive menu when a scroll trigger link is clicked
$('.nav-link').click(function(){
    $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class the navbar items on scroll
$('body').scrollspy({
    traget: '#mainNav',
    offset: 70
})

// On scroll down if the offset is higher than 50 pixels add navbar shrink class class else remove that class
$(window).scroll(function() {
    if($('#mainNav').offset().top > 50) {
        $('#mainNav').addClass('navbar-shrink');
    } else {
        $('#mainNav').removeClass('navbar-shrink');
    }
});

/**************** DRAG=DROP ****************/
$(function() {
    $('#draggable').draggable({
        grid: [1,0]
    });
    $('#droppable').droppable({
        drop: function() {
            $('.card').css("border","transparent");
            $('#droppable').find(".card-title").html('');
        }
    });
});

});