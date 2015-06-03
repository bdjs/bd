/**
 * bd - logid.js
 * Created by mds on 15/6/3.
 */

'use strict';

var uid = require('uuid');

module.exports = function () {
  return function *uuid(next) {
    this.logid = this.request.query.logid || uid.v1();
    yield next;
  };
};
