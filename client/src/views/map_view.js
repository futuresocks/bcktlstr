const PubSub = require('../helpers/pub_sub.js');

const MapView = function(container){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

  this.map = L.map(container)
            .setView([0,0], 1)
            .addLayer(osmLayer);
}

MapView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:country-selected', (event) => {
    this.countryFocus(event.detail);
  });

  PubSub.subscribe('Bucketlist:data-ready', (event) => {
    this.addMarkers(event.detail);
  })

  PubSub.subscribe('BucketView:flag-clicked', (event) => {
    this.countryFocus(event.detail);
  })

};

MapView.prototype.countryFocus = function (country) {
  this.map.flyTo(country.latlng, 10);
};

MapView.prototype.addMarkers = function (countries){
  countries.forEach(country => {
    let marker = L.marker(country.latlng)
    .addTo(this.map)
    .on('click', event => {
      marker.remove();
      PubSub.publish('MapView:marker-clicked', country)})
  });
}


module.exports = MapView;
