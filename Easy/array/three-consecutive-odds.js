/* Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false. */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
	let count = 0;
	let response = false;

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];

		if (num % 2 !== 0) {
			count++;
			if (count === 3) {
				response = true;
				break;
			}
		} else {
			count = 0;
		}
	}

	console.log("response ", response);

	return response;
};

threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]);
