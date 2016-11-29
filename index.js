var combgen = require('./lib/combination');
var util = require('./lib/util');

function power(obj, min, max){
  if (obj === undefined){
    return [];
  }

  var attributes = [];
  for (var key in obj){
    if (obj.hasOwnProperty(key)) {
      attributes.push({
        key: key,
        value: obj[key]
      })
    }
  }

  var minCnt = util.getMin(min, 1);
  var maxCnt = util.getMax(max, attributes.length);

  var results = [];
  var ranges = util.range(1, attributes.length);
  combinations = combgen.clean(combgen.generate(ranges), minCnt, maxCnt);

  for (var i in combinations){   
    var result = {};
    for (var element in combinations[i]){
      var j = combinations[i][element];
      result[attributes[j].key] = attributes[j].value;
    }

    results.push(result);
  }

  return results;
}

module.exports.power = power;