/* Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
	let good = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (nums[i] === nums[j] && i < j) {
				good++;
			}
		}
	}

	console.log(good);

	return good;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
