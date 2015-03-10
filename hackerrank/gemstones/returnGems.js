var returnGems = function(allRocks){
  var numGems = 0;
  var rockLength = allRocks.length;

  var gems = {};
  var checkedElements = {};

  /**
   * Expects a string of length one, and a string representing a rock, 
   * to check if string exists in rock.
   */
  var existsInRock = function(element, rock){
    return rock.indexOf(element) !== -1;
  }

  /**
   * Expects element (string of length one).
   * Also expects index in input array, of source rock.
   */
  var existsInAllOtherRocks = function(element, index){
    for (var i = 0; i < rockLength-1; i++){
      if (!existsInRock(element, allRocks[(index+1+i)%rockLength])){
        return false;
      }
    }
    return true;
  }

  // debugger;
  for (var i = 0; i < allRocks.length; i++){
    //loop for each rock
    var currentRock = allRocks[i];
    for (var j = 0; j < currentRock.length; j++){
      var currentChar = currentRock[j];
      if (checkedElements.hasOwnProperty(currentChar)){
        continue;
      } else if (existsInAllOtherRocks(currentChar, i)){
        if (!gems.hasOwnProperty(currentChar)){
          gems[currentChar] = currentChar;
        }
      }
      checkedElements[currentChar] = currentChar;
    }
  }

  for (var ownProp in gems){
    numGems++;
  }
  return numGems;
}


var testInput = [ 'abcdde', 'baccd' , 'eeabg'];
console.log("result :", returnGems(testInput));