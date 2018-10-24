const PubSub = require('../helpers/pub_sub.js');

const CountrySelectView = function(element){
  this.element = element;
}

CountrySelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-ready', (evt) => {
    this.populate(evt.detail);
  })
};

CountrySelectView.prototype.populate = function(countries){
  countries.forEach((country, index) => {
    let option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
  this.element.addEventListener('change', (event) => {
    console.log(event.target.value);
  })
}

module.exports = CountrySelectView;
