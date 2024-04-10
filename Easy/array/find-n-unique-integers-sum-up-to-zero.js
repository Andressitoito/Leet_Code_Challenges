/* Given an integer n, return any array containing n unique integers such that they add up to 0. */
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
	const response = Array(n);

	let left = -n;
	let right = n;

	for (let i = 0; i < n / 2; i++) {
		response[i] = left;
		response[response.length - 1 - i] = right;

		left += 1;
		right += -1;
	}

	let odd = n % 2;

	if (odd === 1) {
		const middle = Math.floor(n / 2);
		response[middle] = 0;
	}

	console.log("response ", response);

	return response;
};

sumZero(7);
