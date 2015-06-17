/*
 * Complete the function below.
 */
function doesCircleExist(commands) {
    //Start with north, south, east, west, but instead use:
    //     NORTH, EAST, SOUTH, WEST
    //     Left and right turns traverse this array, allowing for smooth directional
    //     changes
    var directions = [[1,0], [0,1], [-1,0], [0,-1]];
    var xLoc = 0;
    var yLoc = 0;
    var currentLoc = "N";
    var robot = {
      xLoc : xLoc,
      yLoc : yLoc,
      directionsIndex : 0
    }

    /**
     * Accepts array, modifies x and y locations based on 
     * specified movement changes in directions
     * @param  {[type]} modifications [description]
     * @return {[type]}               [description]
     */
    robot.move = function () {
      var modifications = directions[this.directionsIndex];
      this.xLoc += modifications[0];
      this.yLoc += modifications[1];
    }

    //Changes robot's direction index to point at the right modifications, 
    //so move will work correctly
    robot.changeDirection = function (turn) {
      if (turn === "L"){
        this.directionsIndex = (this.directionsIndex - 1 +4) % 4;
      } else {
        //turn R
        this.directionsIndex = (this.directionsIndex + 1 +4) % 4;
      }
    }

    /**
     * Runs all of the input commands once by traversing the string.
     * @param  {[type]} commands [description]
     * @return {[type]}          [description]
     */
    var runCommands = function(commands){
      commands = commands.split("");
      commands.forEach( function(GLR, index){
        if(GLR === "G") {
          robot.move();
        } else {
          robot.changeDirection(GLR);
        }
      });
      maxStorage.checkAndUpdateMax(robot.xLoc);
      maxStorage.checkAndUpdateMax(robot.yLoc);
    }

    /**
     * Protected maxStorage object that tracks the maximum radius of the circle
     * Uses helper methods
     * @return {[type]} [description]
     */
    var makeMaxStorage = function() {
      var currentMax = 0;

      var getMax = function() {
        return currentMax;
      }

      var replaceMax = function(number) {
        currentMax = number;
      }

      var checkAndUpdateMax = function(number) {
        if (number > currentMax){
          replaceMax(number);
        }
      }
      return {
        getMax : getMax,
        replaceMax: replaceMax,
        checkAndUpdateMax : checkAndUpdateMax
      }
    }

    var maxStorage = makeMaxStorage();

    //Partial Solution: 
    //If the max changes from 5000 iterations to the next 5000, return 
    //Realizing now a better solution would involve checking the net change of a single runCommands() iteration
    //using the diff in location, instead of checking at each end runCommands.
    for ( var i = 0; i < 10; i++){
      runCommands(commands);
    }
    
    var oldMax = maxStorage.getMax();
    for (var j = 0 ; j < 100; j++){
      runCommands(commands);
    }    
    var newMax = maxStorage.getMax();
    
    return (newMax === oldMax) ? "YES" : "NO";
}
