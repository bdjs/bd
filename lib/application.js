/**
 * bd - application.js
 * Created by mds on 15/6/2.
 */

'use strict';

var koa = require('koa');
var util = require('util');
var http = require('http');
var bodyParser = require('koa-bodyparser');
var logging = require('koa-logger');

var autoload = require('./autoload');
var router = require('./router');
var serve = require('./serve');
var uuid = require('./uuid');
var logger = require('./logger');

function Application(options) {
  if (!(this instanceof Application)) {
    return new Application(options);
  }
  koa.call(this);
}

util.inherits(Application, koa);

var app = Application.prototype;

var apps = autoload();

app.listen = function () {
  if (this.env == 'development') {
    this.use(logging())
  }
  this.use(bodyParser());
  this.use(uuid());
  this.use(router(apps));
  serve(apps, this);
  var server = http.createServer(this.callback());
  return server.listen.apply(server, arguments);
};

Application.logger = logger;
module.exports = Application;
