'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('danhMuc service', function() {
  it('registered the danhMucs service', () => {
    assert.ok(app.service('danhMucs'));
  });
});
