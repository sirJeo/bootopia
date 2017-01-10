module.exports = {
  config:                    require('./setup-config'),
  express:                   require('./setup-express'),
  static:                    require('./setup-static'),
  templates:                 require('./setup-templates'),
  logging:                   require('./setup-logging'),
  httpServer:                require('./setup-http-server'),
};
