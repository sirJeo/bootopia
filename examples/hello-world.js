const boot = require('../index').boot;

const srvA = (ctx) => {
  console.log('Loading A');
  return new Promise((resolve, reject) => {
    ctx.a = 'Hi there';
    setTimeout(resolve, 100);
  });
};

const srvB = (ctx) => {
  console.log('Loading B');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(ctx.a);
      resolve();
    }, 100);
  });
};

boot({}, [srvA, srvB]).then((ctx) => {
  console.log('Context Loaded');
  console.log(ctx);
});
