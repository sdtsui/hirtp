process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;


process.stdin.on('data', function (data) {
    __input_stdin += data;
});

process.stdin.on('end', function () {
    //simplify inputs with easier-to-remember/type variable names
    __input_stdin_array = __input_stdin.split("\n");
    var inLines = __input_stdin_array;
    var currentLine = __input_currentline;

    // var numCases = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    var firstThing = __input_stdin_array[currentLine++].trim();
    var allRocks = [];
    for (var i = 0; i < firstThing; i++){
        allRocks.push(inLines[currentLine++]);
    }

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


    console.log(returnGems(allRocks));
    // __input_currentline is auto-incremented, just access the next index of __input_stdin_array;
    // 
    // do stuff here...
});
