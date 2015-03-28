var sum_pairs=function(ints, s){
	var inputs = ints.slice();
	var memoHash = {};
	var result;
	//create a memohash
	for(var i = 0 ; i < inputs.length; i++){
		if (!memoHash[inputs[i]]){
			//not already in hash
			var newMemo = {
				earliest : i,
				instances : [i]
			}
			memoHash[inputs[i]] = newMemo;
		} else {
			//already in hash
			memoHash[inputs[i]].instances.push(i)
		}
	}

	//start with out-of-index results.
	var resultIndicies = [inputs.length, inputs.length];
	var updateIfEarlier = function(match){
		if (match[1] < resultIndicies[1]){
			resultIndicies = match;
		}
	}

	for (var j = 0; j < inputs.length-1; j++){
		var missingPair = s - inputs[j]
		if(memoHash[missingPair]){
			if (missingPair === inputs[j]){
				//duplicate case, check if  there are multiple instances
				//only update resultIndicies if entire pair is earlier...
				var match = memoHash[missingPair];
				if (match.instances.length > 1) {
					updateIfEarlier([match.instances[0], match.instances[1]]);
				} else {
					continue;
				}
			} else {
				updateIfEarlier([j, memoHash[missingPair].instances[0]])
			}
		}
	}

	result = [inputs[resultIndicies[0]], inputs[resultIndicies[1]]];
	if (result[0] === undefined) {return undefined};
	if (memoHash[inputs[resultIndicies[0]]].instances[0]> memoHash[inputs[resultIndicies[1]]].instances[0]){
		//swap if unordered
		var temp = result[1];
		result[1] = result[0]
		result[0] = temp;
 	}
	return result ;
}