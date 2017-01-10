
const loadServices = (ctx, services, i) => {
  return services[i].call(null, ctx)
    .then(() => {
      if (i + 1 === services.length) {
        return ctx;
      } else {
        return loadServices(ctx, services, i + 1);
      }
    });
};

const boot = (bootConfig = {}, services) => {
  return loadServices({ bootConfig }, services, 0);
};

module.exports = {
  common: require('./src/common'),
  boot
};
