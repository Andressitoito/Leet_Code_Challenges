/* Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid. */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
	let sum = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] < 0) {
				sum++;
			}
		}
	}

	console.log(sum);

	return sum;
};

countNegatives([
	[4, 3, 2, -1],
	[3, 2, 1, -1],
	[1, 1, -1, -2],
	[-1, -1, -2, -3],
]);
