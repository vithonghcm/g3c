'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('userPost service', function() {
  it('registered the userPosts service', () => {
    assert.ok(app.service('userPosts'));
  });
});
