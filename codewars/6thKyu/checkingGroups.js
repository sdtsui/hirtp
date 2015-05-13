//balancedParens

function groupCheck(s){
  //start with queue
  //start adding to it:
    //if IN and top match, nix
    //if IN and bottom match, nix/delete bottom
  //if any remaining elements, return false
  var queue = [];
  var input = s.split('');
  console.log('input :', input);
  var index = {
    '(' : ['left', ')'],
    '[' : ['left', ']'],
    '{' : ['left', '}'],
    ')' : ['right', '('],
    ']' : ['right', '['],
    '}' : ['right', '{']
  };
  input.forEach(function(el, idx){
    if (index[el][0] === 'right'){
      if (queue[queue.length-1] === index[el][1]) {
        queue.pop();
      } else {
        queue.push(el);
      }      
    } else {
      queue.push(el);
    } 
    console.log('queue mid: ', queue);
  });
  console.log('queue End: ', queue);
  return (queue.length === 0) ? true : false;
}