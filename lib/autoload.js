/**
 * bd - autoload.js
 * Created by mds on 15/6/2.
 */

'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function (name) {
  // the mainModule dirname
  name = name || 'apps';
  var dirname = path.dirname(process.mainModule.filename);
  var dirs = fs.readdirSync(path.join(dirname, name));
  var apps = {};
  dirs.map(function (value) {
    apps[value] = path.join(dirname, name, value);
  });
  return apps;
};
