
function init_map()
{
	if (map == undefined) {
		var map_canvas = document.getElementById('map_canvas');
		var mapOpts = {
			center: new google.maps.LatLng(42.054647, -87.677139),
			zoom: 15,
			streetViewControl: false,
			panControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(map_canvas, mapOpts);
		var searchbox = new google.maps.places.SearchBox(document.getElementById('pac-input'));
	}
}
$(document).on("pageshow","#navigation",function(){init_map();});
