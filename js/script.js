$(".company-and-contacts").on("click", function(){
  $(".company-and-contacts").css("cursor", "normal");
  $(".company-and-contacts-drop").fadeIn();
});

$(".company-and-contacts").on("mouseleave ", function(){
  $(".company-and-contacts-drop").fadeOut();
  $(".company-and-contacts").css("cursor", "pointer");
});
