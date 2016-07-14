(function(window, mapster) {

  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

  map.zoom(17);

  var marker = map.addMarker({
    lat: 40.5790250,
    lng: -74.9203500,
    draggable: true,
    content: '<div style="color: #F00;"> I like Food </div>',
    icon: 'mapicons/drink.png'
  });

    var marker2 = map.addMarker({
    lat: 40.5790250,
    lng: -74.9203500,
    draggable: true,
    content: 'I like rice',
    icon: 'mapicons/farmstand.png'
  });

  
}(window, window.Mapster));