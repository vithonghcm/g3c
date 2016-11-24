'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('huongDan service', function() {
  it('registered the huongDans service', () => {
    assert.ok(app.service('huongDans'));
  });
});
