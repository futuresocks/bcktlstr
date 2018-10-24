const Countries = require('./models/countries_data.js');
const CountrySelectView = require('./views/country_select_view.js')

document.addEventListener('DOMContentLoaded', () => {

  const select = document.querySelector('#country-select');
  const countrySelector = new CountrySelectView(select);

  const countries = new Countries();

  const elements = [countrySelector, countries];
  elements.forEach(element => element.bindEvents());


})
