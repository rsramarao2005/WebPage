// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("navbar-custom");
        $(".navbar-header").addClass("navbar-header-alt");
        $(".navbar-brand").removeClass("navbar-logo-box"); 
    } else {
        $(".navbar-fixed-top").removeClass("navbar-custom");
        $(".navbar-header").removeClass("navbar-header-alt");
        $(".navbar-brand").addClass("navbar-logo-box"); 
    }
}); 

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $(".navbar").height()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.round-icon').hover(function () {
       $(this).addClass("animated bounceIn")  
       console.log("hereee"); 
    });

     $('.round-icon').mouseout(function () {
       $(this).removeClass("bounceIn"); 
       console.log("there"); 
    })
});


