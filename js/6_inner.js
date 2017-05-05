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


/*POPUP FOR SENDING*/

var data = {};
var url = "";             //ADD URL HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$(".fourth-block form button").on("click", function(){
  data.name =  $("#name-input").val();
  data.phone = $("#phone-input").val();
  data.email = $('#email-input').val();

  $.getJSON( url, data )
    .done(function() {
      $(".fourth-block form").fadeOut( function(){$(".form-feedback").fadeIn()} );
    })
    .fail(function() {
      $(".fourth-block form").fadeOut( function(){$(".form-feedback-false").fadeIn()} );
  });




});



/*POPUP FOR SENDING*/

/* disable email validation
$('#email-input').keyup(function(event) {
  if( validateEmail( $('#email-input').val() )){
    $('#email-input').css("color", "black");
  }else{
    $('#email-input').css("color", "red");
  }
});
*/
$('#phone-input').keyup(function(event) {
  if( $("#phone-input").val().length > 5 ){
    $('#phone-input').css("color", "black");
  }else{
    $('#phone-input').css("color", "red");
  }
});

$('.fourth-block form input').keyup(function(event) {
  if( /*validateEmail( $('#email-input').val() ) &&*/ $("#phone-input").val().length > 5 ){   //disable email validation
    $(".fourth-block form button").prop("disabled", false);
    console.log($("#phone-input").val().length);
  }else{
    $(".fourth-block form button").prop("disabled", true);
    console.log($("#phone-input").val().length);
  }
});



function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
