const http = require('http');

module.exports = (ctx) => {
  const server = http.createServer(ctx.app);

  const host = ctx.config.get('server:host');
  const port = process.env.PORT || ctx.config.get('server:port');

  server.listen(port, host, () => {
    console.log(`Listening to http://${host}:${port}`);
  });

  ctx.server = server;

};
