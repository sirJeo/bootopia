const boot = require('../index').boot;
const commonServices = require('../index').common;
const { config, express, serveStatic, httpServer } = commonServices;


const stack = [
  config, express, serveStatic, httpServer
];

boot('express-simple-api.json', stack).then((ctx) => {
  console.log('Context Loaded');
  console.log(ctx);
});
