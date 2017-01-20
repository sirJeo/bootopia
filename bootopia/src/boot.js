
const loadServices = (ctx, services, i) => {
  const promise = services[i].call(null, ctx) || Promise.resolve();

  return promise.then(() => {
    if (i + 1 === services.length) {
      return ctx;
    } else {
      return loadServices(ctx, services, i + 1) || Promise.resolve();
    }
  });
};

const boot = (bootConfig, services) => {

  if (Array.isArray(bootConfig)) {
    services = bootConfig;
    bootConfig = 'config.json';
  }

  if (typeof bootConfig === 'string') {
    const configPath = bootConfig;
    bootConfig = { configPath };
  }

  return loadServices({ bootConfig }, services, 0);
};

module.exports = boot;
