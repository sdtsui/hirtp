// https://www.hackerrank.com/challenges/pangrams/submissions/code/12116377
process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

process.stdin.on('end', function () {
    var testCase = __input_stdin.split("\n")[0];
    var isPangram = function(sentence){
        var allLetters = "abcdefghijklmnopqrstuvwxyz".split('');
        var lettersInSentence = {};
        var notInSentence = function(char) {
          return (lettersInSentence[char] !== true);
        }
        var addToLettersInSentence = function(char){
          lettersInSentence[char.toLowerCase()] = true;
        };
        allLetters.forEach(addToLettersInSentence);
        var filteredLength = allLetters.filter(notInSentence).length;
        return ( filteredLength === 0 )
    }

    console.log(isPangram(testCase) ? "pangram": "not pangram" );
     // ? "pangram" : "not pangram"
});
