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












/*MAP*/
var map;
  var myLatLng = {lat: 48.5, lng: 32};
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 6,
      scrollwheel: false,
      disableDoubleClickZoom: true
    });
/*
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Jesteśmy tutaj.'
    });

    var contentString = '<div id="content">'+
    '<p>Wrocław</p> <p>Wita Stwosza 12A</p> <p>tel: 607-445-224</p> <p>mobidocwroclaw@gmail.com</p>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
*/
  }

/*MAP*/
