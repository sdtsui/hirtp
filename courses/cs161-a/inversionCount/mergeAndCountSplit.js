var mergeAndCountSplit = function(input){
	//base cases:
	if (input.elements.length === 1){
		return {
			elements: input.elements,
			inversions: 0
		}
	}

	var mergeStep = function(leftArr, rightArr){
		//this is definitely linear...
		//Assuming: all inversions will eventually be split inversions, far enough down in the tree
		var leftLength = leftArr ? leftArr.length : 0;
		var rightLength = rightArr ? rightArr.length : 0;

		var resultLength = leftLength + rightLength;
		var result = [];
		var splitCount = 0;
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
				splitCount += leftArr.length - leftP;
			}
		}
		return {
			elements: result,
			inversions: splitCount
		};
	}

	var splitStep = function(input){
		var midPoint = Math.floor(input.length/2);
		var result = [];
		result.push({
			//need a reference to elements here!
			input.slice(0,midPoint)
		});
		result.push(input.slice(midPoint));
		return result;
	}
	
	var halves = splitStep(input.elements);
	var leftResult = mergeAndCountSplit(halves[0]);
	var rightResult = mergeAndCountSplit(halves[1]);
	var mergedResults = mergeStep(leftResult,rightResult);

	var inputClone = {};
	inputClone.elements = mergedResults.elements;
	inputClone.inversions = mergedResults.inversions + leftResult.inversions + rightResult.inversions;

	//Split the arrays
	//hold the inversions for the left and right arrays
	//merge, and count the split inversions
	//return an object with the merged/sorted array, and all of the inversions...
	return inputClone;
};

var countInversions = function(array){
	debugger;
	var input = {
		elements: array
	}
	console.log(mergeAndCountSplit(input).inversions);
	

};
