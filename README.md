 [node](http://nodejs.org).

```js
var attrcomb = require('object-attribute-combination');

var  obj: {
    'integerVal': 1000000,
    'stringVal': 'testing !@# value',
    'booleanVal': true,
    'objVal': {
    'str2': 'test_QWE123',
    'int2': -5000
  }
},
var result = attrcomb.power(obj);

/*
    [ { integerVal: 1000000 },
      { integerVal: 1000000, stringVal: 'testing !@# value' },
      { integerVal: 1000000,
        stringVal: 'testing !@# value',
        booleanVal: true },
      { integerVal: 1000000,
        stringVal: 'testing !@# value',
        booleanVal: true,
        objVal: { str2: 'test_QWE123', int2: -5000 } },
      { integerVal: 1000000,
        stringVal: 'testing !@# value',
        objVal: { str2: 'test_QWE123', int2: -5000 } },
      { integerVal: 1000000, booleanVal: true },
      { integerVal: 1000000,
        booleanVal: true,
        objVal: { str2: 'test_QWE123', int2: -5000 } },
      { integerVal: 1000000,
        objVal: { str2: 'test_QWE123', int2: -5000 } },
      { stringVal: 'testing !@# value' },
      { stringVal: 'testing !@# value', booleanVal: true },
      { stringVal: 'testing !@# value',
        booleanVal: true,
        objVal: { str2: 'test_QWE123', int2: -5000 } },
      { stringVal: 'testing !@# value',
        objVal: { str2: 'test_QWE123', int2: -5000 } },
      { booleanVal: true },
      { booleanVal: true,
        objVal: { str2: 'test_QWE123', int2: -5000 } },
      { objVal: { str2: 'test_QWE123', int2: -5000 }
    }]
  }]
*/
```

## Installation

```bash
$ npm install object-attribute-combination
```

## Features

  * Build all object attribute combination for testing

## Tests
```bash
$ npm install
$ npm test
```

## People

The original author of is [Edward Ma](https://github.com/mkcedward) 

## License

  [MIT](LICENSE)
  
[npm-url]: https://www.npmjs.com/package/object-attribute-combination
  