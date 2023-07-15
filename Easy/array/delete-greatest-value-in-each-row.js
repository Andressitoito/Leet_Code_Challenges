/* You are given an m x n matrix grid consisting of positive integers.

Perform the following operation until grid becomes empty:

Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
Add the maximum of deleted elements to the answer.
Note that the number of columns decreases by one after each operation.

Return the answer after performing the operations described above. */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
	if (grid.length === 1) {
		const result = grid[0].reduce((acc, elem) => {
			return (acc += elem);
		}, 0);

		return result;
	}

	let sum = 0;

	for (let i = 0; i < grid[0].length; i++) {
		const max_nums = [];

		for (let j = 0; j < grid.length; j++) {
			const max = Math.max(...grid[j]);

			max_nums.push(max);
		}

		const max = Math.max(...max_nums);

		sum += max;

		const indexes = [];

		for (let j = 0; j < grid.length; j++) {
			const index = grid[j].findIndex((num) => num === max_nums[j]);

			indexes.push(index);

			grid[j][index] = 0;
		}
	}

	console.log(sum);

	return sum;
};

deleteGreatestValue([
[35, 52, 74, 92, 25], [65, 77, 1, 73, 32], [43, 68, 8, 100, 84], [80, 14, 88, 42, 53], [98, 69, 64, 40, 60]
]);
