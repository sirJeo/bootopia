
const boot = require('./index').boot;
const debug = require('debug');
const assert = require('assert');


boot([() => {}, () => {}]).then(() => console.log('DONE'));