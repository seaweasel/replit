// soln 1 backup
function findClosestValueInBst(tree, target) {
	if(!tree){
		return null;
	}
	
	result = null;
  if(tree.value !== target){
		if (target < tree.value){
			result = findClosestValueInBst(tree.left, target);
		} else {
			result = findClosestValueInBst(tree.right, target);
		}
	}
	
	if(result && Math.abs(target - result) < Math.abs(target - tree.value)){
		 return result;
	 }
	
	return tree.value;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
