
function init_map()
{
	var map_canvas = document.getElementById('map_canvas');
	//map_canvas.width = window.innerWidth;
	//map_canvas.height = window.innerHeight;
	var mapOpts = {
		center: new google.maps.LatLng(42.054647, -87.677139),
		zoom: 15,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(map_canvas, mapOpts);
	var searchbox = new google.maps.places.SearchBox(document.getElementById('pac-input'));
}
/*
function initialize() {

}
*/
google.maps.event.addDomListener(window, 'load', init_map);
google.maps.event.addListenerOnce(map, 'idle', function() {
   google.maps.event.trigger(map, 'resize');
});
