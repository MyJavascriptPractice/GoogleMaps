(function(window, mapster) {

  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

  map.zoom(9);

    var marker2 = map.addMarker({
    id: 2,
    lat: 40.5790250,
    lng: -74.9203500,
    draggable: true,
    content: 'I like rice',
    icon: 'images/farmstand.png',
    events: [{
      name: 'click',
      callback: function(e, marker) {
        console.log(e, marker);
      }
    },{
      name: 'dragend',
      callback: function() {
        alert('dragged');
      }
    }]
  });

  // for (var i = 0; i < 40; i++) {
  //   map.addMarker({
  //     id: 2,
  //     lat: 40.5790250 + Math.random(),
  //     lng: -74.9203500 + Math.random(),
  //     content: 'I like rice',
  //     icon: 'images/farmstand.png'
  //   });

  //   var marker = map.addMarker({
  //     lat: 40.5790250 + Math.random(),
  //     lng: -74.9203500 + Math.random(),
  //     content: '<div style="color: #f00;">I like food</div>',
  //     icon: 'images/drink.png'
  //   });
  // }

  // map.removeBy(function(marker) {
  //   return marker.id === 2;
  // });

}(window, window.Mapster));