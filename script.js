(function(window, $) {

  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS)
  geocoder = new google.maps.Geocoder();

  $mapster.mapster('addMarker', {
    id: 1,
    location: '717 west sidney rd. pittstown NJ',
    content: "<div>food is great</div>",
    draggable: true
  });
  $mapster.mapster('addMarker', {
    id: 2,
    content: "<div>food is great</div>",
    draggable: true,

  });

  $mapster.mapster('setPano', '#pip-pano', {
    position: {
      lat: 37.791350,
      lng: -122.435883
    }
  });

  function geocode(opts) {
    geocoder.geocode({
      address: opts.address,
    }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        opts.success.call(this, results, status);
      } else {
        opts.error.call(this, status);
      }
    });
  };

  // geocode({
  //   address: 'Golden Gate Bridge, San Fransisco, CA',
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