/* You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

You repeat the following procedure n / 2 times:

Remove the smallest element, minElement, and the largest element maxElement, from nums.
Add (minElement + maxElement) / 2 to averages.
Return the minimum element in averages. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
	nums.sort((a, b) => a - b);

	let averages = [];

	for (let i = 0; i < nums.length / 2; i++) {
		const num_a = nums[i];
		const num_b = nums[nums.length - 1 - i];

		averages.push(num_a + num_b);
	}

	const response = Math.min(...averages) / 2;

	console.log("response ", response);

	return response;
};

// minimumAverage([7, 8, 3, 4, 15, 13, 4, 1])
minimumAverage([1, 9, 8, 3, 10, 5]);
