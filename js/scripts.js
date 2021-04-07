// JS AÑADIDO

// MOVIMIENTO DE LA GALERIA - implementado desde - http://bootsnipp.com/snippets/featured/responsive-thumb-preview-in-carousel-indicators -  

$(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});


// MENU FLOTANTE - implementado desde - http://stackoverflow.com/questions/28269552/show-and-hide-navbar-using-javascript-for-scroll-and-hover-functions/37496636 - 
(function ($) {
  $(document).ready(function(){
 
    // hide .navbar first
    $('.navbar').hide();
 
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // DISTANCIA EN PIXELES A LA QUE SE ABRE EL MENU 
            if ($(this).scrollTop() > 160) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });

 
    });

});
  }(jQuery));

// ACCION DE LOS PANELES LATERALES
$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
})