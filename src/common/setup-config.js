const path = require('path');
const fs = require('fs');
const nconf = require('nconf');
const fileExists = require('file-exists');

module.exports = (ctx) => {

  const fullPath = path.normalize(`${process.cwd()}/config.json`);
  console.log(`Loading configuration from ${fullPath}`);

  if (!fileExists(fullPath)) {
    console.error('Config not found, exiting');
    process.exit(1);
  }

  nconf.argv().env().file({ file: fullPath });

  ctx.config = nconf;
};