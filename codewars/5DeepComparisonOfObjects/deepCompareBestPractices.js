//Making hasOwnProperty redundant.
// Object.keys() returns an array
// length can be checked.
// Works on arrays, returns numeric keys.

//Checking in order:
//  deep equality, for values
//  type equality
//    treats arrays and objects as same, by using keys

// Array prototype every, returns true if everything in the callback function is true

function deepCompare(o1, o2) {
  if (typeof(o1) !== typeof(o2)) return false;
  if ((typeof(o1) !== "object")) return (o1 === o2) ? true : false;
  if ((! o1) || (! o2)) return true;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  return Object.keys(o1).every(function(key) {
    return deepCompare(o1[key], o2[key]);
  });  
};