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









//get multiple value
var arr = $(".input1").val().split(",");


// MR CALC
$('.input2').keyup(function(event) {
  if( $('.input2').val() < 0.5 || $('.input2').val() >12){
    $('.input2').css("color", "red");
  }else{
    $('.input2').css("color", "black");
  }
});

var mainObject = {
  density : 7.85,
  width : 1250,
  maxWidth: 0,
  montWidth: 0,
  listLength: 0,
  totalWidth: 0,
  listThickness: 0,
  listsNumber: 0,
  listsArea: 0,
  effectiveArea: 0,
  totalWeight: 0
};

function getValsForCalc(){
  var arr = $(".input1").val().split(",");
  mainObject.maxWidth = +arr[0];
  mainObject.montWidth = +arr[1];
  mainObject.listLength = +$(".input2").val();
  mainObject.totalWidth = +$(".input3").val();
  mainObject.listThickness = +$(".input4").val();
};
function calculate(){
  mainObject.listsNumber = Math.ceil(mainObject.totalWidth*1000 / mainObject.montWidth);
  mainObject.listsArea = mainObject.listsNumber*mainObject.maxWidth/1000 ;
  mainObject.effectiveArea = mainObject.listsNumber*mainObject.montWidth/1000 ;
  if (mainObject.listLength >= 0.5 && mainObject.listLength <=12 ) {
    mainObject.totalWeight = mainObject.width * mainObject.listThickness * mainObject.listLength * mainObject.density * mainObject.listsNumber/1000
  }else(
    mainObject.totalWeight = 0
  )
};
function synchronize(){
  $(".result2 p").html(mainObject.listsNumber);
  $(".result3 p").html(mainObject.listsArea);
  $(".result4 p").html(mainObject.effectiveArea);
  $(".result5 p").html(mainObject.totalWeight);
  console.log("sync");
}


// console.log(mainObject);
// getValsForCalc();
// console.log(mainObject);
// calculate()
// console.log(mainObject);
// synchronize();

$("body").on("click", function(){
  getValsForCalc();
  calculate();
  synchronize();
});
$(document).keyup(function(){
  getValsForCalc();
  calculate();
  synchronize();
});












// MR CALC
