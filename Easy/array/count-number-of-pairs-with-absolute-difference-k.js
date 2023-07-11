/* Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0. */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
	let diff = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			if (i === j) {
				continue;
			}
			if (Math.abs(nums[i] - nums[j]) === k) {
				diff++;
			}
		}
	}

	console.log(diff);

	return diff;
};

countKDifference([3, 2, 1, 5, 4], 2);
