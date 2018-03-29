# bd
An koa-based Node.js web framework

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![NPM downloads][downloads-image]][npm-url]
[![Node.js dependencies][david-image]][david-url]


## Installation

```
$ npm install bd --save
```

## Restriction

`node -v >= 8.0`  
`koa -v >= 2.0`

## Example

directory structure

```text
apps
 |-app1
     |-public
         |-index.html
     |-routes
         |-route1.js
         |-route2.js
 |-app2
     |-public
         |-index.html
     |-routes
         |-route1.js
         |-route2.js
logs
  |-app1
     |-access-xx.log
     |-error-xxx.log
  |-app2
     |-access-xx.log
     |-error-xxx.log         
index.js        
```

```javascript
var bd = require('bd');

var app = bd();

app.listen(3030);

```


## Authors

  - [mdemo](https://github.com/demohi)
  - [jiasm](https://github.com/jiasm)

# License

  MIT
  
[npm-image]: https://img.shields.io/npm/v/bd.svg?style=flat-square
[npm-url]: https://npmjs.org/package/bd
[travis-image]: https://img.shields.io/travis/demohi/bd/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/demohi/bd
[downloads-image]: https://img.shields.io/npm/dm/bd.svg?style=flat-square
[david-image]: https://img.shields.io/david/demohi/bd.svg?style=flat-square
[david-url]: https://david-dm.org/demohi/bd
