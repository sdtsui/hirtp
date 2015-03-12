//only simple values and objects and arrays containing:
//strings, booleans, numbers
//so no recursion, just check structure for primitives...

function deepCompare(o1, o2) {
  o1Type = typeof o1;
  o2Type = typeof o2;
  if (o1Type !== o2Type){
    return false;
  }
  if (o1Type !== 'object'){
    //is a primitive, deep compare
    return o1 === o2;
  }
  debugger;

  //both are arrays, deepCompare each array element
  if (Array.isArray(o1)){
    if (o1.length !== o2.length){
      return false;
    }
    for (var i = 0 ; i < o2.length; i++){
      if (!deepCompare(o1[i], o2[i])){
        return false;
      }
    }
    return true;
  } else {
    //both are objects, not arrays, loop a certain way
    for (var prop in o1){
      if (!o2.hasOwnProperty(prop)){
        return false;
      }
      if (!deepCompare(o1[prop], o2[prop])){
        return false;
      }
    }
    for (var prop2 in o2){
      if (!o1.hasOwnProperty(prop2)){
        return false;
      }
      if (!deepCompare(o1[prop], o2[prop])){
        return false;
      }
    }
    return true;
  }
  console.log("Error, not object!");
  return null;
};
