/* You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
	const frequency = {};

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (frequency[num]) {
			frequency[num] = frequency[num] + 1;
		} else {
			frequency[num] = 1;
		}
	}

	let max = 0;

	for (const num in frequency) {
		if (frequency[num] > max) {
			max = frequency[num];
		}
	}

	let occurrences = 0;

	for (const num in frequency) {
		if (frequency[num] === max) {
			occurrences += max;
		}
	}

	console.log("occurrences ", occurrences);

	return occurrences;
};

maxFrequencyElements([1, 2, 2, 3, 1, 4]);
