/* A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false. */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
	arr.sort((a, b) => a - b);
	const difference = arr[1] - arr[0];
	let control = arr[0] - difference;
	for (let i = 0; i < arr.length; i++) {
		control += difference;
		if (control !== arr[i]) {
			return false;
		}
	}

	console.log(true);

	return true;
};

canMakeArithmeticProgression([1, 2, 4]);
