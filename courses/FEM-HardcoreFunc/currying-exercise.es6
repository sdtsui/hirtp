//A function that adds 
//Made up exercise
let sumFirstFive = (...rest) => {
  let count = 0;
  let totalSoFar = rest.reduce(function(prev, current){
    return prev+current;
    count++;
  });

  if (rest.length >= 5){

  }
  let intermediateSum = (...rest) => {

  }
}

//read this blog:
// http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html

//Found this gist, in ES6:
// https://gist.github.com/ryanseddon/7330082

// See: use of rest parameters
// Options: --annotations --array-comprehension --async-functions --async-generators --exponentiation --export-from-extended --for-on --generator-comprehension --member-variables --proper-tail-calls --require --symbols --types 
function curried(fn, ...args) {
    var curry = (fnArgs) => {
      console.log("CALL :", fnArgs);
        if(fnArgs.length >= fn.length) {
            return fn.apply(this, fnArgs);
        }
        return (...cArgs) => curry([...fnArgs, ...cArgs]);
    }
    return curry(args);
}

var add = curried(function(a,b){ return a + b;});
var increment = add(1);
// (...cArgs) => curry([...fnArgs, ...cArgs])
console.log(increment(4));
// 5
console.log(add(1, 2));

// 3
