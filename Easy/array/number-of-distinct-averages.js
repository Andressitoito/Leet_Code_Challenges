/* You are given a 0-indexed integer array nums of even length.

As long as nums is not empty, you must repetitively:

Find the minimum number in nums and remove it.
Find the maximum number in nums and remove it.
Calculate the average of the two removed numbers.
The average of two numbers a and b is (a + b) / 2.

For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
Return the number of distinct averages calculated using the above process.

Note that when there is a tie for a minimum or maximum number, any can be removed. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
	if (nums.length === 2) {
		return 1;
	}

	nums.sort((a, b) => a - b);

	const averages = [];

	for (let i = 0; i < nums.length / 2; i++) {
		const num_a = nums[i];
		const num_b = nums[nums.length - i - 1];
		const average = (num_a + num_b) / 2;

		if (!averages.includes(average)) {
			averages.push(average);
		}
	}

	console.log("Averages ", averages, averages.length);

	return averages.length;
};

distinctAverages([4, 1, 4, 0, 3, 5]);
