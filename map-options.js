(function(window, google, mapster) {
	mapster.MAP_OPTIONS = {
		center: {
			lat: 37.791350,
      		lng: -122.435883
		},
		zoom: 10,
	//zoom on scroll
		scrollwheel: true,
	//remove zoom slider and other ui elements
		disableDefaultUI: false,
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
		cluster: false,
		//{
		// 	options: {
		// 		styles: [{
		// 			url: '../images/m1.png',
		// 			height: 56,
		// 			width: 55,
		// 			textColor: '#F00',
		// 			textSize: 18
		// 		},{
		// 			url: '../images/m2.png',
		// 			height: 56,
		// 			width: 55
		// 		}]
		// 	}
		// },
		geocode: true
	};
}(window, google, window.Mapster || (window.Mapster = {})))