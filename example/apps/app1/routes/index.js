/**
 * bd - index.js
 * Created by mds on 15/6/2.
 */

'use strict';

var bd = require('../../../../lib/application');
var logger = bd.logger('app1');

module.exports = function (router) {
  router.get('/name', function *(next) {
    logger.access(this.request);
    this.body = 'app';
    yield  next;
  });
};
