'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('vatPham service', function() {
  it('registered the vatPhams service', () => {
    assert.ok(app.service('vatPhams'));
  });
});
