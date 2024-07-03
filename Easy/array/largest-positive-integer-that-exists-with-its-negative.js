/* Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
	let response = -1;

	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		const numTrue = nums.find((number) => number === -num);

		if (numTrue) {
			response = numTrue;
			break;
		}
	}

	console.log("response ", response);

	return response;
};

findMaxK([2, -3, 3, -1, 10, 6, 7, -7, 1]);
