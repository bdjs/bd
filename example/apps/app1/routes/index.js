/**
 * bd - index.js
 * Created by mds on 15/6/2.
 */

'use strict';

module.exports = function (router) {
  router.get('/name', function *(next) {
    this.body = 'app';
    yield  next;
  });
};
