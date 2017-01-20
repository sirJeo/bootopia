const MongoClient = require('mongodb').MongoClient;

module.exports = {
  name: 'mongodb',

  dependencies: ['conf:mongodb:url'],

  service: (url) => MongoClient.connect(url)
};
