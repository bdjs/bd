/**
 * bd - router.js
 * Created by mds on 15/6/2.
 */

'use strict';

var Router = require('koa-router');
var path = require('path');
var compose = require('koa-compose');
var fs = require('fs');

var logger = require('./logger');

var routers = [];
var loggers = {};

module.exports = function (apps) {
  var keys = Object.keys(apps);
  keys.map(function (key) {
    var dirname = apps[key];
    var router = new Router({
      prefix: '/' + key
    });
    var routesDirname = path.join(dirname, 'routes');
    if (fs.existsSync(routesDirname)) {
      var routes = fs.readdirSync(routesDirname);
      routes.map(function (route) {
        if (!loggers[key]) {
          loggers[key] = logger(key);
        }
        require(path.join(routesDirname, route))(router, loggers[key]);
      })
    }
    routers.push(router.routes());
  });
  return compose(routers);
};
