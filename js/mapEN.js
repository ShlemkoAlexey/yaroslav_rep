$(document).ready(function(){
  $("#show-route-button").on("click", function(){
    $(".route ul li:nth-child(2)").fadeIn();
  });

  $(".route ul").on("mouseleave", function(){
    $(".route ul li:nth-child(2)").fadeOut();
  });
});

/*MAP*/
var markerPath = "src/marker1.png";
var map;
var myLatLng = {lat: 48.5, lng: 32};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 6,
    scrollwheel: false,
    disableDoubleClickZoom: false
  });
  /*legend*/
  var legend = document.getElementById('legend');
  map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(legend);
  /*legend*/
  /*marker1*/
  var marker = new google.maps.Marker({
    position: {lat: 48.407569, lng: 35.001023},
    map: map,
    title: 'Dnepr',
    icon: markerPath
  });

  var contentString = '<div>'+
  '<p>Dnepr</p> <p>122a, Bogdan Khmelnitsky Avenue</p> <p>(056)+38 (056) 732-48-43</p>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    closeAllWindows();
    infowindow.open(map, marker);
  });
  /*marker1*/

  /*marker2*/
  var marker2 = new google.maps.Marker({
    position: {lat: 47.826390 , lng: 35.225480},
    map: map,
    title: 'Zaporizhzhya',
    icon: markerPath
  });

  var contentString2 = '<div>'+
  '<p>Zaporizhzhya</p> <p>POTOKI-SOUTH Region</p> <p>54, Dimitrova str</p> <p>+38 (067) 950-33-14</p>' +
  '</div>';

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });

  marker2.addListener('click', function() {
    closeAllWindows();
    infowindow2.open(map, marker2);
  });
  /*marker2*/

  /*marker3*/
  var marker3 = new google.maps.Marker({
    position: {lat: 50.429936, lng: 30.661651},
    map: map,
    title: 'Kyiv',
    icon: markerPath
  });

  var contentString3 = '<div>'+
  '<p>Kyiv</p> <p>POTOKI-NORTH Region</p> <p>7a, Boryspilska str</p><p>+38 (067) 544-38-36</p>'+
  '</div>';

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });

  marker3.addListener('click', function() {
    closeAllWindows();
    infowindow3.open(map, marker3);
  });
  /*marker3*/

  /*marker4*/
  var marker4 = new google.maps.Marker({
    position: {lat: 49.444457, lng: 32.059827},
    map: map,
    title: 'Cherkasy',
    icon: markerPath
  });

  var contentString4 = '<div>'+
  '<p>Cherkasy</p> <p>POTOKI-NORTH Region</p> <p>+38 (098) 182-30-97</p>'+
  '</div>';

  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });

  marker4.addListener('click', function() {
    closeAllWindows();
    infowindow4.open(map, marker4);
  });
  /*marker4*/

  /*marker5*/
  var marker5 = new google.maps.Marker({
    position: {lat: 49.264609 , lng: 28.493596},
    map: map,
    title: 'Vinnytsya',
    icon: markerPath
  });



  var contentString5 = '<div>'+
  '<p>Vinnytsya</p> <p>POTOKI-WEST Region</p> <p>7, Energeticheskaya str</p> <p>+38 (096) 552-21-50</p>'+
  '</div>';

  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
  });

  marker5.addListener('click', function() {
    closeAllWindows();
    infowindow5.open(map, marker5);
  });
  /*marker5*/

  /*marker6*/
  var marker6 = new google.maps.Marker({
    position: {lat: 49.579151 , lng: 25.600158},
    map: map,
    title: 'Ternopil',
    icon: markerPath
  });



  var contentString6 = '<div>'+
  '<p>Ternopil</p> <p>POTOKI-WEST Region</p> <p>28, Promislova str</p>  <p>+38 (097) 868-18-85</p>'+
  '</div>';

  var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
  });

  marker6.addListener('click', function() {
    closeAllWindows();
    infowindow6.open(map, marker6);
  });
  /*marker6*/

  /*marker7*/
  var marker7 = new google.maps.Marker({
    position: {lat: 49.993495, lng: 36.230056},
    map: map,
    title: 'Kharkiv',
    icon: markerPath
  });



  var contentString7 = '<div>'+
  '<p>Kharkiv</p> <p>POTOKI-EAST Region</p> <p>+38 (098) 182 30 89</p>'+
  '</div>';

  var infowindow7 = new google.maps.InfoWindow({
    content: contentString7
  });

  marker7.addListener('click', function() {
    closeAllWindows();
    infowindow7.open(map, marker7);
  });
  /*marker7*/


  function closeAllWindows() {
    infowindow.close();
    infowindow2.close();
    infowindow3.close();
    infowindow4.close();
    infowindow5.close();
    infowindow6.close();
    infowindow7.close();
  }


  /*ROUTE*/


  // $("#show-route-button").on("click", function(){
  //   $(".route ul li:nth-child(n+3)").fadeIn();
  // });
  //
  // $(".route ul").on("mouseleave", function(){
  //   $(".route ul li:nth-child(n+2)").fadeOut();
  // });



  var userLat = 0;
  var userLng = 0;
  var link = ""
  var destination = {
    lat: 48.407569, lng: 35.001023
  };
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      userLat = position.coords.latitude;
      userLng = position.coords.longitude;
      link = "https://maps.google.com/maps/dir/" + userLat+","+userLng+"/"+destination.lat+","+destination.lng+"/";
      $("#show-route-button").unbind();
      $(".route ul").unbind();
      $("#show-route-button").on("click", function(){
        $(".route ul li:nth-child(n+3)").fadeIn();
      });

      $(".route ul").on("mouseleave", function(){
        $(".route ul li:nth-child(n+3)").fadeOut();
      });


      $("#route1link").prop("href", createMapLink(userLat, userLng, marker));
      $("#route2link").prop("href", createMapLink(userLat, userLng, marker2));
      $("#route3link").prop("href", createMapLink(userLat, userLng, marker3));
      $("#route4link").prop("href", createMapLink(userLat, userLng, marker4));
      $("#route5link").prop("href", createMapLink(userLat, userLng, marker5));
      $("#route6link").prop("href", createMapLink(userLat, userLng, marker6));
      $("#route7link").prop("href", createMapLink(userLat, userLng, marker7));

    });




  } else {
    console.log("Geolocation API не поддерживается в вашем браузере");
  }
  // https://maps.google.com/maps/dir/48.4599116,35.050522199999996/48.407569,35.001023/
  // console.log("marker1 = " + marker.getPosition().lat());
  // console.log("marker2 = " + marker2.getPosition().lng());
  /*ROUTE*/
}

function createMapLink(userLat, userLng, marker){
  return link = "https://maps.google.com/maps/dir/" + userLat+","+userLng+"/"+marker.getPosition().lat()+","+marker.getPosition().lng()+"/";
}

/*MAP*/
