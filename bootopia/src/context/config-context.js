const path = require('path');
const nconf = require('nconf');
const fileExists = require('file-exists');

const Context = require('./context');

class ConfigContext extends Context {

  constructor(config, parent) {
    super(parent);
    this._configPath = config;
    this._config = null;

    this.init();
  }

  init() {
    const absolutePath = `${process.cwd()}/${this._configPath}`;
    const fullPath = path.normalize(absolutePath);
    console.log(`Loading configuration from ${absolutePath}`);

    if (!fileExists(fullPath)) {
      console.log('Config file not found');
      nconf.argv().env();
    } else {
      nconf.argv().env().file({ file: fullPath });
    }

    this._config = nconf;
  }

  get(name) {
    if (name.startsWith('conf:')) {
      const value = this._config.get(name.substring(5));
      if (value !== undefined) {
        return Promise.resolve(value);
      }
    }

    if (this._parent) {
      return this._parent.get(name);
    } else {
      return Promise.reject(Error(`${name} is not known`));
    }
  }
}

module.exports = ConfigContext;
