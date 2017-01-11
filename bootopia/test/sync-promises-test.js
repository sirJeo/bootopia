const boot = require('../index').boot;
const debug = require('debug');
const assert = require('assert');

debug.enable();

describe('boot()', () => {
  it('should load sync services', (done) => {
    boot(() => {}, () => {}).then(done);
  });
});

