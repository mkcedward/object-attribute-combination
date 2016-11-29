var SEPARATOR = ',';

function generate(numbers) {
  var results = [];
  var fx = function(prefix, nums) {
    for (var i=0; i<nums.length; i++) {
      var combination = prefix !== '' ? prefix + SEPARATOR + nums[i] : '' + nums[i];
      results.push(combination);
      fx(combination, nums.slice(i + 1));
    }
  }
  fx('', numbers);
  return results;
}

function clean(combinations, minCnt, maxCnt){
  var cleanResults = [];
  for (var idx in combinations){
    var elements = combinations[idx].split(SEPARATOR);
    var cnt = elements.length;
    if (cnt >= minCnt && cnt <=maxCnt){
      var cleanElements = [];
      for (var element in elements){
        cleanElements.push(parseInt(elements[element]) - 1);
      }
      cleanResults.push(cleanElements);
    }
  }

  return cleanResults;
}

module.exports.generate = generate;
module.exports.clean = clean;