var vietnamSnake = function(){
  debugger;
  var combinationIsValid = function(permutations){
    console.log(permutations.length);
    var permutationIsValid = function(A,B,C,D,E,F,G,H,I) {
      return ((A + ((13 * B) / C) + D + (12 * E) − F − 11 + ((G * H) / I) − 10)
        === 66) ? true:false
    }
    var validPermutations = [];
    permutations.forEach(function(v) {
      if (permutationIsValid(v[0],v[1],v[2],v[3],v[4],v[5],v[6],v[7],v[8])) {
        validPermutations.push(value);
      }
    });

    return validPermutations;
  }

  var permute = function(number) {
    var permutations = [];
    var allNumbers = [];
    for (var j = 1 ; j < 10; i++){
      allNumbers.push(i);
    }
    //put all possible numbers in the array, ordered.
    var findPermutations = function(currentNumbers, possibleNumbers){
      if (currentNumbers.length === 9 && possibleNumbers.length === 0){
        permutations.push(currentNumbers);
        return;
      } 

      /**
       * for Each possibleNumber
       * take off one of the numbers
       *   add it to currentNumbers. findPermutations on the split.
       *   take it off currentNumbers. 
       * put it back in the same places as possibleNumbers.
       *
       * whenever a permutation is found, it gets added to the list
       *  
       */

      for (var i = 0; i < possibleNumbers.length ; i++){
        var nextNumbers = currentNumbers.splice();
        var nextPossible = possibleNumbers.splice();

        //delete the element at a certain index
        //put it on the currentNumbers
        //remove it 
        //put the element back

        nextNumbers.push(nextPossible.splice(i, 1));
        debugger;
        findPermutations(nextNumers, nextPossible);
        nextPossible.splice(i, 0, nextNumbers.pop());
      }
    }
    findPermutations([], [1,2,3,4,5,6,7,8,9]);

    return permutations;
  }

  //Length or Solutions
  return combinationIsValid(permute(9)).length;
};



