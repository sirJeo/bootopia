const Context = require('../index').Context;
const ConfigContext = require('../index').ConfigContext;

const confContext = new ConfigContext('example/config.json');

const ctx = new Context(confContext);

ctx.register('A',
  ['conf:server:bindIp', 'conf:server:port'],
  (ip, port) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(() => {
          console.log('Service A', ip, port);
        });
      }, 2000);
    });
  });

ctx.register('B', ['A'], (a) => {

  return () => {
    console.log('This is service B');
    console.log('calling A');

    a();
  }
});

ctx.set('conf:server:port', 7000);

ctx.get('B')
  .then((b) => b())
  .catch((err) => {
    console.log(err.stack);
  });
