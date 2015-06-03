/**
 * bd - log.js
 * Created by mds on 15/6/2.
 */

'use strict';

var path = require('path');
var winston = require('winston');
var fs = require('fs');
var mkdirp = require('mkdirp');

var createLogger = function (filename) {
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.DailyRotateFile)({
        filename: filename,
        datePattern: '-yyyy-MM-dd.log',
        maxsize: 1024 * 1024 * 10 // 10MB
      })
    ]
  });
  return logger;
};

module.exports = function (app) {
  var dirname = path.dirname(process.mainModule.filename);
  var logsPath = path.join(dirname, 'logs', app);
  if (!fs.existsSync(logsPath)) {
    mkdirp.sync(logsPath);
  }
  var errorFile = path.join(logsPath, 'error');
  var accessFile = path.join(logsPath, 'access');
  var errorLogger = createLogger(errorFile);
  var accessLogger = createLogger(accessFile);
  return {
    error: errorLogger.error,
    access: accessLogger.info
  }
};
