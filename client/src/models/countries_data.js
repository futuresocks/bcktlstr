const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function(){
  this.data = [];
  this.request = new Request("https://restcountries.eu/rest/v2/all");
}

Countries.prototype.bindEvents = function () {
  this.getData();
};

Countries.prototype.getData = function () {
  this.request.get().then((data) => {
    this.data = data;
    PubSub.publish('Countries:data-ready', this.data);
  })
};

module.exports = Countries;
