const debug = require('debug')('bootopia');

const loadServices = (ctx, services, i) => {
  debug(`Loading service ${i}`);

  const promise = services[i].call(null, ctx) || Promise.resolve();

  return promise.then(() => {
      if (i + 1 === services.length) {
        return ctx;
      } else {
        return loadServices(ctx, services, i + 1) || Promise.resolve();
      }
    });
};

const boot = (bootConfig = 'config.json', services) => {

  if (typeof bootConfig === 'string') {
    const configPath = bootConfig;
    bootConfig = { configPath };
  }

  return loadServices({ bootConfig }, services, 0);
};

module.exports = {
  common: require('./src/common'),
  boot
};
