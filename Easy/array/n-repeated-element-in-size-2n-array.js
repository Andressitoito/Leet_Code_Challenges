/* You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
	let response = null;
	const numbers = {};

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (numbers[num]) {
			response = num;
			break;
		} else {
			numbers[num] = true;
		}
	}

	console.log("response ", response);

	return response;
};

repeatedNTimes([2, 1, 2, 5, 3, 2]);
