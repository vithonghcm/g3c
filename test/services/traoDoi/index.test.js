'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('traoDoi service', function() {
  it('registered the traoDois service', () => {
    assert.ok(app.service('traoDois'));
  });
});
