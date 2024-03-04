/* Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k. */
/**
	* @param {number[]} nums
	* @param {number} k
	* @return {number}
	*/
var countPairs = function (nums, k) {
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		const numI = nums[i];

		for (let j = i + 1; j < nums.length; j++) {
			const numJ = nums[j];

			if (numI === numJ && (i * j) % k === 0) {
				count++;
			}
		}
	}

	console.log("count ", count);

	return count;
};

countPairs([3, 1, 2, 2, 2, 1, 3], 2);



