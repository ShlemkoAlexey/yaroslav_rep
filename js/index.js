$(document).ready(function(){
  $('.first-block-slider').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: true
  });
});

$(".prev-button").on("click", function () {
  $('.first-block-slider').slick("slickPrev");
});
$(".next-button").on("click", function () {
  $('.first-block-slider').slick("slickNext");
});

$(".legend-more-button").on("click", function (){
  $(".legend-more-button, .legend-filials").fadeOut( function(){$(".legend-more-block").fadeIn();} );
});


$(".legend-more-block button").on("click", function (){
  $(".legend-more-block").fadeOut( function(){$(".legend-more-button, .legend-filials").fadeIn();} );
});
