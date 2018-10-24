const PubSub = require('../helpers/pub_sub.js');
const ElementWipe = require('../helpers/elementwipe.js');

const CountryView = function(element){
  this.element = element;
}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:country-selected', (evt) => {
    this.render(evt.detail);
  })
};

CountryView.prototype.render = function (country) {
  ElementWipe(this.element);
  const div = this.divMaker();
  const button = this.buttonMaker(country);
  const header = this.headerMaker(country.name);
  const flag = this.flagMaker(country.flag);

  div.appendChild(header);
  div.appendChild(flag);
  div.appendChild(button);
  this.element.appendChild(div);
};

CountryView.prototype.headerMaker = function(countryName){
  const header = document.createElement('h2');
  header.textContent = countryName;
  return header;
}

CountryView.prototype.flagMaker = function (flagImage) {
  const flag = document.createElement('img');
  flag.src = flagImage;
  return flag;
};

CountryView.prototype.buttonMaker = function(country){
  const button = document.createElement('button');
  button.textContent = "Add this country!";

  button.addEventListener('click', () => {
    console.log(country);
    PubSub.publish('CountryView:button-clicked', country)
  })

  return button;
}

CountryView.prototype.divMaker = function () {
  const div = document.createElement('div');
  div.classList.add('country_view');
  return div;
};


module.exports = CountryView;
