(function(window, google, mapster) {
	mapster.MAP_OPTIONS = {
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
		zoomControlOptions: {
			position: google.maps.ControlPosition.TOP_LEFT,
		//DEFAULT SMALL LARGE
			style: google.maps.ZoomControlStyle.LARGE
		},
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		cluster: {
			options: {
				styles: [{
					url: "images/m1",
					height: 56,
					width: 55,
					textColor: '#F00',
					textSize: 18
				},{
					url: "images/m2",
					height: 56,
					width: 55
				}]
			}
		}
	};
}(window, google, window.Mapster || (window.Mapster = {})))