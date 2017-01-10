module.exports = (ctx) => {
  const express = require('express');

  if (ctx.config.get('templates:enabled')) {
    const app = ctx.app;
    app.set('view engine', 'ejs');
  }

};
