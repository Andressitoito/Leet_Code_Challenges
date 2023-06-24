/* Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i. */
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
	let total_1 = [0];

	for (let i = 0; i < n; i++) {
		const bits = (i + 1).toString(2);
		let ones = 0;
		for (let j = 0; j < bits.length; j++) {
			if (bits[j] == 1) {
				ones++;
			}
		}

		total_1.push(ones);
	}

	console.log(total_1);

	return total_1;
};

countBits(4);
