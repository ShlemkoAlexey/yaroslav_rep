$(document).ready(function(){
  $('.second-block-slider').slick({
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
  $('.second-block-slider').slick("slickPrev");
});
$(".next-button").on("click", function () {
  $('.second-block-slider').slick("slickNext");
});
