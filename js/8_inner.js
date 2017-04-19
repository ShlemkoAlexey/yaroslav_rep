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
$(".close, .popup-shadow").on("click", function(){
  $(".popup-shadow").fadeOut();
  $("#popup1").fadeOut();
  $("#popup2").fadeOut();
  $("#popup3").fadeOut();
  $("#popup4").fadeOut();
});
