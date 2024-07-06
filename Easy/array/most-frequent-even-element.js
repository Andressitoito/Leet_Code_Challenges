/* Given an integer array nums, return the most frequent even element.

If there is a tie, return the smallest one. If there is no such element, return -1. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
	let odd = nums.every((number) => number % 2 === 1);

	if (odd) {
		return -1;
	}

	const pairs = new Map();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num % 2 === 1) {
			continue;
		}

		if (pairs.has(num)) {
			pairs.set(num, pairs.get(num) + 1);
		} else {
			pairs.set(num, 1);
		}
	}

	let smaller = 100000;
	let frequency = 0;

	for (const num of pairs) {
		const number = num[0];
		const pair_frequency = num[1];

		if (pair_frequency === frequency) {
			if (number < smaller) {
				smaller = number;
			}
		} else if (pair_frequency > frequency) {
			smaller = number;

			frequency = pair_frequency;
		}
	}

	return smaller;
};

mostFrequentEven([0, 1, 2, 2, 4, 4, 1]);
