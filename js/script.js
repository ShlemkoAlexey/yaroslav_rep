$(".company-and-contacts").on("click", function(){
  $(".company-and-contacts").css("cursor", "normal");
  $(".company-and-contacts-drop").fadeIn();
  $(".company-and-contacts b").addClass("rotate180");
});

$(".company-and-contacts").on("mouseleave ", function(){
  $(".company-and-contacts-drop").fadeOut();
  $(".company-and-contacts").css("cursor", "pointer");
  $(".company-and-contacts b").removeClass("rotate180");
});

$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
