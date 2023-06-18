/* You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets. */
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
	let triplets = 0;

	for (let i = nums.length - 1; i >= 0; i--) {
		const init_num = nums[i];

		for (let j = nums.length - 1; j >= 0; j--) {
			if (i === j) {
				continue;
			}

			if (init_num - nums[j] === diff) {
				for (let k = j; k >= 0; k--) {
					if (nums[j] - nums[k] === diff) {
						triplets++;
					}
				}
			}
		}
	}

	console.log("triplets ", triplets);

	return triplets;
};

arithmeticTriplets([0, 1, 4, 6, 7, 10], 3);
