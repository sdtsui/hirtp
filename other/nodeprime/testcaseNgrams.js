var findLongestCompound = function(err, data) {
  if (err) throw err;
  // var wordList = data.split('\n');
  var testCase1 = [
    'cat', 
    'cats', 
    'catsdogcats', 
    'catxdogcatsrat', 
    'dog', 
    'dogcatsdog,', 
    'hippopotamuses', 
    'rat', 
    'ratcat', 
    'ratcatdogcats'];
  wordList = testCase1;
  console.log('inputLength : ', wordList.length);


  var sortedWords = wordList.sort(function(word1, word2) {
    if (word1.length > word2.length){
      return 1;
    };
    if (word1.length < word2.length){
      return -1;
    };
    return 0;
  });
  console.log("sortedWords : ", sortedWords);

  var wordHashTable = wordList.reduce(function(accumulator, value, index) {
    accumulator[value] = true;
    return accumulator;
  },{})

  var isCompound = function(word) {
    for (var i = word.length; i > -1; i--){
      var prefix = word.slice(0,i);
      var suffix = word.slice(i, word.length);
      console.log('p, s', prefix, suffix);
      if (wordHashTable[prefix] === true){
        if (suffix.length === 0) {
          return true;
        }
        return isCompound(suffix);
      }
    }
    return false;
  };
  while (sortedWords.length !== 0) {
    var largestWord = sortedWords.pop();
    wordHashTable[largestWord] = false;
    if (isCompound(largestWord)) {
      return largestWord;
    }
  }
  return null; // no words are compounds

}
console.log("RESULT :", findLongestCompound());