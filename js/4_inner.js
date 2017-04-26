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


$("#button1").on("click", function(){
  $(".popup-shadow").fadeIn();
  $("#popup1").fadeIn();
});

$("#button2").on("click", function(){
  $(".popup-shadow").fadeIn();
  $("#popup2").fadeIn();
});

$("#button3").on("click", function(){
  $(".popup-shadow").fadeIn();
  $("#popup3").fadeIn();
});

$("#button4").on("click", function(){
  $(".popup-shadow").fadeIn();
  $("#popup4").fadeIn();
});

$("#button5").on("click", function(){
  $(".popup-shadow").fadeIn();
  $("#popup5").fadeIn();
});

$("#button6").on("click", function(){
  $(".popup-shadow").fadeIn();
  $("#popup6").fadeIn();
});



$(".close, .popup-shadow").on("click", function(){
  $(".popup-shadow").fadeOut();
  $("#popup1").fadeOut();
  $("#popup2").fadeOut();
  $("#popup3").fadeOut();
  $("#popup4").fadeOut();
  $("#popup5").fadeOut();
  $("#popup6").fadeOut();
});











var arr = $(".input1").val().split(",");
console.log(arr);
// MR CALC
$('.input2').keyup(function(event) {
  if( $('.input2').val() < 0.5 || $('.input2').val() >12){
    $('.input2').css("color", "red");
  }else{
    $('.input2').css("color", "black");
  }
});





















// MR CALC
