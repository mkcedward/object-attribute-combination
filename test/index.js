var data_driven = require('data-driven');
var expect = require('chai').expect;

var attrcomb = require('..');

describe('Index', function(){
  var objs = [{
    name: 'single string',
    obj: {
      'stringVal': 'test123'
    },
    expect: [{'stringVal': 'test123'}]
  }, {
    name: 'single string (numberic)',
    obj: {
      'stringVal': '123456'
    },
    expect: [{'stringVal': '123456'}]
  }, {
    name: 'single string (boolean, true)',
    obj: {
      'stringVal': 'true'
    },
    expect: [{'stringVal': 'true'}]
  }, {
    name: 'single string (boolean, false)',
    obj: {
      'stringVal': 'false'
    },
    expect: [{'stringVal': 'false'}]
  }, {
    name: 'single integer (3 digit)',
    obj: {
      'integerVal': 100
    },
    expect: [{'integerVal': 100}]
  }, {
    name: 'single integer (positive)',
    obj: {
      'integerVal': 1
    },
    expect: [{'integerVal': 1}]
  }, {
    name: 'single integer (negative)',
    obj: {
      'integerVal': -10
    },
    expect: [{'integerVal': -10}]
  }, {
    name: 'single integer (zero)',
    obj: {
      'integerVal': 0
    },
    expect: [{'integerVal': 0}]
  }, {
    name: 'single boolean (true)',
    obj: {
      'booleanVal': true
    },
    expect: [{'booleanVal': true}]
  }, {
    name: 'single boolean (false)',
    obj: {
      'booleanVal': false
    },
    expect: [{'booleanVal': false}]
  }, {
    name: 'mix string, integer, boolean and object',
    obj: {
      'integerVal': 1000000,
      'stringVal': 'testing !@# value',
      'booleanVal': true,
      'objVal': {
        'str2': 'test_QWE123',
        'int2': -5000
      }
    },
    expect: [ { integerVal: 1000000 },
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

  data_driven(objs, function() {
    it('{name}', function(ctx, done){
      var result = attrcomb.power(ctx.obj);
      expect(result).to.deep.equal(ctx.expect);
      done();
    });
  });
})