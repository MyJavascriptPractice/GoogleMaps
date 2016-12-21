(function(window, $) {
  
  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS),
      geocoder = new google.maps.Geocoder();
  

var marker =  $mapster.mapster('addMarker', {
    location: '717 west sidney rd pittstown nj',
    id: 1,
  });
  var position = 
$mapster.mapster('setPano', '#pip-pano', {
  position: marker.location
})
  
  // function geocode(opts) {
  //   geocoder.geocode({ 
  //     address: opts.address
  //   }, function(results, status) {
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       opts.success.call(this, results, status);
  //     } else {
  //       opts.error.call(this, status);
  //     }
  //   });
  // }
  
  // geocode({
  //   address: 'Golden Gate Bridge, San Francisco, CA',
  //   success: function(results) {
  //     var result = results[0];
  //     $mapster.mapster('addMarker', {
  //       lat: result.geometry.location.lat(),
  //       lng: result.geometry.location.lng()
  //     })
  //   },
  //   error: function(status) {
  //     console.error(status);
  //   }
  // })

}(window, jQuery));