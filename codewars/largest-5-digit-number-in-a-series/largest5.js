//Lesson: clarify questions:
////'5 consecutive digits' does not necessarily refer to sum. It can refer to a number comprised of the string, from the 5 consecutive digits.

function solution(digits){
  var allDigits = digits.split("");
  for (var h = 0; h < digits.length; h++){
    allDigits[h] = parseInt(allDigits[h]);
  }
  var numbers = {};
  for (var i = 0 ; i < allDigits.length-4; i++){
    var newNumber = parseInt(allDigits.slice(i, i+5).join(""));
    numbers[i] = newNumber;
  }
  var max = numbers[0];
  for (var idx in numbers){
    if (numbers[idx] > max){
      max = numbers[idx];
    }
  }
  // console.log(typeof max);
  // console.log(typeof max.toString());
  // console.log(typeof parseInt(max));
  console.log(typeof parseInt(max.toString()));
  return parseFloat(max.toString());
}