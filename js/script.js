jQuery(document).ready(function () {

	$('.dropdown-js').click(function () {
        $(this).addClass('opened');
        $('.submenu-js').slideDown(200);
    });
    $('.close').click(function () {
        $('.dropdown-js').removeClass('opened');
        $('.submenu-js').slideUp(200);
    });
   
});


	