function range(from, to){
  var ranges = [];
  for (var i=from; i<=to; i++){
    ranges.push(i);
  }
  return ranges;
}

function getMin(input, defaultVal){
  var inputInt = parseInt(input);
  if (input !== undefined && !isNaN(inputInt) && input >= defaultVal){
    return input;
  }
  return defaultVal;
}

function getMax(input, defaultVal){
  var inputInt = parseInt(input);
  if (input !== undefined && !isNaN(inputInt) && input <= defaultVal){
    return input;
  }
  return defaultVal;
}

module.exports.range = range;
module.exports.getMin = getMin;
module.exports.getMax = getMax;