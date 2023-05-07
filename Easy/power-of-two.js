/* Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x. */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
 if (n === 0 || n === 1) {
		return true;
	}

	let num = n;
	for (let i = 0; i < n; i++) {
		if (num === 2) {
			return true;
		}
		num = num / 2;
		if (num % 2 !== 0) {
			return false;
		}
	}
};


console.log(isPowerOfTwo(2048))