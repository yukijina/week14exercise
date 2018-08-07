//google map without api key - need jQuery address to index.html
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(37.7936642,-122.4045095),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('display-map'), mapProp)
}
google.maps.event.addDomListener(window, 'load', initialize)
