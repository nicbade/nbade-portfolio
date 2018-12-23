$(document).ready(function() {
    // STICKY NAV AT ABOUT US
    $('.js--aboutUs').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    })

    // MOBILE NAVIGATION
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        
        nav.slideToggle(200);
    });

});