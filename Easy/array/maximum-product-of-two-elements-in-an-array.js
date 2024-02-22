/* Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1). */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		const numI = nums[i];

		for (let j = i + 1; j < nums.length; j++) {
			const numJ = nums[j];

			const result = (numI - 1) * (numJ - 1);

			if (result > max) {
				max = result;
			}
		}
	}

	console.log("max ", max);

	return max;
};

maxProduct([3, 4, 5, 2]);
