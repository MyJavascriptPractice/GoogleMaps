(function(window, google) {
	//map options
	var options = {
		center: {
			lat: 40.5790250,
			lng: -74.9203500,
		},
		zoom: 10,
	//zoom on scroll
		scrollwheel: false,
	//remove zoom slider and other ui elements
		//disableDefaultUI: true,
	//drag to move map
		draggable: true,
	//HYBRID SATElLITE ROADMAP
		mapTypeId: google.maps.MapTypeId.HYBRID,
		maxZoom: 11,
		minZoom: 9,
		zoomControlOptions: {
			position: google.maps.ControlPosition.TOP_LEFT,
		//DEFAULT SMALL LARGE
			style: google.maps.ZoomControlStyle.LARGE
		},
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		}
	},
	element = document.getElementById('map-canvas'),
	//map

	map = new google.maps.Map(element, options);
}(window, google, window.Mapster || (window.Mapster = {})));