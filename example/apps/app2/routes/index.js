/**
 * bd - index.js
 * Created by mds on 15/6/2.
 */

'use strict';

var bd = require('../../../../lib/application');

module.exports = function (router, logger) {
  router.get('/name', function *(next) {
    logger.access(this.request);
    this.body = 'app';
    yield  next;
  });
};
