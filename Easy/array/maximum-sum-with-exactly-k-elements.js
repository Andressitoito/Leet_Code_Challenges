/* You are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in order to maximize your score:

Select an element m from nums.
Remove the selected element m from the array.
Add a new element with a value of m + 1 to the array.
Increase your score by m.
Return the maximum score you can achieve after performing the operation exactly k times. */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
	let sum = 0;

	const max = Math.max(...nums);

	const index = nums.findIndex((num) => num === max);

	for (let i = 0; i < k; i++) {
		sum += nums[index];

		nums[index] = nums[index] + 1;
	}

	console.log(sum);

	return sum;
};

maximizeSum([1, 2, 3, 4, 5], 3);
