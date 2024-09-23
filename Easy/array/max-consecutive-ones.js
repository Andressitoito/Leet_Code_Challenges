/* Given a binary array nums, return the maximum number of consecutive 1's in the array. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	let count = 0;
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num === 1) {
			count++;
			if (count > max) {
				max = count;
			}
		} else {
			count = 0;
		}
	}

	console.log("max  ", max);

	return max;
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);


