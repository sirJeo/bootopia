const http = require('http');

module.exports = {
  name: 'server',

  dependencies: ['app', 'conf:server:host', 'conf:server:port'],

  service: (app, host, port) => new Promise((resolve, reject) => {
    const server = http.createServer(app);

    server.listen(port, host, () => {
      console.log(`Listening to http://${host}:${port}`);
      resolve(server);
    });
  })
};
