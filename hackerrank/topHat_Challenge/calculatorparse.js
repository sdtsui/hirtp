/**
Dan's Notes: DO NOT USE EVAL!
Will parentheses ever be inbalanced? 
No negative numbers.

1. left to right parse
2. pure recursive function?

Let's try...method 1. With two arrays for 'operations' and 'numbers'!
Constraints seem to make parentheses irrelevant.(?)

Inputs: String of characters from above subset
Output: Single Number
Error handling: None? How about if output is not a number, throw an error.
Side effects: None

Pseudocode:
-strip string of parens...split/join
-create two ops/nums arrays
-iterate over the arrays, modifying the total
**/



//Realizing that parens matter. Will need a recursive solution after all. 
//Refactor after attempting problem 2...


/*
 * Complete the function below.
 */
function evaluate(expression) {
  var onlyNumbersAndOperators = expression.split('(').join("").split(')').join("");
  var arrayOfOnlyNumbersAndOperators = onlyNumbersAndOperators.split("");
  var currentTotal = 0;
  var numbers = [];
  var operators = [];

  arrayOfOnlyNumbersAndOperators.forEach(function(numberOrOperator, index){
    if (numberOrOperator === "+" || numberOrOperator === "-") {
        operators.push(numberOrOperator);
      } else {
        numbers.push(numberOrOperator);
      }
  });
    
    //The first number is always added, initializing the total:
  operators.unshift("+");

  while (numbers.length !== 0){
    var nextNumber = numbers.shift();
    var nextOperator = operators.shift();
    console.log('nextnumOp', nextNumber, nextOperator);
    if (nextOperator) {
      (nextOperator === '+') ? currentTotal += parseInt(nextNumber): 
      currentTotal -= parseInt(nextNumber);
    }
    console.log('currtot', currentTotal);
  }

  return currentTotal;    
}

//Last 5 minutes:
/**
Pseudocode for a recursive solution, after understanding that parentheses must be accounted for:

Evaluate an expression:
-base case is an expression 

If base case: use already implemented evaluate function that returns a totel from a string with no parens
Otherwise, find all of the simple (parent-free) expressions by passing the contents of each paren to further recursive calls

For example:
9+(2-(4+6)+1)-1-(2+5-(3+9+2))
   ^       ^     ^         ^
  expression a      expression b
Both of these gets passed to further recursive calls, so the final evaluation would be:

9 + resultA - 1 - resultB


**/



