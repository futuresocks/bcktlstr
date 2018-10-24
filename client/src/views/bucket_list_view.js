const PubSub = require('../helpers/pub_sub.js');
const BucketView = require('./bucket_view.js');
const ElementWipe = require('../helpers/elementwipe.js');

const BucketListView = function(element){
  this.element = element;
}

BucketListView.prototype.bindEvents = function () {
  PubSub.subscribe('Bucketlist:data-ready', (evt) => {
    this.render(evt.detail);
  })
};

BucketListView.prototype.render = function (countries) {
  ElementWipe(this.element);
  const heading = document.createElement('h2');
  heading.textContent = "BUCKET COUNTRIES";
  this.element.appendChild(heading);
  
  countries.forEach(country => this.element.append(new BucketView(country).render()))
};

module.exports = BucketListView;
