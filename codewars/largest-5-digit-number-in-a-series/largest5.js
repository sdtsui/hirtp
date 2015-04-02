//Lesson: clarify questions:
////'5 consecutive digits' does not necessarily refer to sum. It can refer to a number comprised of the string, from the 5 consecutive digits.


//recursive solution...
function solution(digits){
  if (digits.length <= 5) return Number(digits);
  debugger;
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}

//takeaways:
//  substr: single argument: slices from 0 or that arg location, number
//    two args: slices from 0 to 1.
//    can replace substrings with new strings, by re-concatenating from indicies

//Math.Math can be used to search comma separated number arguments
//Math.max.apply(null, arr) can find the max in an array.
//use of Number constructor instead of ParseInt