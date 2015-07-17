//codeshare.io
process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var testCase = __input_stdin_array[0];
    var isPangram = function(sentence){
        var allLetters = "abcdefghijklmnopqrstuvwxyz".split('');
        var letters = {};
        for (var i = 0; i < sentence.length; i++){
          letters[sentence[i].toLowerCase()] = true;
        }
        var notInSentence = allLetters.filter( function(val){
          return (letters[val] !== true);
        })
        return (notInSentence.length === 0);
    }

    console.log(isPangram(testCase) ? "pangram": "not pangram" );
     // ? "pangram" : "not pangram"
});
