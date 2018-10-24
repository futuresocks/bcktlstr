const PubSub = require('../helpers/pub_sub.js');

const BucketView = function(country){
  this.country = country;
}

BucketView.prototype.render = function () {
  const div = document.createElement('div');
  div.classList.add('bucket');

  const flag = document.createElement('img');
  flag.src = this.country.flag;
  flag.addEventListener('click', () => {
    PubSub.publish('BucketView:flag-clicked', this.country);
  })

  const button = document.createElement('button');
  button.textContent = 'Delete this country';
  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketView:delete-clicked', this.country);
  })

  div.appendChild(flag);
  div.appendChild(button);

  return div;
};

module.exports = BucketView;
