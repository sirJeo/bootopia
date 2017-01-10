const AuthProvider = require('../auth/auth-provider');

module.exports = (ctx) => {
  const endpoint = ctx.config.get('serp:endpoint');

  ctx.authProvider = new AuthProvider(endpoint);
};
