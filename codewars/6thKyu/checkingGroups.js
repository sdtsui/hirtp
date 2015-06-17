function groupCheck(s){
  var rightToLeft = function(s){
    return (
      (s === ')') ? '(' :
      (s === ']') ? '[' :
      (s === '}') ? '{' : 
      undefined
      )
  };
  var isLeft = function(s) {
    return (
      ((s === '(' || s === '[') || s === '{')
      )
  };
  var queue = [];
  s.split('').forEach(function(el){
    if (isLeft(el)){
      queue.push(el);
    } else {
      if (queue[queue.length-1] === rightToLeft(el)){
        queue.pop();
      } else {
        queue.push(el);
      }
    }
  });

  return (queue.length === 0) ? true : false;
}