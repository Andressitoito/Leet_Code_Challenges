/* Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal. */
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
	if (mat.length === 1) {
		return mat[0][0];
	}

	const sums = [];

	if (mat.length % 2 !== 0) {
		const middle = Math.floor(1 + mat.length / 2);
		const middle_value = mat[middle - 1][middle - 1];
		sums.push(middle_value);
		let for_flag = middle - 2;

		for (let i = middle; i < [...mat].length; i++) {
			const arr_up = [...mat][i];
			const arr_down = [...mat][for_flag];

			sums.push(arr_down[for_flag]);
			sums.push(arr_down[i]);
			sums.push(arr_up[for_flag]);
			sums.push(arr_up[i]);
			for_flag--;
		}
	} else {
		const middle_plus = mat.length / 2;

		let for_flag = middle_plus - 1;

		for (let i = middle_plus; i < [...mat].length; i++) {
			const arr_up = [...mat][i];
			const arr_down = [...mat][for_flag];

			console.log("///////////////////////");
			console.log("arr_up i", arr_up);
			console.log("arr_up i", arr_up[i]);
			console.log("arr_up i", arr_up[for_flag]);
			console.log("arr_down for", arr_down);
			console.log("arr_down i", arr_down[i]);
			console.log("arr_down i", arr_down[for_flag]);
			console.log("///////////////////////");

			sums.push(arr_down[for_flag]);
			sums.push(arr_down[i]);
			sums.push(arr_up[for_flag]);
			sums.push(arr_up[i]);
			for_flag--;
		}
	}

	const total = sums.reduce((acc, elem) => {
		return (acc += elem);
	}, 0);
	console.log(total);
	return total;
};

diagonalSum([
	[11, 1, 1, 111],
	[2, 22, 222, 2],
	[3, 33, 333, 3],
	[44, 4, 4, 444],
]);
