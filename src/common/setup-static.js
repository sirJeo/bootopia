module.exports = (ctx) => {
  const express = require('express');

  if (ctx.config.get('static:enabled')) {
    const path = `${ process.cwd() }/${ctx.config.get('static:path')}`;

    console.log('Serving static files from', path);
    ctx.app.use(express.static(path));
  }

};