function mergeSort(array) {
	let len = array.length;
	let mid = len/2;

	if(len === 1) {
		return array;
	}
	let left = mergeSort(array.splice(0, mid));
	let right = mergeSort(array);
	return merge(left, right);
}

function merge(left, right) {
	let combined = [];
	let countLeft = left.length;
	let countRight = right.length;
	let leftIndex = rightIndex = 0;
	while(leftIndex < countLeft && rightIndex < countRight) {
		if(left[leftIndex] > right[rightIndex]) {
			combined.push(right[rightIndex]);
			rightIndex++;
		} else {
			combined.push(left[leftIndex]);
			leftIndex++;
		}
	}
	while(leftIndex < countLeft) {
		combined.push(left[leftIndex]);
		leftIndex++;
	}
	while(rightIndex < countRight) {
		combined.push(right[rightIndex]);
		rightIndex++;
	}
	return combined;
}

let array = [20, 45, 93, 67, 10, 97, 52, 88];
let sortedArray = mergeSort(array);
console.log(sortedArray);	