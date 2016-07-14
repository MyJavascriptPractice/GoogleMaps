(function(window, mapster) {
	//map options
	var options = mapster.MAP_OPTIONS,
	element = document.getElementById('map-canvas'),
	//map

	map = Mapster.create(element, options);
	map.zoom(18);
	map._on('click', function (e) {
		alert('clicked');
		console.log(e);
		console.log(this);
	});
	map.addMarker({
		lat: 40.5790250,
		lng: -74.9203500,
		draggable: true,
		visible: true,
		id: 1,
		icon: 'https://mapicons.mapsmarker.com/wp-content/uploads/mapicons/shape-default/color-9d7050/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/waterway-canal-icon.png'
	});


}(window, window.Mapster || (window.Mapster = {})));