// solution 1: correct

function isValidSubsequence(array, sequence) {
  let sPos = 0;
	match = false;
	array.forEach(value => {
		if(value === sequence[sPos]){
			sPos++;
		}
		if(sPos === sequence.length){
			match = true;
		}
	});
	
	console.log(sPos);
	return match;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
