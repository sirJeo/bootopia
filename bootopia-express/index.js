const express = require('express');

module.exports = {
  name: 'app',

  dependencies: [],

  service: () => {
    return express();
  }
};
