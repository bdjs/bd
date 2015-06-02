/**
 * bd - serve.js
 * Created by mds on 15/6/2.
 */

'use strict';

var serve = require('bd-static');
var path = require('path');

module.exports = function (apps, app) {
  var keys = Object.keys(apps);
  keys.map(function (key) {
    app.use(serve(path.join(apps[key], 'public'), key))
  })
};
