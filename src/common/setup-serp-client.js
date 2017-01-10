const SerpClient = require('../serp/serp-client');

module.exports = (ctx) => {
  const endpoint = ctx.config.get('serp:endpoint');

  ctx.serpClient = new SerpClient(endpoint);
};