/* You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false. */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
	let answer = null;

	const frequency = {};

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];
		frequency[element] = (frequency[element] || 0) + 1;
	}

	for (const num in frequency) {
		if (frequency[num] % 2 === 0) {
			answer = true;
		} else {
			answer = false;
			break;
		}
	}

	console.log(answer);
	return answer;
};

divideArray([3, 2, 4, 4, 4, 4, 3, 3, 2, 2, 2]);
