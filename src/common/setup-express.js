module.exports = (ctx) => {
  const express = require('express');

  ctx.app = express();

  return Promise.resolve();
};