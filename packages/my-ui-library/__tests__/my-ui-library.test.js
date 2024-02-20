'use strict';

const myUiLibrary = require('..');
const assert = require('assert').strict;

assert.strictEqual(myUiLibrary(), 'Hello from myUiLibrary');
console.info('myUiLibrary tests passed');
