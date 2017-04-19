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
      title: 'Днепр',
      icon: markerPath
    });

    var contentString = '<div>'+
    '<p>г. Днепр</p> <p>пр. Богдана Хмельницкого 122а</p> <p>(056) 732-48-43</p>'+
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
      position: {lat: 47.838933, lng: 35.139531},
      map: map,
      title: 'Запорожье',
      icon: markerPath
    });

    var contentString2 = '<div>'+
    '<p>г. Запорожье</p> <p>ПОТОКИ-ЮГ</p> <p>(067) 950-33-14</p>'+
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
      position: {lat: 50.450101, lng: 30.524153},
      map: map,
      title: 'Киев',
      icon: markerPath
    });

    var contentString3 = '<div>'+
    '<p>г. Киев</p> <p>ПОТОКИ-СЕВЕР</p> <p>(067) 544-38-36</p>'+
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
      title: 'Черкассы',
      icon: markerPath
    });

    var contentString4 = '<div>'+
    '<p>г. Черкассы</p> <p>ПОТОКИ-СЕВЕР</p> <p>(098) 182-30-97</p>'+
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
      position: {lat: 49.232778, lng: 28.468658},
      map: map,
      title: 'Винница',
      icon: markerPath
    });



    var contentString5 = '<div>'+
    '<p>г. Винница</p> <p>ПОТОКИ-ЗАПАД</p> <p>(096) 552-21-50</p>'+
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
      position: {lat: 49.553692, lng: 25.594325},
      map: map,
      title: 'Тернополь',
      icon: markerPath
    });



    var contentString6 = '<div>'+
    '<p>г. Тернополь</p> <p>ПОТОКИ-ЗАПАД</p> <p>(097) 868-18-85</p>'+
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
      title: 'Харьков',
      icon: markerPath
    });

 

    var contentString7 = '<div>'+
    '<p>г. Харьков</p> <p>ПОТОКИ-ВОСТОК</p> <p>(098) 182 30 89</p>'+
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

  }


/*MAP*/
