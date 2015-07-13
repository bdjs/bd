/**
 * bd - autoload.js
 * Created by mds on 15/6/2.
 */

'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function (name) {
  name = name || 'apps';
  var dirname = path.dirname(process.mainModule.filename);
  var appPath = path.join(dirname, name);
  if(fs.existsSync(appPath)){
    ar dirs = fs.readdirSync(appPath);
    var apps = {};
    dirs.map(function (value) {
      apps[value] = path.join(dirname, name, value);
    });
    return apps;
  }else{
    return [];
  }

};
