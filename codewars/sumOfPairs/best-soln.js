var sum_pairs=function(ints, s){
	//LESSON: When constructing a hash table, how can you use its intermediary form?
  var seen = {}// hash
  for (var i = 0; i < ints.length; ++i) {//iterate over all elements
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]]; //at each iteration, check if contents of the hash
    //match: return  [match, later element]; no need for comparison
    seen[ints[i]] = true //add to the hash
  }
}
