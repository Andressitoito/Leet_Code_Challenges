/* Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
	let pairs = 0;
	for (let i = 0; i < nums.length; i++) {
		const numI = nums[i];

		for (let j = i + 1; j < nums.length; j++) {
			const numJ = nums[j];

			if (numI + numJ < target) {
				pairs++;
			}
		}
	}

	console.log(pairs);
	return pairs;
};

countPairs([-1, 1, 2, 3, 1], 2);
