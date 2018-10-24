const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const BucketList = function(){
  this.data = [];
  this.request = new Request("http://localhost:3000/api/bucketlist");
}

BucketList.prototype.bindEvents = function () {
  this.getData();
  PubSub.subscribe('CountryView:button-clicked', (evt) => {
    this.createBucketEntry(evt.detail);
  })
  PubSub.subscribe('BucketView:delete-clicked', (evt) => {
    this.deleteBucketEntry(evt.detail);
  })

  PubSub.subscribe('MapView:marker-clicked', (evt) => {
    this.deleteBucketEntry(evt.detail);
  })
};

BucketList.prototype.getData = function () {
  this.request.get().then((data) => {
    this.data = data;
    console.log(this.data);
    PubSub.publish('Bucketlist:data-ready', this.data);
  })
};

BucketList.prototype.createBucketEntry = function (country) {
  this.request.post(country).then((data) => {
    this.data = data;
    PubSub.publish('Bucketlist:data-ready', this.data);
  });
};

BucketList.prototype.deleteBucketEntry = function (country) {
  this.request.delete(country["_id"]).then((data) => {
    this.data = data;
    PubSub.publish('Bucketlist:data-ready', this.data);
  })
};

module.exports = BucketList;
