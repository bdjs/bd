/**
 * bd - application.js
 * Created by mds on 15/6/2.
 */

'use strict';

var koa = require('koa');
var util = require('util');
var http = require('http');

var autoload = require('./autoload');
var router = require('./router');
var serve = require('./serve');

var apps = autoload();

function Application(options) {
  if (!(this instanceof Application)) {
    return new Application(options);
  }
  koa.call(this);
}

util.inherits(Application, koa);

var app = Application.prototype;

app.listen = function () {
  this.use(router(apps));
  serve(apps, this);
  var server = http.createServer(this.callback());
  return server.listen.apply(server, arguments);
};

module.exports = Application;
