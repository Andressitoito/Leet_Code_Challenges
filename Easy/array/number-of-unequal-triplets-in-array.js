/* You are given a 0-indexed array of positive integers nums. Find the number of triplets (i, j, k) that meet the following conditions:

0 <= i < j < k < nums.length
nums[i], nums[j], and nums[k] are pairwise distinct.
In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].
Return the number of triplets that meet the conditions. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
	let different = 0;

	for (let i = 0; i < nums.length; i++) {
		// const A = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			// const B = nums[j];
			for (let k = j + 1; k < nums.length; k++) {
				// const C = nums[k];

				// if (A !== B && B !== C && C !== A) {
				// 	different++;
				// }

				if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[k] !== nums[i]) {
					different++;
				}
			}
		}
	}

	console.log("different ", different)

	return different;
};

unequalTriplets([4, 4, 2, 4, 3]);
