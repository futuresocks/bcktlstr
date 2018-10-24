const Countries = require('./models/countries_data.js');
const CountrySelectView = require('./views/country_select_view.js')
const CountryView = require('./views/country_view.js');
const MapView = require('./views/map_view.js');
const BucketList = require('./models/bucket_data.js');
const BucketListView = require('./views/bucket_list_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const select = document.querySelector('#country-select');
  const countrySelector = new CountrySelectView(select);

  const mapDiv = document.querySelector('#main-map');
  const mapView = new MapView(mapDiv)

  const countryDiv = document.querySelector('#country-div');
  const countryView = new CountryView(countryDiv);

  const bucketDiv = document.querySelector('#bucket-div');
  const bucketView = new BucketListView(bucketDiv)

  const countries = new Countries();
  const bucketList = new BucketList();

  const elements = [countrySelector, mapView, countryView, bucketView, countries, bucketList];
  elements.forEach(element => element.bindEvents());

})
