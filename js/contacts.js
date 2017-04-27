/*POPUP FOR SENDING*/
$(".sixth-block form button").on("click", function(){
  $(".sixth-block form").fadeOut( function(){$(".form-feedback").fadeIn()} );
});
/*POPUP FOR SENDING*/


$('#email-input').keyup(function(event) {
  if( validateEmail( $('#email-input').val() )){
    $(".sixth-block form button").prop("disabled", false);
    $('#email-input').css("color", "black");
  }else{
    $(".sixth-block form button").prop("disabled", true);
    $('#email-input').css("color", "red");
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}