(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
/*
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
*/
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
    var getImageSrc = $('.imageDiv img').attr('src');
    $('.imageDiv').remove();
    $('#background-image').css('position','absolute');
    $('#background-image').css('left','0');
    $('#background-image').css('right','0');
    $('#background-image').css('top','0');
    $('#background-image').css('bottom','0');
    $('#background-image').css("background-blend-mode","overlay");
$('#background-image').css("background","rgba(0,0,0,0.3)");
  $('#background-image').css("-webkit-background-size","cover");
  $('#background-image').css("-moz-background-size","cover");
  $('#background-image').css("background-size","cover");
  $('#background-image').css("-o-background-size","cover");
  $('#background-image').css('background-image', 'url(' + getImageSrc + ')');

    //$('#background-image').css('backgrou  nd', 'url(' + getImageSrc + '),rgba(0,0,0,0.3)');


  $('#background-image').css("z-index","1");
  $('#background-image').css("-webkit-filter","blur(2px)");
  $('#background-image').css("-moz-filter","blur(2px)");
  $('#background-image').css("-o-filter","blur(2px)");
  $('#background-image').css("-ms-filter","blur(2px)");
  $('#background-image').css("filter","blur(2px)");



    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
