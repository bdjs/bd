/**
 * bd - index.js
 * Created by mds on 15/6/2.
 */

'use strict';

var bd = require('../lib/application');

var app = bd();


app.listen(3000, function () {
  console.log('listen 3000')
});
