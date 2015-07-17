var fs = require('fs');
var mCommonFactor = memoize(commonFactor);
var mletters = memoize(letters);
var mConsonants = memoize(consonants);
var mVowels  = memoize(vowels);

//BRUTE force, is *not* accepted.

//separate input data into lists of customers and products
//determine which is shorter
  //develop all permutations of the larger set that have the same size as the smaller set
    //measure the suitability score for each permutation
    //track the highest SS
    //log the highest SS

fs.readFileSync('./consumerproducts').toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(';');
        var customers = line[0].split(',');
        var products = line[1].split(',');
        var maxSS = 0;
        var permutation = [];
        var smallerSet = customers.length < products.length ? 1 : 0;

        function permutate (options, remaining) {
          //console.log(options);
          if(!remaining) {
            var totalSS = 0;
            permutation.forEach(function(permute, i) {
              var SS = 0;
              var productLetters = smallerSet ? mletters(permute) : mletters(products[i]);
              var customerLetters = smallerSet ? mletters(customers[i]) : mletters(permute);
              if(productLetters % 2 === 0) {
                SS = (smallerSet ? mVowels(customers[i]) : mVowels(permute)) * 1.5;
              } else {
                SS = smallerSet ? mConsonants(customers[i]) : mConsonants(permute);
              }
              if(productLetters < customerLetters ? 
                mCommonFactor(productLetters, customerLetters) : 
                mCommonFactor(customerLetters, productLetters)) {
                SS *= 1.5;
              }
              totalSS += SS;
            });
            //console.log(maxSS, totalSS);
            if (totalSS > maxSS) {
              maxSS = totalSS;
              //console.log(permutation);
            }
          } else {
            options.forEach(function(option, i) {
              permutation.push(option);
              permutate(options.slice(0,i).concat(options.slice(i+1)), remaining-1);
              permutation.pop();
            })
          }
        }
        smallerSet ? 
          permutate(products, customers.length) :
          permutate(customers, products.length);

        console.log(maxSS);
    }
});

function commonFactor(num1, num2) {
  //assuming num1 < num2
  for(var i = 2; i <= num1; i++) {
    if(num1%i === 0 && num2%i === 0) {
      return true;
    }
  } 
  return false;
}

function letters(string) {
  var result = string.match(/[a-z]/gi);
  return result ? result.length : 0;
}

function consonants(string) {
  var result = string.match(/[bcdfghjklmnpqrstvwxz]/gi);
  return result ? result.length : 0;
}

function vowels(string) {
  var result = string.match(/[aeiouy]/gi);
  return result ? result.length : 0;
}

function memoize(func) {
  var cache = {};
  return function() {
    var arg = JSON.stringify(arguments);
    if(!cache.hasOwnProperty(arg)) {
      cache[arg] = func.apply(undefined, arguments);
    }
    return cache[arg];
  }
}