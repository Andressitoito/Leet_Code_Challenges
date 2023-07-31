/* Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
	let sum = 0;
	let start = 0;

	while (true) {
		start++;

		sum += start;

		for (let j = 0; j < nums.length; j++) {
			sum += nums[j];

			if (sum < 1) {
				sum = 0;
				break;
			}
		}

		if (sum !== 0) {
			break;
		}
	}

	console.log("start ", start);

	return start;
};

minStartValue([-4, -1, 1, -5, -4, 5, 5]);
