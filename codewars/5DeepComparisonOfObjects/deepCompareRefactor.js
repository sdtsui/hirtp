var deepCompare = function(o1, o2){
  if (typeof o1 !== typeof o2){
    return false;
  }
  if (typeof o1 !== 'object'){
    return o1 === o2;
  }
  if (!o1 || !o2){
    return true;
  }

  var o1keys = Object.keys(o1);
  if (o1keys.length !== Object.keys(o2).length){
    return false;
  }
  return o1keys.every(function(key){
    return deepCompare(o1[key], o2[key]);
  });
}