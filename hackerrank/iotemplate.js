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
    // __input_currentline is auto-incremented, just access the next index of __input_stdin_array;
    // 
    // do stuff here...
});
