(function (window, google, List) {
//store Mapster constructor function in var then return constructor function
//makes var contain function not results of function
	var Mapster = (function() {
		function Mapster(element, opts) {
			this.gMap = new google.maps.Map(element, opts);
			this.markers = List.create();
			if (opts.clusterer) {
				this.markerClusterer = new MarkerClusterer(this.gMap, [], opts.clusterer.options);
			}
		}
		Mapster.prototype = {
			//map.zoom(number) sets zoom level
			zoom: function(level) {
				if (level) {
					this.gMap.setZoom(level);
				} else {
					return this.gMap.getZoom();
				}
			},

			//map._on(event, function to be executed)
			_on: function(opts) {
				var self = this;  //this 
				google.maps.event.addListener(opts.obj, opts.event, function(e) {
					opts.callback.call(self, e, opts.obj);
				});
			},
			addMarker: function(opts) {
				var marker;
				//self = this;
				opts.position = {
          			lat: opts.lat,
          			lng: opts.lng
        		}
        		marker = this._createMarker(opts);
        		if (this.markerClusterer) {
        			this.markerClusterer.addMarker(marker);
        		}
        		this.markers.add(marker);
        		if (opts.events) {
        			this._attachEvents(marker, opts.events);
        		}
        		if (opts.content) {
        			this._on({
        				obj: marker,
        				event: 'click',
        				callback: function() {
        					var infoWindow = new google.maps.InfoWindow({
        						content: opts.content
        					});
        					infoWindow.open(this.gMap, marker);
        				}
        			})
        		}
        		return marker;
			},
			_attachEvents: function(obj, events) {
				var self = this;
				events.forEach(function(event){
        			self._on({
        				obj: obj,
        				event: event.name,
        				callback: event.callback
       				});
       			});
			},
			findBy: function(callback) {
				return this.markers.find(callback);
			},
			removeBy: function(callback) {
				var self = this;
				return self.markers.find(callback, function(markers) {
					markers.forEach(function(marker) {
						if (self.markerClusterer) {
							self.markerClusterer.removeMarker(marker);
						}else {
							marker.setMap(null);
						}
					});
				});
			},
			_createMarker: function(opts) {
				opts.map = this.gMap
				return new google.maps.Marker(opts);
			}
		};
		return Mapster;
	}());

	Mapster.create = function (element, opts) {
		return new Mapster(element, opts);
	}

	window.Mapster = Mapster;
}(window, google, List));