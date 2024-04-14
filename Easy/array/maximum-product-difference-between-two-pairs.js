/* The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
	let max = 0;
	let min = Infinity;

	for (let i = 0; i < nums.length; i++) {
		const numI = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			const numJ = nums[j];
			const result = numI * numJ;

			if (result > max) {
				max = result;
			}
		}
	}

	for (let i = 0; i < nums.length; i++) {
		const numI = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			const numJ = nums[j];
			const result = numI * numJ;

			if (result < min) {
				min = result;
			}
		}
	}

	const result = max - min;
	console.log("result ", result);

	return result;
};

maxProductDifference([5, 6, 2, 7, 4]);
