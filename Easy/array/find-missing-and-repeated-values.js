/* You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b. */
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
	const nums = [];
	const response = [0, 0];

	for (let i = 0; i < grid.length; i++) {
		const row = grid[i];

		for (let j = 0; j < row.length; j++) {
			const num = row[j];
			nums.push(num);
		}
	}

	const unique = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (!unique.includes(num)) {
			unique.push(num);
		} else {
			response[0] = num;
		}
	}

	for (let i = 0; i < nums.length; i++) {
		if (!unique.includes(i + 1)) {
			response[1] = i + 1;
		}
	}

	console.log("response ", response);

	return response;
};

findMissingAndRepeatedValues([
	[9, 1, 7],
	[8, 9, 2],
	[3, 4, 6],
]);
