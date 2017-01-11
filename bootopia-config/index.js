const path = require('path');
const fs = require('fs');
const nconf = require('nconf');
const fileExists = require('file-exists');

module.exports = (ctx) => {

  // TODO: encounter for absolute paths too
  const configPath = (ctx.bootConfig && ctx.bootConfig.configPath)
    || 'config.json';

  const fullPath = path.normalize(`${process.cwd()}/${configPath}`);
  console.log(`Loading configuration from ${fullPath}`);

  if (!fileExists(fullPath)) {
    console.log('Config file not found, using runtime configuration only');
    nconf.argv().env();
  } else {
    nconf.argv().env().file({ file: fullPath });
  }

  ctx.config = nconf;
};
