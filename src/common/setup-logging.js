
module.exports = (ctx) => {
  ctx.app.use((req, res, next) => {
    console.log(`Requested ${req.method} on ${req.originalUrl}`);
    next();
  });
};