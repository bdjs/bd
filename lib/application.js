/**
 * bd - application.js
 * Created by mds on 15/6/2.
 */

'use strict';

var koa = require('koa');
var util = require('util');
var http = require('http');
var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
var jsonp = require('koa-safe-jsonp');
var json = require('koa-json');
var uuid = require('bd-uuid');
var router = require('bd-router');
var autoload = require('bd-autoload');
var serve = require('bd-serve');
var config = require('bd-config');

function Application(options) {
  if (!(this instanceof Application)) {
    return new Application(options);
  }
  koa.call(this);
}

util.inherits(Application, koa);

var app = Application.prototype;

app.init = function() {
  this.apps = autoload();
  this.configs = config();
}

app.listen = function() {
  // dev logger
  if (this.env == 'development') {
    this.use(logger())
  }
  this.use(json());
  this.use(bodyParser());
  this.use(uuid());
  jsonp(this);
  serve(this);
  this.use(router(this.apps, this.configs));
  var server = http.createServer(this.callback());
  return server.listen.apply(server, arguments);
};

module.exports = Application;
