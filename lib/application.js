'use strict'

/**
 * bd - application.js
 * Created by mds on 15/6/2.
 * Upgraded by jarvis on 2018-01-24
 *
 * node.js -v 8.0
 */

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const jsonp = require('koa-safe-jsonp')
const json = require('koa-json')
const views = require('bd-views')
const router = require('bd-router')
const autoload = require('bd-autoload')
const serve = require('bd-serve')
const config = require('bd-config')

module.exports = class Application extends Koa {
  constructor () {
    super()
    this.init()
  }

  init () {
    this.apps = autoload()
    this.configs = config()
  }

  middlewares () {
    this.use(json())
    this.use(bodyParser())
    views(this)
    jsonp(this)
    serve(this)
    this.use(router(this.configs, this.apps))
  }
}
