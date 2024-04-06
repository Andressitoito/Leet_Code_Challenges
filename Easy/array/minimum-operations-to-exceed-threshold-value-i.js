/* You are given a 0-indexed integer array nums, and an integer k.

In one operation, you can remove one occurrence of the smallest element of nums.

Return the minimum number of operations needed so that all elements of the array are greater than or equal to k. */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
	let operations = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num < k) {
			operations += 1;
		}
	}

	console.log("minOperations ", operations);

	return operations;
};

minOperations([2, 11, 10, 1, 3], 10);
