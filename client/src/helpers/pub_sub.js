const PubSub = {
  publish: (channel, payload) => document.dispatchEvent(new CustomEvent(channel, {detail: payload;})),
  subscribe: (channel, callback) => document.addEventListener(channel, callback);
}

module.exports = PubSub;
