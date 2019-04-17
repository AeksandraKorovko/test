jQuery(document).ready(function () {

$('.login').click(function () {
   $('.popup-wrapper').fadeIn();
});

$('.close-popup').click(function () {
    $('.popup-wrapper').fadeOut();
});

    $('.mobile-menu').click(function () {
        $('.navigation ul').toggleClass('active');
    });
   
});



	