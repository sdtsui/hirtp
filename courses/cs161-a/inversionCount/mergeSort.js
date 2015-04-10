// var mergeStep = function(leftArr, rightArr){
// 	var resultLength = leftArr.length + rightArr.length;
// 	var result = [];
// 	var leftP = 0;
// 	var rightP = 0;
// 	for (var i = 0 ; i < resultLength; i++){
// 		if (leftP >= leftArr.length){
// 			result[i] = rightArr[rightP++];
// 		} else if (rightP >= rightArr.length){
// 			result[i] = leftArr[leftP++];
// 		} else if (leftArr[leftP] <= rightArr[rightP]){
// 			result[i] = leftArr[leftP++];
// 		} else {
// 			result[i] = rightArr[rightP++];
// 		}
// 	}
// 	return result;
// }
var mergeSort = function(input){
	//base cases:
	if (input.length === 1){
		return input;
	}
	/**
	 * Pseudocode:
	 * Keep track of pointers....
	 * Perform merges. 
	 */
	var inputClone = input.slice();
	var mergeStep = function(leftArr, rightArr){
		//this is definitely linear...
		var leftLength = leftArr ? leftArr.length : 0;
		var rightLength = rightArr ? rightArr.length : 0;

		var resultLength = leftLength + rightLength;
		var result = [];
		var leftP = 0;
		var rightP = 0;

		for (var i = 0 ; i < resultLength; i++){
			if (leftP >= leftLength){
				result[i] = rightArr[rightP++];
			} else if (rightP >= rightLength){
				result[i] = leftArr[leftP++];
			} else if (leftArr[leftP] <= rightArr[rightP]){
				result[i] = leftArr[leftP++];
			} else {
				result[i] = rightArr[rightP++];
			}
		}
		return result;
	}

	var splitStep = function(input){
		var midPoint = Math.floor(input.length/2);
		var result = [];
		result.push(input.slice(0,midPoint));
		result.push(input.slice(midPoint));
		return result;
	}
	var halves = splitStep(inputClone);
	return mergeStep(mergeSort(halves[0]), mergeSort(halves[1]));
};
