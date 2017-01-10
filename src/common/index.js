module.exports = {
  config:                    require('./setup-config'),
  express:                   require('./setup-express'),
  serveStatic:               require('./setup-static'),
  templates:                 require('./setup-templates'),
  logging:                   require('./setup-logging'),
  httpServer:                require('./setup-http-server'),
};
